<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  // REALIZA LA QUERY A LA BD

  $listado = mysqli_query($conexion, "SELECT ent.*, r.*, alum.* 
  FROM entregas ent, ranking r, r_alumno ra, alumnos alum 
  WHERE r.id_r = ra.id_r 
  AND ent.id_ranking = r.id_r 
  AND alum.id_alumno = ra.id_alumno 
  AND alum.id_alumno = '$_GET[id_alumno]' 
  AND r.id_r =  '$_GET[id_r]';");
  //$listado = mysqli_query($conexion, "SELECT name_r FROM ranking WHERE codigo ='$unirse->codigo';");

  // while ($resultado = mysqli_fetch_array($listado)) {
  //   $ranking[] = $resultado;
  // }

  while ($resultadoArray = mysqli_fetch_array($listado)) {
    $entregas[] = $resultadoArray;
  }


  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  $resultado = $listado->fetch_assoc();

  $json = json_encode($entregas); // GENERA EL JSON CON LOS DATOS OBTENIDOS

  header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.

  echo $json; // MUESTRA EL JSON GENERADO AL EJECUTAR DIRECTAMENTE EL LOCALHOST

?>