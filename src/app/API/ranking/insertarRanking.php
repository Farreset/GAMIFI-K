<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  global $datos;

  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $conexion = conexion(); // CREA LA CONEXION


  // REALIZA LA QUERY A LA DB
 $registros = mysqli_query($conexion, "INSERT INTO `ranking` (`id_r`, `name_r`, `cont_r`) VALUES (NULL, '$_GET[name_r]', '$_GET[cont_r]');");


  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'EL RANKING SE ELIMINO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO

?>
