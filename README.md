# Centro Médico Ñuñoa - Gestión de Pacientes

Este proyecto es una aplicación web simple que permite gestionar y visualizar datos de pacientes en diversas especialidades médicas dentro del Centro Médico Ñuñoa. Utiliza HTML, CSS, y JavaScript para mostrar tablas, listas y estadísticas de las consultas.

## Tabla de Contenidos
- [Centro Médico Ñuñoa - Gestión de Pacientes](#centro-médico-ñuñoa---gestión-de-pacientes)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Características](#características)
  - [Estructura del Proyecto](#estructura-del-proyecto)
    - [1-Clona el repositorio a tu máquina local:](#1-clona-el-repositorio-a-tu-máquina-local)
    - [2-Navega al directorio del proyecto:](#2-navega-al-directorio-del-proyecto)
    - [3-Abre el archivo index.html en tu navegador web preferido.:](#3-abre-el-archivo-indexhtml-en-tu-navegador-web-preferido)
- [Uso](#uso)
- [Funciones](#funciones)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)

## Características

- Visualización de las consultas médicas en distintas especialidades: Radiología, Traumatología y Dental.
- Generación automática de tablas con datos de pacientes.
- Cálculo y despliegue de estadísticas (primera y última atención, número total de atenciones).
- Listado de pacientes que pertenecen a sistemas de salud específicos (ISAPRE, FONASA).
- Visualización y manejo de listas de pacientes de cada especialidad.

## Estructura del Proyecto

```bash
/
├── index.html      # Página principal del proyecto
├── style.css       # Hoja de estilos para dar formato a la página
└── script.js       # Archivo JavaScript que contiene la lógica de la aplicación
/
```
### 1-Clona el repositorio a tu máquina local:

```bash
Copiar código
git clone https://github.com/tu-usuario/centro-medico-nunoa.git
```
### 2-Navega al directorio del proyecto:
```bash
cd centro-medico-nunoa
```
### 3-Abre el archivo index.html en tu navegador web preferido.:

# Uso
Al abrir la página, podrás ver:

- Tablas con los datos de las consultas médicas de Radiología y Traumatología.
- Listas de consultas para la especialidad Dental.
- Estadísticas del número de consultas, y las primeras y últimas atenciones.
- Listado de pacientes atendidos en el centro, así como aquellos pertenecientes a sistemas de salud específicos como ISAPRE o FONASA.
  
# Funciones
El archivo script.js contiene varias funciones clave:

- 1- generarTabla(iterable, idTabla): Genera una tabla HTML a partir de los datos de un arreglo y lo muestra en el elemento con el ID proporcionado.
- 2- mostrarEstadistica(arreglo, idEstadistica, nombreArreglo): Muestra la primera y última atención de cada especialidad junto con el número total de consultas.
- 3- mostrarLista(iterable, idLista): Genera una lista con los datos de un arreglo, mostrando la información de las consultas.
- 4- listarPacientes(iterablePaciente, idPacientes): Muestra el listado de todos los pacientes atendidos en el centro médico.
- 5- consultarPrevision(arreglopPorFiltrar, consultaPrevision, idTabla): Filtra los pacientes según su previsión (ISAPRE o FONASA) y muestra el listado.

# Tecnologías Utilizadas

- HTML5: Para la estructura de la página web.
- CSS3: Para el estilo y diseño de la página, utilizando una hoja de estilos externa y la librería Water.css.
- JavaScript: Para la lógica y manipulación de los datos de pacientes.

# Autor
Proyecto desarrollado por Ivan Vargas Gantiva.



