<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');
  header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.

  $json = file_get_contents('php://input');
  $unirse = json_decode($json);
  json_decode($json);

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  // REALIZA LA QUERY A LA BD
  $listado = mysqli_query($conexion, "SELECT r.* , alum.* FROM `r_alumno` ra, alumnos alum, ranking r WHERE r.id_r = ra.id_r AND alum.id_alumno = ra.id_alumno AND alum.id_alumno = '$unirse->id_alumno'");

  while ($resultadoArray = mysqli_fetch_array($listado)) {
    $rankingsArray[] = $resultadoArray;
  }

  $resultado = $listado->fetch_assoc();

  $json = json_encode($rankingsArray);

  header('Content-Type: application/json'); 
  
  echo $json; 

?>