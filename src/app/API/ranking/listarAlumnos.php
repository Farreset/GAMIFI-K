<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');
  header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  // REALIZA LA QUERY A LA BD
  $listado = mysqli_query($conexion, "SELECT r.*, alum.* FROM ranking r, r_alumno ra, alumnos alum WHERE r.id_r = ra.id_r AND alum.id_alumno = ra.id_alumno AND r.id_r = '$_GET[id_r]';");

  while ($resultadoArray = mysqli_fetch_array($listado)) {
    $alumnoArray[] = $resultadoArray;
  }

  $resultado = $listado->fetch_assoc();

  $json = json_encode($alumnoArray); // GENERA EL JSON CON LOS DATOS OBTENIDOS

  header('Content-Type: application/json'); // envía el encabezado http json al navegador para informarle qué tipo de datos espera.

  echo $json; // MUESTRA EL JSON GENERADO AL EJECUTAR DIRECTAMENTE EL LOCALHOST

?>