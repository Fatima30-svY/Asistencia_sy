// ============================================================
// ARCHIVO: Asistencia.js
// FUNCIÓN: Maneja el registro de asistencia.
//          Guarda en memoria a quién ya entró y a qué hora,
//          y genera la lista visible en pantalla.
// ============================================================

// Arreglo donde se van guardando los registros del día
const registrosDeHoy = [];

// Grupo actualmente seleccionado (null = todos)
let grupoActivo = null;

// ============================================================
// FUNCIÓN: seleccionarGrupo(grupo)
// PROPÓSITO: Filtra la sesión al grupo indicado.
//            Se llama desde index.html al elegir grupo.
// ============================================================
function seleccionarGrupo(grupo) {
  grupoActivo = grupo;

  // Mostrar nombre del grupo en el encabezado
  const etiqueta = document.getElementById("grupo-activo-label");
  if (etiqueta) {
    etiqueta.textContent = grupo ? `Grupo: ${grupo}` : "Todos los grupos";
  }

  // Ocultar pantalla de selección y mostrar app
  document.getElementById("pantalla-seleccion").style.display = "none";
  document.getElementById("app-principal").style.display      = "block";
}

// ============================================================
// FUNCIÓN: registrarEntrada(numControl)
// PROPÓSITO: Recibe el número de control escaneado,
//            busca al alumno y lo registra si no ha entrado.
// RETORNA: objeto con { exito, mensaje, alumno }
// ============================================================
function registrarEntrada(numControl) {

  // Paso 1: Buscar al alumno en la base de datos (Estudiantes.js)
  const alumno = buscarEstudiante(numControl);

  // Paso 2: Si no existe ese número de control, avisar
  if (!alumno) {
    return {
      exito  : false,
      mensaje: "Número de control no encontrado.",
      alumno : null
    };
  }

  // Paso 3: Verificar que el alumno pertenece al grupo activo
  if (grupoActivo && alumno.grupo !== grupoActivo) {
    return {
      exito  : false,
      mensaje: `${alumno.nombre} pertenece al grupo ${alumno.grupo}, no al grupo ${grupoActivo}.`,
      alumno : null
    };
  }

  // Paso 4: Verificar si el alumno ya fue registrado hoy
  const yaRegistrado = registrosDeHoy.find(r => r.numControl === numControl);
  if (yaRegistrado) {
    return {
      exito  : false,
      mensaje: `${alumno.nombre} ya fue registrado a las ${yaRegistrado.hora}.`,
      alumno : alumno
    };
  }

  // Paso 5: Obtener la hora y fecha actuales del sistema
  const ahora = new Date();
  const hora  = ahora.toLocaleTimeString("es-MX");
  const fecha = ahora.toLocaleDateString("es-MX");

  // Paso 6: Crear el registro y guardarlo en el arreglo
  const registro = {
    numControl : alumno.numControl,
    nombre     : alumno.nombre,
    grupo      : alumno.grupo,
    taller     : alumno.taller,
    hora       : hora,
    fecha      : fecha,
    estado     : "presente"   // ← Bug corregido: comillas alrededor de presente
  };

  registrosDeHoy.push(registro);

  // Paso 7: Actualizar la lista visible en pantalla
  actualizarTabla();

  return {
    exito  : true,
    mensaje: `Bienvenido, ${alumno.nombre}`,
    alumno : registro
  };
}

// ============================================================
// FUNCIÓN: actualizarTabla()
// PROPÓSITO: Dibuja en pantalla la tabla con todos los alumnos
//            que han sido registrados en la sesión actual.
// ============================================================
function actualizarTabla() {
  const tbody = document.getElementById("cuerpo-tabla");
  if (!tbody) return;

  tbody.innerHTML = "";

  const registrosInvertidos = [...registrosDeHoy].reverse();

  registrosInvertidos.forEach((r, index) => {
    const fila = document.createElement("tr");

    // Color de fila según estado
    const colorFila = r.estado === "retardo" ? "fila-retardo"
                    : r.estado === "falta"   ? "fila-falta"
                    : "";
    fila.className = colorFila;

    fila.innerHTML = `
      <td>${registrosDeHoy.length - index}</td>
      <td>${r.numControl}</td>
      <td>${r.nombre}</td>
      <td>${r.grupo}</td>
      <td>${r.taller}</td>
      <td>${r.hora}</td>
      <td>
        <select class="select-estado" onchange="cambiarEstado('${r.numControl}', this.value)">
          <option value="presente" ${r.estado === "presente" ? "selected" : ""}>Presente</option>
          <option value="retardo"  ${r.estado === "retardo"  ? "selected" : ""}>Retardo</option>
          <option value="falta"    ${r.estado === "falta"    ? "selected" : ""}>Falta</option>
        </select>
      </td>
    `;
    tbody.appendChild(fila);
  });

  // Actualizar el contador de asistentes
  const contador = document.getElementById("contador");
  if (contador) contador.textContent = registrosDeHoy.length;
}

// ============================================================
// FUNCIÓN: cambiarEstado(numControl, nuevoEstado)
// ============================================================
function cambiarEstado(numControl, nuevoEstado) {
  const registro = registrosDeHoy.find(r => r.numControl === numControl);
  if (registro) {
    registro.estado = nuevoEstado;
    actualizarTabla();
  }
}

// ============================================================
// FUNCIÓN: exportarCSV()
// ============================================================
function exportarCSV() {
  if (registrosDeHoy.length === 0) {
    alert("No hay registros para exportar.");
    return;
  }

  let csv = "No.,Num Control,Nombre,Grupo,Taller,Hora de Entrada,Estado\n";

  registrosDeHoy.forEach((r, i) => {
    csv += `${i + 1},${r.numControl},${r.nombre},${r.grupo},${r.taller},${r.hora},${r.estado}\n`;
  });

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url  = URL.createObjectURL(blob);
  const link = document.createElement("a");

  const grupo = grupoActivo ? `_grupo${grupoActivo}` : "";
  link.setAttribute("href", url);
  link.setAttribute("download",
    `asistencia${grupo}_${new Date().toLocaleDateString("es-MX").replace(/\//g, "-")}.csv`
  );
  link.click();
}
