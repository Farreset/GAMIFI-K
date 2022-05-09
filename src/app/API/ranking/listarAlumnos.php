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
  $listado = mysqli_query($conexion, "SELECT a. * , ra. *  FROM r_alumno ra , alumnos a , ranking r WHERE ra.id_alumno = a.id_alumno AND  ra.id_r = r.id_r AND ra.id_r = '$_GET[id_r]'");
  //$listado = mysqli_query($conexion, "SELECT name_r FROM ranking WHERE codigo ='$unirse->codigo';");

  // while ($resultado = mysqli_fetch_array($listado)) {
  //   $ranking[] = $resultado;
  // }

  while ($resultadoArray = mysqli_fetch_array($listado)) {
    $alumnoArray[] = $resultadoArray;
  }


  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  $resultado = $listado->fetch_assoc();

  $json = json_encode($alumnoArray); // GENERA EL JSON CON LOS DATOS OBTENIDOS

  header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.

  echo $json; // MUESTRA EL JSON GENERADO AL EJECUTAR DIRECTAMENTE EL LOCALHOST

?>