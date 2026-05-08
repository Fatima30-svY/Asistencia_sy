// ============================================================
// ARCHIVO: Scaner.js
// FUNCIÓN: Controla la cámara del dispositivo y lee códigos QR.
//          Usa la librería html5-qrcode (se carga desde internet
//          la primera vez, después el navegador la guarda en
//          caché y ya no necesita conexión).
//          Cuando detecta un QR, extrae el número de control
//          y llama a registrarEntrada() de Asistencia.js
// ============================================================

// Variable global que guarda la instancia del escáner
let escaner = null;

// Control para evitar escaneos dobles en menos de 2 segundos
let ultimoEscaneo = 0;

// ============================================================
// FUNCIÓN: iniciarEscaner()
// PROPÓSITO: Enciende la cámara y comienza a leer códigos QR.
//            Se llama cuando el docente presiona "Iniciar".
// ============================================================
function iniciarEscaner() {

  // Crear una instancia del escáner apuntando al div "camara"
  escaner = new Html5Qrcode("camara");

  const configuracion = {
    fps: 10,        // Cuántas veces por segundo revisa si hay un QR
    qrbox: 250      // Tamaño del cuadro de escaneo en pantalla
  };

  // Iniciar la cámara trasera del dispositivo
  escaner.start(
    { facingMode: "environment" },  // "environment" = cámara trasera
    configuracion,
    onQRDetectado,                  // Función que se ejecuta al leer un QR
    onQRError                       // Función que se ejecuta si hay error
  )
  .then(() => {
    // Cámara encendida: mostrar botón de detener, ocultar el de iniciar
    document.getElementById("btn-iniciar").style.display = "none";
    document.getElementById("btn-detener").style.display = "inline-block";
    mostrarMensaje("Cámara lista. Apunta al código QR del alumno.", "info");
  })
  .catch(err => {
    mostrarMensaje("No se pudo acceder a la cámara: " + err, "error");
  });
}

// ============================================================
// FUNCIÓN: detenerEscaner()
// PROPÓSITO: Apaga la cámara y libera los recursos.
//            Se llama cuando el docente presiona "Detener".
// ============================================================
function detenerEscaner() {
  if (escaner) {
    escaner.stop().then(() => {
      escaner.clear();
      escaner = null;
      document.getElementById("btn-iniciar").style.display = "inline-block";
      document.getElementById("btn-detener").style.display = "none";
      mostrarMensaje("Escáner detenido.", "info");
    });
  }
}

// ============================================================
// FUNCIÓN: onQRDetectado(texto)
// PROPÓSITO: Se ejecuta automáticamente cuando la cámara
//            lee un código QR exitosamente.
//            El parámetro "texto" es lo que dice el QR,
//            en nuestro caso es el número de control del alumno.
// ============================================================
function onQRDetectado(texto) {

  // Evitar registros dobles: ignorar si pasaron menos de 2 segundos
  const ahora = Date.now();
  if (ahora - ultimoEscaneo < 2000) return;
  ultimoEscaneo = ahora;

  // Limpiar espacios accidentales del texto leído
  const numControl = texto.trim();

  // Llamar a registrarEntrada() de Asistencia.js
  const resultado = registrarEntrada(numControl);

  // Mostrar el resultado en pantalla
  if (resultado.exito) {
    mostrarTarjeta(resultado.alumno);
    mostrarMensaje(resultado.mensaje, "exito");
    reproducirSonido("exito");
  } else {
    mostrarMensaje(resultado.mensaje, "error");
    reproducirSonido("error");
  }
}

// ============================================================
// FUNCIÓN: onQRError(error)
// PROPÓSITO: Se ejecuta cuando la cámara no puede leer el QR.
//            Es normal que se llame muchas veces mientras
//            el usuario busca el ángulo correcto.
//            No mostramos este error en pantalla para no
//            confundir al docente.
// ============================================================
function onQRError(error) {
  // Silencioso — es normal mientras se busca el QR
}

// ============================================================
// FUNCIÓN: mostrarTarjeta(alumno)
// PROPÓSITO: Muestra una tarjeta grande en pantalla con los
//            datos del alumno recién registrado.
// ============================================================
function mostrarTarjeta(alumno) {
  const tarjeta = document.getElementById("tarjeta-alumno");
  if (!tarjeta) return;

  tarjeta.innerHTML = `
    <div class="tarjeta-exito">
      <div class="tarjeta-icono">✓</div>
      <h2>${alumno.nombre}</h2>
      <p class="dato-control">N° Control: <strong>${alumno.numControl}</strong></p>
      <p class="dato-grupo">Grupo: <strong>${alumno.grupo}</strong> &nbsp;|&nbsp; Taller: <strong>${alumno.taller}</strong></p>
      <p class="dato-hora">Hora de entrada: <strong>${alumno.hora}</strong></p>
    </div>
  `;

  // Ocultar la tarjeta después de 4 segundos
  setTimeout(() => {
    tarjeta.innerHTML = "";
  }, 4000);
}

// ============================================================
// FUNCIÓN: mostrarMensaje(texto, tipo)
// PROPÓSITO: Muestra un mensaje de estado debajo del escáner.
//            tipo puede ser: "exito", "error" o "info"
// ============================================================
function mostrarMensaje(texto, tipo) {
  const el = document.getElementById("mensaje-estado");
  if (!el) return;
  el.textContent  = texto;
  el.className    = "mensaje " + tipo;
}

// ============================================================
// FUNCIÓN: reproducirSonido(tipo)
// PROPÓSITO: Emite un sonido corto de confirmación o error
//            usando la API de audio del navegador.
//            No necesita archivos externos.
// ============================================================
function reproducirSonido(tipo) {
  try {
    const ctx        = new (window.AudioContext || window.webkitAudioContext)();
    const oscilador  = ctx.createOscillator();
    const ganancia   = ctx.createGain();

    oscilador.connect(ganancia);
    ganancia.connect(ctx.destination);

    if (tipo === "exito") {
      // Sonido agradable: tono alto y corto
      oscilador.frequency.value = 880;
      ganancia.gain.value       = 0.3;
    } else {
      // Sonido de error: tono bajo
      oscilador.frequency.value = 220;
      ganancia.gain.value       = 0.3;
    }

    oscilador.start();
    oscilador.stop(ctx.currentTime + 0.15);
  } catch (e) {
    // Si el navegador no soporta audio, simplemente ignorar
  }
}
