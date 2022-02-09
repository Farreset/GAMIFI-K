<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  global $datos;

  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $conexion = conexion(); // CREA LA CONEXION


  // REALIZA LA QUERY A LA DB
 $registros = mysqli_query($conexion, "INSERT INTO `a_rankings` (`nombre_ranking`, `estilo`, `equipos`, `num_bonus`) VALUES ('R_$_GET[nombreRanking]', 'Clasico', 0, 6);");


  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'EL USUARIO SE ELIMINO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO

?>
