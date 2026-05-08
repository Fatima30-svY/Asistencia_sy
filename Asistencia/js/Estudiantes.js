// ============================================================
// ARCHIVO: Estudiantes.js
// FUNCIÓN: Base de datos estática de todos los alumnos.
//          Aquí se almacenan los datos de cada estudiante.
//          En un sistema real esto vendría de una base de datos,
//          pero al no tener internet, los guardamos directamente
//          en el código como un arreglo de objetos.
// ============================================================

const ESTUDIANTES = [

  // ----------------------------------------------------------
  // GRUPO 201 — Tutor: Lic. Hugo Sánchez Vences
  // ----------------------------------------------------------
  { id: 1,  grupo: "201", numControl: "25415082650005", nombre: "Almazan Gonzalez Yulisa",           taller: "Cartonería y manualidades" },
  { id: 2,  grupo: "201", numControl: "25415082650006", nombre: "Antonio Galvan Emiliano",           taller: "Robótica" },
  { id: 3,  grupo: "201", numControl: "25415082650087", nombre: "Beltrán Solorzano Omar",            taller: "Volibol" },
  { id: 4,  grupo: "201", numControl: "25415082650007", nombre: "Bernal Plata Oscar Martin",         taller: "Futbol" },
  { id: 5,  grupo: "201", numControl: "25415082650029", nombre: "Calderon Rojas Kimberly",           taller: "Robótica" },
  { id: 6,  grupo: "201", numControl: "25415082650088", nombre: "Crispin Escobar Daniel",            taller: "Declamación" },
  { id: 7,  grupo: "201", numControl: "25415082650015", nombre: "Delgado Guadarrama Renata",         taller: "Robótica" },
  { id: 8,  grupo: "201", numControl: "25415082650021", nombre: "Esquivel Gomez Eber",               taller: "Cartonería y manualidades" },
  { id: 9,  grupo: "201", numControl: "25415082650018", nombre: "Estanislao Nazario Aremi",          taller: "Cartonería y manualidades" },
  { id: 10, grupo: "201", numControl: "25415082650089", nombre: "Estrada Castillo Alejandro",        taller: "Futbol" },
  { id: 11, grupo: "201", numControl: "25415082650019", nombre: "Estrada Flores Axel Vladimir",      taller: "Futbol" },
  { id: 12, grupo: "201", numControl: "25415082650022", nombre: "Flores Diaz Valeria",               taller: "Cartonería y manualidades" },
  { id: 13, grupo: "201", numControl: "25415082650025", nombre: "Frutis Aguilar Axel Gael",          taller: "Futbol" },
  { id: 14, grupo: "201", numControl: "25415082650026", nombre: "Frutis Gomora Diego",               taller: "Robótica" },
  { id: 15, grupo: "201", numControl: "25415082650031", nombre: "Garcia Gutierrez Mayrin Guadalupe", taller: "Volibol" },
  { id: 16, grupo: "201", numControl: "25415082650032", nombre: "Garduño Gutierrez Nathalia",        taller: "Cartonería y manualidades" },
  { id: 17, grupo: "201", numControl: "25415082650039", nombre: "Guadarrama Valentin Lizeth Guadalupe", taller: "Volibol" },
  { id: 18, grupo: "201", numControl: "25415082650042", nombre: "Gutierrez Frutis Darisa Dolores",   taller: "Cartonería y manualidades" },
  { id: 19, grupo: "201", numControl: "25415082650111", nombre: "Hernandez Rodriguez Tanya Jatziel", taller: "Volibol" },
  { id: 20, grupo: "201", numControl: "25415082650051", nombre: "Maldonado Velazquez Yulyana",       taller: "Futbol Femenil" },
  { id: 21, grupo: "201", numControl: "25415082650054", nombre: "Medina Casimiro Britani Yoneli",    taller: "Cartonería y manualidades" },
  { id: 22, grupo: "201", numControl: "25415082650056", nombre: "Miralrio Mondragon Gabriela",       taller: "Cartonería y manualidades" },
  { id: 23, grupo: "201", numControl: "25415082650057", nombre: "Miralrio Ruiz Adamari",             taller: "Cartonería y manualidades" },
  { id: 24, grupo: "201", numControl: "25415082650062", nombre: "Peñaloza Reyes Luis Angel",         taller: "Robótica" },
  { id: 25, grupo: "201", numControl: "25415082650064", nombre: "Perales Escobar Jose",              taller: "" },
  { id: 26, grupo: "201", numControl: "25415082650065", nombre: "Ponce Jaimes Janeth",               taller: "Cartonería y manualidades" },
  { id: 27, grupo: "201", numControl: "25415082650070", nombre: "Reyes Gonzalez Ariana",             taller: "Volibol" },
  { id: 28, grupo: "201", numControl: "25415082650074", nombre: "Rodriguez Velazquez Angelica Yareli", taller: "Cartonería y manualidades" },
  { id: 29, grupo: "201", numControl: "25415082650080", nombre: "Sanchez Rebollar Alan Jesus",       taller: "Futbol" },
  { id: 30, grupo: "201", numControl: "25415082650100", nombre: "Sánchez Tavira Juan Pablo",         taller: "Futbol" },
  { id: 31, grupo: "201", numControl: "25415082650113", nombre: "Vazquez Martínez Miguel Angel",     taller: "Guitarra" },
  { id: 32, grupo: "201", numControl: "25415082650083", nombre: "Villanueva Santana Natalia",        taller: "Cartonería y manualidades" },
  { id: 33, grupo: "201", numControl: "25415082650114", nombre: "Zepeda González Yamilet",           taller: "Volibol" },

  // ----------------------------------------------------------
  // GRUPO 202 — Tutor: Lic. María Isabel Martínez López
  // ----------------------------------------------------------
  { id: 34, grupo: "202", numControl: "25415082650003", nombre: "Aleman Vera Vicente Santiago",      taller: "Futbol" },
  { id: 35, grupo: "202", numControl: "25415082650008", nombre: "Carmona Luis Domingo",              taller: "Voleibol" },
  { id: 36, grupo: "202", numControl: "25415082650009", nombre: "Casimiro Luis Mareli Fernanda",     taller: "Danza" },
  { id: 37, grupo: "202", numControl: "25415082650011", nombre: "Cruz Chavez Emiliano",              taller: "Ajedrez" },
  { id: 38, grupo: "202", numControl: "25415082650013", nombre: "Cruz Luna Vania Itzel",             taller: "Cartoneria" },
  { id: 39, grupo: "202", numControl: "25415082650014", nombre: "Delgado Guadarrama Patricio",       taller: "Robotica" },
  { id: 40, grupo: "202", numControl: "25415082650016", nombre: "Diaz Castillo Rosa Maria",          taller: "Guitarra" },
  { id: 41, grupo: "202", numControl: "25415082650020", nombre: "Estrada Estrada Alma Corina",       taller: "Cartoneria" },
  { id: 42, grupo: "202", numControl: "25415082650024", nombre: "Flores Escobar Regina",             taller: "Cartoneria" },
  { id: 43, grupo: "202", numControl: "25415082650023", nombre: "Flores Escobar Rubi Abigail",       taller: "Danza" },
  { id: 44, grupo: "202", numControl: "25415082650027", nombre: "Frutis Toledo Yaretzi",             taller: "Cartoneria" },
  { id: 45, grupo: "202", numControl: "25415082650103", nombre: "Garcia Aparicio Iñaki",             taller: "Futbol" },
  { id: 46, grupo: "202", numControl: "25415082650028", nombre: "Garcia Castillo Jaqueline",         taller: "Danza" },
  { id: 47, grupo: "202", numControl: "25415082650034", nombre: "Gonzalez Rebollar Maria Pamela",    taller: "Cartoneria" },
  { id: 48, grupo: "202", numControl: "25415082650036", nombre: "Guadarrama Amaro Angelica Sofia",   taller: "Danza" },
  { id: 49, grupo: "202", numControl: "25415082650038", nombre: "Guadarrama Ramos Karen",            taller: "Basquetbol" },
  { id: 50, grupo: "202", numControl: "25415082650086", nombre: "Hernández Reyes Marcela",           taller: "Cartoneria" },
  { id: 51, grupo: "202", numControl: "25415082650043", nombre: "Jimenez Gonzalez Jacquelinne",      taller: "Cartoneria" },
  { id: 52, grupo: "202", numControl: "25415082650048", nombre: "Lopez Lopez Juan Diego",            taller: "Guitarra" },
  { id: 53, grupo: "202", numControl: "25415082650108", nombre: "Martinez Sotelo Oliver",            taller: "" },
  { id: 54, grupo: "202", numControl: "25415082650053", nombre: "Maya Gomez Fernando",               taller: "Futbol" },
  { id: 55, grupo: "202", numControl: "25415082650106", nombre: "Mercado Alvarez Fatima Yaretzy",    taller: "Cartoneria" },
  { id: 56, grupo: "202", numControl: "25415082650059", nombre: "Morales Rebollar Pablo",            taller: "Ajedrez" },
  { id: 57, grupo: "202", numControl: "25415082650093", nombre: "Perales Carmona Alondra",           taller: "Danza" },
  { id: 58, grupo: "202", numControl: "25415082650109", nombre: "Perez Ortiz Maria Esther",          taller: "Cartoneria" },
  { id: 59, grupo: "202", numControl: "25415082650067", nombre: "Reyes Estanislao Alexander",        taller: "Futbol" },
  { id: 60, grupo: "202", numControl: "25415082650068", nombre: "Reyes Estrada Alfonso",             taller: "Ajedrez" },
  { id: 61, grupo: "202", numControl: "25415082650098", nombre: "Reyes Reyes Emanuel",               taller: "Futbol" },
  { id: 62, grupo: "202", numControl: "25415082650075", nombre: "Rosales Martinez Roberto Adrian",   taller: "Ajedrez" },
  { id: 63, grupo: "202", numControl: "25415082650099", nombre: "Sabino Carbajal Hernán",            taller: "Futbol" },
  { id: 64, grupo: "202", numControl: "25415082650078", nombre: "Sanchez Garcia Gabriel",            taller: "Ajedrez" },
  { id: 65, grupo: "202", numControl: "25415082650079", nombre: "Sanchez Osnaya Adrian",             taller: "Futbol" },

  // ----------------------------------------------------------
  // GRUPO 203 — Tutor: Lic. Fernanda Carolina Rojas Sánchez
  // ----------------------------------------------------------
  { id: 66, grupo: "203", numControl: "25415082650002", nombre: "Aleman Estrada Karla Valentina",    taller: "Guitarra" },
  { id: 67, grupo: "203", numControl: "25415082650010", nombre: "Colin Telles Maximiliano",          taller: "Robotica" },
  { id: 68, grupo: "203", numControl: "25415082650012", nombre: "Cruz Frutis Perla Arleth",          taller: "Cartoneria" },
  { id: 69, grupo: "203", numControl: "25415082650030", nombre: "Garcia Gomez Ariel",                taller: "Futbol" },
  { id: 70, grupo: "203", numControl: "25415082650033", nombre: "Gonzalez Almazan Gabriel",          taller: "Robotica" },
  { id: 71, grupo: "203", numControl: "25415082650102", nombre: "Gonzalez Estrada Evelin",           taller: "Cartoneria" },
  { id: 72, grupo: "203", numControl: "25415082650104", nombre: "Gonzalez Lopez Oswaldo",            taller: "Robotica" },
  { id: 73, grupo: "203", numControl: "25415082650035", nombre: "Gonzalez Segura Brayan",            taller: "Robotica" },
  { id: 74, grupo: "203", numControl: "25415082650090", nombre: "González Aguilar Angelica",         taller: "Danza" },
  { id: 75, grupo: "203", numControl: "25415082650037", nombre: "Guadarrama Olivares Cesar Alexis",  taller: "Cartoneria" },
  { id: 76, grupo: "203", numControl: "25415082650040", nombre: "Gutierrez Cipriano Yuri Anet",      taller: "Cartoneria" },
  { id: 77, grupo: "203", numControl: "25415082650041", nombre: "Gutierrez Gonzalez Mayte",          taller: "Ajedrez" },
  { id: 78, grupo: "203", numControl: "25415082650044", nombre: "Jaramillo Mercado Sebastian",       taller: "Robotica" },
  { id: 79, grupo: "203", numControl: "25415082650045", nombre: "Lopez Espinoza Yael",               taller: "Basquetbol" },
  { id: 80, grupo: "203", numControl: "25415082650046", nombre: "Lopez Estrada Andrea",              taller: "Cartoneria" },
  { id: 81, grupo: "203", numControl: "25415082650047", nombre: "Lopez Estrada Andres",              taller: "Robotica" },
  { id: 82, grupo: "203", numControl: "25415082650049", nombre: "Lopez Peñaloza Juan Cristobal",     taller: "Robotica" },
  { id: 83, grupo: "203", numControl: "25415082650050", nombre: "Loza Osorio Itzamari",              taller: "Danza" },
  { id: 84, grupo: "203", numControl: "25415082650055", nombre: "Merced Escobar Maria Guadalupe",    taller: "Declamacion" },
  { id: 85, grupo: "203", numControl: "25415082650060", nombre: "Osorio Osorio Maria Guadalupe",     taller: "Ajedrez" },
  { id: 86, grupo: "203", numControl: "25415082650063", nombre: "Peñaloza Reyes Yamileth",           taller: "Cartoneria" },
  { id: 87, grupo: "203", numControl: "25415082650112", nombre: "Pereda Huerta Fernando Samuel",     taller: "Ajedrez" },
  { id: 88, grupo: "203", numControl: "25415082650094", nombre: "Pérez López Luis Angel",            taller: "Basquetbol" },
  { id: 89, grupo: "203", numControl: "25415082650066", nombre: "Ramirez Lopez Fatima",              taller: "Danza" },
  { id: 90, grupo: "203", numControl: "25415082650095", nombre: "Rebollar Aguilar Graciela",         taller: "Cartoneria" },
  { id: 91, grupo: "203", numControl: "25415082650096", nombre: "Rebollo García Axel",               taller: "Ajedrez" },
  { id: 92, grupo: "203", numControl: "25415082650097", nombre: "Reyna Guadarrama Karolina",         taller: "Cartoneria" },
  { id: 93, grupo: "203", numControl: "25415082650072", nombre: "Rodriguez Frutis Miguel Angel",     taller: "" },
  { id: 94, grupo: "203", numControl: "25415082650073", nombre: "Rodriguez Peñaloza Jose Maria",     taller: "Futbol" },
  { id: 95, grupo: "203", numControl: "25415082650076", nombre: "Salazar Casas Jazmin",              taller: "Declamacion" },
  { id: 96, grupo: "203", numControl: "25415082650081", nombre: "Sotelo Sotelo Azucena",             taller: "Cartoneria" },
  { id: 97, grupo: "203", numControl: "25415082650084", nombre: "Zepeda Estrada Regina",             taller: "Danza" },

  // ----------------------------------------------------------
  // GRUPO 401 — Tutor: Tec. Fabian Guadarrama López
  // ----------------------------------------------------------
  { id: 98,  grupo: "401", numControl: "24415082650001", nombre: "Aguilar Osorio Sarai",             taller: "Ajedrez" },
  { id: 99,  grupo: "401", numControl: "24415082650002", nombre: "Albarran Sabino Wendy",            taller: "Voleibol" },
  { id: 100, grupo: "401", numControl: "24415082650013", nombre: "Camacho Lopez Jesus Miguel",       taller: "Voleibol" },
  { id: 101, grupo: "401", numControl: "24415082650019", nombre: "Carmona Herrera Luz Maria",        taller: "Ajedrez" },
  { id: 102, grupo: "401", numControl: "24415082650021", nombre: "Casimiro Carmona Violeta",         taller: "Cartonería" },
  { id: 103, grupo: "401", numControl: "24415082650028", nombre: "Chavez Machado Josselyn Harumi",   taller: "Danza" },
  { id: 104, grupo: "401", numControl: "24415082650030", nombre: "Cruz Gomez Alexis",                taller: "Voleibol" },
  { id: 105, grupo: "401", numControl: "24415082650047", nombre: "Gonzalez Almazan Gael",            taller: "Fútbol" },
  { id: 106, grupo: "401", numControl: "24415082650052", nombre: "Gonzalez Liera Jorge Ramon",       taller: "Voleibol" },
  { id: 107, grupo: "401", numControl: "24415082650054", nombre: "Gonzalez Osorio Adal Benjamin",    taller: "Fútbol" },
  { id: 108, grupo: "401", numControl: "24415082650058", nombre: "Gutierrez Carmona Eduardo",        taller: "Basquetbol" },
  { id: 109, grupo: "401", numControl: "24415082650065", nombre: "Jaramillo Guadarrama Maria De Jesus", taller: "Voleibol" },
  { id: 110, grupo: "401", numControl: "24415082650066", nombre: "Jaramillo Reyes Alan Rafael",      taller: "Voleibol" },
  { id: 111, grupo: "401", numControl: "24415082650071", nombre: "Lopez Lopez Noemi Jimena",         taller: "Ajedrez" },
  { id: 112, grupo: "401", numControl: "24415082650075", nombre: "Medina Miralrio Hector Alexander", taller: "Ajedrez" },
  { id: 113, grupo: "401", numControl: "24415082650076", nombre: "Mendoza Jimenez Brandon Axel",     taller: "Voleibol" },
  { id: 114, grupo: "401", numControl: "24415082650080", nombre: "Nieblas Armenta Angel Tadeo",      taller: "Basquetbol" },
  { id: 115, grupo: "401", numControl: "24415082650084", nombre: "Peña Jimenez Adan",                taller: "Fútbol" },
  { id: 116, grupo: "401", numControl: "24415082650083", nombre: "Peñaloza Flores Perla Ahime",      taller: "Danza" },
  { id: 117, grupo: "401", numControl: "24415082650091", nombre: "Ramirez Castillo Ulises",          taller: "Fútbol" },
  { id: 118, grupo: "401", numControl: "24415082650093", nombre: "Rebollo Rebollar Bryan Cruz",      taller: "Basquetbol" },
  { id: 119, grupo: "401", numControl: "24415082650098", nombre: "Rodriguez Esquivel Karol Maria",   taller: "Danza" },
  { id: 120, grupo: "401", numControl: "24415082650113", nombre: "Velazquez Guerras Vanessa Lizeth", taller: "Voleibol" },

  // ----------------------------------------------------------
  // GRUPO 402 — Tutor: Ing. Joel González Martínez
  // ----------------------------------------------------------
  { id: 121, grupo: "402", numControl: "24415082650007", nombre: "Ayala Casiano Daniela",            taller: "Basquet" },
  { id: 122, grupo: "402", numControl: "24415082650011", nombre: "Bonilla Sanchez Ximena",           taller: "Basquet" },
  { id: 123, grupo: "402", numControl: "24415082650012", nombre: "Calderon Peñaloza Javier",         taller: "Robotica" },
  { id: 124, grupo: "402", numControl: "24415082650018", nombre: "Carmona Santiago Isaias",          taller: "Robotica" },
  { id: 125, grupo: "402", numControl: "24415082650024", nombre: "Castillo Loza Ivan",               taller: "Volibol" },
  { id: 126, grupo: "402", numControl: "24415082650022", nombre: "Castillo Sanchez Melanie",         taller: "Volibol" },
  { id: 127, grupo: "402", numControl: "24415082650023", nombre: "Castillo Sanchez Pamela",          taller: "Futbol" },
  { id: 128, grupo: "402", numControl: "24415082650033", nombre: "Escobar Colin Jaquelin",           taller: "Basquet" },
  { id: 129, grupo: "402", numControl: "24415082650036", nombre: "Estanislao Bernal Kevin Pablo",    taller: "Robotica" },
  { id: 130, grupo: "402", numControl: "24415082650043", nombre: "Frutis Caballero Ana Victoria",    taller: "Cartoneria y manualidades" },
  { id: 131, grupo: "402", numControl: "24415082650041", nombre: "Frutis Gomora Miguel Angel",       taller: "Declamación" },
  { id: 132, grupo: "402", numControl: "24415082650042", nombre: "Frutis Zepeda Aldo",               taller: "Futbol" },
  { id: 133, grupo: "402", numControl: "24415082650048", nombre: "Gonzalez Casiano Citlalli",        taller: "Futbol" },
  { id: 134, grupo: "402", numControl: "24415082650049", nombre: "Gonzalez Espinosa Mariana",        taller: "Declamación" },
  { id: 135, grupo: "402", numControl: "24415082650051", nombre: "Gonzalez Hernandez Daysy Regina",  taller: "Basquet" },
  { id: 136, grupo: "402", numControl: "24415082650055", nombre: "Gonzalez Peñaloza Joselin",        taller: "Ajedrez" },
  { id: 137, grupo: "402", numControl: "24415082650056", nombre: "Guadarrama Miranda Guillermo",     taller: "Volibol" },
  { id: 138, grupo: "402", numControl: "24415082650063", nombre: "Hernández González Kevin",         taller: "Ajedrez" },
  { id: 139, grupo: "402", numControl: "24415082650072", nombre: "Lopez Vargas Zaira",               taller: "Cartoneria y manualidades" },
  { id: 140, grupo: "402", numControl: "24415082650082", nombre: "Peña Diaz Nayeli",                 taller: "Cartoneria y manualidades" },
  { id: 141, grupo: "402", numControl: "24415082650108", nombre: "Toledo Guadarrama Maria Ines",     taller: "Ninguno" },
  { id: 142, grupo: "402", numControl: "24415082650115", nombre: "Vera Osorio Bryan Omar",           taller: "Volibol" },

  // ----------------------------------------------------------
  // GRUPO 403 — Tutor: Lic. Elisa Escobar de Paz
  // ----------------------------------------------------------
  { id: 143, grupo: "403", numControl: "24415082650005", nombre: "Avila Caballero Jose Alexander",   taller: "Ajedrez" },
  { id: 144, grupo: "403", numControl: "24415082650006", nombre: "Avila Gonzalez Lizbeth",           taller: "Cartoneria" },
  { id: 145, grupo: "403", numControl: "24415082650020", nombre: "Casimiro Perales Lucero",          taller: "Cartoneria" },
  { id: 146, grupo: "403", numControl: "24415082650025", nombre: "Castillo Victor Brayan",           taller: "Futbol" },
  { id: 147, grupo: "403", numControl: "24415082650029", nombre: "Corangues Osorio Dylan Adrian",    taller: "Robotica" },
  { id: 148, grupo: "403", numControl: "24415082650037", nombre: "Estrada Bahena Ivan",              taller: "Robotica" },
  { id: 149, grupo: "403", numControl: "24415082650039", nombre: "Filemon Guevara Tadeo Ramses",     taller: "Basquetbol" },
  { id: 150, grupo: "403", numControl: "24415082650044", nombre: "Garcia Becerril Oliver",           taller: "Futbol" },
  { id: 151, grupo: "403", numControl: "24415082650045", nombre: "Garcia Gomez Alexander Noe",       taller: "Futbol" },
  { id: 152, grupo: "403", numControl: "24415082650057", nombre: "Guadarrama Lozano Emiliano",       taller: "Basquetbol" },
  { id: 153, grupo: "403", numControl: "24415082650059", nombre: "Gutierrez Guadarrama Maria De Jesus", taller: "Danza" },
  { id: 154, grupo: "403", numControl: "24415082650068", nombre: "Lino Tola Claudia Regina",         taller: "Futbol Femenil" },
  { id: 155, grupo: "403", numControl: "24415082650069", nombre: "Lopez Flores Wendy Janeth",        taller: "Futbol Femenil" },
  { id: 156, grupo: "403", numControl: "24415082650070", nombre: "Lopez Osorio Linda Paulina",       taller: "Danza" },
  { id: 157, grupo: "403", numControl: "24415082650073", nombre: "Marin Muñoz Ricardo",              taller: "Ajedrez" },
  { id: 158, grupo: "403", numControl: "24415082650074", nombre: "Martinez Sanchez Alan",            taller: "Futbol" },
  { id: 159, grupo: "403", numControl: "24415082650078", nombre: "Muñoz Vera Fatima Yamile",         taller: "Futbol Femenil" },
  { id: 160, grupo: "403", numControl: "24415082650079", nombre: "Nazario Gonzalez Jimena",          taller: "Danza" },
  { id: 161, grupo: "403", numControl: "24415082650089", nombre: "Ponce Lopez Angel",                taller: "Basquetbol" },
  { id: 162, grupo: "403", numControl: "24415082650090", nombre: "Ramirez Arias Alina",              taller: "Cartoneria" },
  { id: 163, grupo: "403", numControl: "24415082650097", nombre: "Reza Ochoa Alexander",             taller: "Futbol Femenil" },
  { id: 164, grupo: "403", numControl: "24415082650101", nombre: "Salazar Hernandez Brisa Danae",    taller: "Basquetbol" },
  { id: 165, grupo: "403", numControl: "24415082650105", nombre: "Sanchez Gama Rubianey",            taller: "Danza" },

  // ----------------------------------------------------------
  // GRUPO 601 — Tutor: Lic. Erika Román de Nova
  // ----------------------------------------------------------
  { id: 166, grupo: "601", numControl: "23415082650003", nombre: "Bernal Garcia Gerardo",            taller: "Voleibol" },
  { id: 167, grupo: "601", numControl: "23415082650051", nombre: "Carbajal Garcia Daniel",           taller: "Voleibol" },
  { id: 168, grupo: "601", numControl: "23415082650004", nombre: "Carmona Hernandez Kenia Sherlyn",  taller: "Ajedrez" },
  { id: 169, grupo: "601", numControl: "23415082650007", nombre: "Casimiro Luis Alan Arturo",        taller: "Pendiente" },
  { id: 170, grupo: "601", numControl: "23415082650009", nombre: "Decena Molina Elizabeth",          taller: "Robótica" },
  { id: 171, grupo: "601", numControl: "23415082650010", nombre: "Delgado Guadarrama Nicolas",       taller: "Fútbol" },
  { id: 172, grupo: "601", numControl: "23415082240026", nombre: "Espinoza Alvarado Miguel Angel",   taller: "Voleibol" },
  { id: 173, grupo: "601", numControl: "23415082650011", nombre: "Estrada Lemus Diana Marina",       taller: "Declamación" },
  { id: 174, grupo: "601", numControl: "23415082240029", nombre: "Frutis Velazco Maria Jose",        taller: "Voleibol" },
  { id: 175, grupo: "601", numControl: "23415082650017", nombre: "Gonzalez Lopez Jose Guadalupe",    taller: "Fútbol" },
  { id: 176, grupo: "601", numControl: "23415082650019", nombre: "Gutierrez Diaz Rocio Abril",       taller: "Robótica" },
  { id: 177, grupo: "601", numControl: "23415082650020", nombre: "Hernandez Estanislao Minerva",     taller: "Fútbol" },
  { id: 178, grupo: "601", numControl: "23415082650021", nombre: "Hernandez Jaramillo Anali Josefina", taller: "Declamación" },
  { id: 179, grupo: "601", numControl: "23415082650026", nombre: "Lopez Osorio Jose Maria",          taller: "Robótica" },
  { id: 180, grupo: "601", numControl: "23415082650029", nombre: "Lopez Reyes Yoselin",              taller: "Ajedrez" },
  { id: 181, grupo: "601", numControl: "23415082650030", nombre: "Lopez Santana Hector",             taller: "Voleibol" },
  { id: 182, grupo: "601", numControl: "23415082650031", nombre: "Lozada Torres Haziel Antonio",     taller: "Robótica" },
  { id: 183, grupo: "601", numControl: "23415082650037", nombre: "Miranda Cardoso Alan Elouan",      taller: "Voleibol" },
  { id: 184, grupo: "601", numControl: "23415082650039", nombre: "Muñoz Gutierrez Cesar Jaen",       taller: "Fútbol" },
  { id: 185, grupo: "601", numControl: "23415082650040", nombre: "Peñaloza Estrada Alexander",       taller: "Robótica" },
  { id: 186, grupo: "601", numControl: "23415082650044", nombre: "Rebollar Diaz Ana Fernanda",       taller: "Cartoneria" },
  { id: 187, grupo: "601", numControl: "23415082650053", nombre: "Salinas Gutierrez Naomi Citlali",  taller: "Cartoneria" },
  { id: 188, grupo: "601", numControl: "23415082650054", nombre: "Sanchez Osnaya Carlos",            taller: "Fútbol" },
  { id: 189, grupo: "601", numControl: "23415082650060", nombre: "Vera Osnaya Leandro",              taller: "Ajedrez" },

  // ----------------------------------------------------------
  // GRUPO 602 — Tutor: Lic. Marisol González García
  // ----------------------------------------------------------
  { id: 190, grupo: "602", numControl: "23415082650005", nombre: "Carmona Luis Yuridia Briseida",    taller: "Cartoneria" },
  { id: 191, grupo: "602", numControl: "23415082650008", nombre: "Cruz Luna Ian Rafael",             taller: "Guitarra" },
  { id: 192, grupo: "602", numControl: "23415082650012", nombre: "Estrada Sanchez Abril Janeth",     taller: "Cartoneria" },
  { id: 193, grupo: "602", numControl: "23415082650015", nombre: "Garcia Frutis Aymmar",             taller: "Cartoneria" },
  { id: 194, grupo: "602", numControl: "23415082650018", nombre: "Guadarrama Olivares Marco Antonio", taller: "Voleibol" },
  { id: 195, grupo: "602", numControl: "23415082240118", nombre: "Gutierrez Carmona Leonardo",       taller: "Voleibol" },
  { id: 196, grupo: "602", numControl: "23415082650025", nombre: "Lopez Espinosa Miguel Angel",      taller: "Robotica" },
  { id: 197, grupo: "602", numControl: "23415082650028", nombre: "Lopez Ramirez Francisco Javier",   taller: "Futbol" },
  { id: 198, grupo: "602", numControl: "23415082650033", nombre: "Martinez Jimenez Delia",           taller: "Cartoneria" },
  { id: 199, grupo: "602", numControl: "23415082650034", nombre: "Martinez Marin Mauricio",          taller: "Ajedrez" },
  { id: 200, grupo: "602", numControl: "23415082650036", nombre: "Millan Salinas Geraldine",         taller: "Declamación" },
  { id: 201, grupo: "602", numControl: "23415082650043", nombre: "Rebollar Cacique Yazmin",          taller: "Declamación" },
  { id: 202, grupo: "602", numControl: "23415082650046", nombre: "Reyes Guadarrama Jose Angel",      taller: "Voleibol" },
  { id: 203, grupo: "602", numControl: "23415082650047", nombre: "Reyes Mejia Citlalli",             taller: "Cartoneria" },
  { id: 204, grupo: "602", numControl: "23415082650048", nombre: "Reyes Rosas Oscar",                taller: "Voleibol" },
  { id: 205, grupo: "602", numControl: "23415082650050", nombre: "Reyna Garcia Leandro",             taller: "Voleibol" },
  { id: 206, grupo: "602", numControl: "23415082650052", nombre: "Salinas Araujo Daniel",            taller: "Cartoneria" },
  { id: 207, grupo: "602", numControl: "23415082650055", nombre: "Sanchez Osnaya Ivan",              taller: "Futbol" },
  { id: 208, grupo: "602", numControl: "23415082650056", nombre: "Sanchez Tavira Maria Marlen",      taller: "Voleibol" },
  { id: 209, grupo: "602", numControl: "23415082650057", nombre: "Sotelo Estrada Alexa",             taller: "Voleibol" },
  { id: 210, grupo: "602", numControl: "23415082650058", nombre: "Sotelo Martinez Nallybet",         taller: "Voleibol" },
  { id: 211, grupo: "602", numControl: "23415082650059", nombre: "Velazquez Carmona Kevin Alexis",   taller: "Futbol" },
  { id: 212, grupo: "602", numControl: "23415082650061", nombre: "Villanueva Urtado Kevin Demian",   taller: "Oratoria" },
  { id: 213, grupo: "602", numControl: "23415082650062", nombre: "Zepeda Estrada Priscila Anali",    taller: "Ajedrez" },

];

// ============================================================
// FUNCIÓN: buscarEstudiante(numControl)
// PROPÓSITO: Recibe el número de control leído por el escáner
//            y busca al alumno en el arreglo ESTUDIANTES.
// RETORNA: El objeto del alumno si lo encuentra, o null si no.
// ============================================================
function buscarEstudiante(numControl) {
  return ESTUDIANTES.find(e => e.numControl === numControl) || null;
}