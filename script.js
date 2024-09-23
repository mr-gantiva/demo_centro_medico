let radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

let traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

let dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

let newDataTrauma = [
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  },
];

// Función para generar las Tablas
function generarTabla(iterable, idTabla) {
  // cabecera de la tabla
  let tituloTabla =
    "<tr><th>Hora</th> <th>Especialista</th> <th>Paciente</th> <th>Rut</th> <th>Previsión</th></tr>";
  // for para recorrer el arreglo
  for (let item of iterable) {
    tituloTabla += `
          <tr>
              <td>${item.hora}</td> 
              <td>${item.especialista}</td>
              <td>${item.paciente}</td>
              <td>${item.rut}</td>
              <td>${item.prevision}</td>
          </tr>
          `;
  }
  // Generar el html del arreglo
  document.getElementById(idTabla).innerHTML = tituloTabla;
}

// Función para cargar las estadisticas de cada especialidad
function mostrarEstadistica(arreglo, idEstadistica, nombreArreglo) {
  let primerElemento = arreglo[0];
  let ultimoElemento = arreglo[arreglo.length - 1];

  document.getElementById(
    idEstadistica
  ).innerHTML = `<p>Estadisticas centro medico ñuñoa</p>
      <p>Primera atención: ${primerElemento.paciente} - ${primerElemento.prevision} | Última atención: ${ultimoElemento.paciente} - ${ultimoElemento.prevision}</p>
      <p>Cantidad de atenciones para ${nombreArreglo} : ${arreglo.length}</p>`;
}

// 1. Agregar las horas al arreglo Traumatologia
let traumaConcat = traumatologia.concat(newDataTrauma);
console.log(traumaConcat);

// 2. Eliminar el primer y último elemento del arreglo Radiologia
radiologia.pop();
radiologia.shift();

// 3. Imprimir la lista de consultas médicas de Dental separados por guión
function mostrarLista(iterable, idLista) {
  let listaTabla = "";
  for (let itemLista of iterable) {
    listaTabla += `
              <li>${itemLista.hora} - ${itemLista.especialista} - ${itemLista.paciente} - ${itemLista.rut} - ${itemLista.prevision}</li>
          `;
  }
  document.getElementById(idLista).innerHTML = listaTabla;
}

// 4. Imprimir listado de todos los pacientes que se atendieron en el centro médico
let pacientesConcat = radiologia.concat(traumaConcat, dental);
function listarPacientes(iterablePaciente, idPacientes) {
  let listadoPacientes = "";
  for (let itemPacientes of iterablePaciente) {
    listadoPacientes += `
              <li>${itemPacientes.paciente}</li>
          `;
  }
  document.getElementById(idPacientes).innerHTML = listadoPacientes;
}

// 5 . Filtrtar los pacientes que indican ser de ISAPRE
function consultarPrevision(arreglopPorFiltrar, consultaPrevision, idTabla) {
  let pacienteIsapre = arreglopPorFiltrar.filter(function (paciente) {
    return paciente.prevision === consultaPrevision;
  });

  let listadoPrevision = "";
  for (let previsionPaciente of pacienteIsapre) {
    listadoPrevision += `<li>${previsionPaciente.paciente} - ${previsionPaciente.prevision}</li>`;
  }
  document.getElementById(idTabla).innerHTML = listadoPrevision;
}

// Llamado de las funciones
generarTabla(radiologia, "tablaRadiologia");
generarTabla(traumaConcat, "tablaTraumatologia");
// generarTabla(dental, "tablaDental");

// mostrarEstadistica(radiologia, "estadisticasRadio", "radiologia");
// mostrarEstadistica(traumaConcat, "estadisticasTrauma", "traumatologia");
// mostrarEstadistica(dental, "estadisticasDental", "dental");

mostrarLista(dental, "listaDental");

listarPacientes(pacientesConcat, "listaPacientes");

consultarPrevision(dental, "ISAPRE", "listaIsapre");
consultarPrevision(traumaConcat, "FONASA", "listaFonasa");
