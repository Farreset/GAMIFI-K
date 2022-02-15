<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $con = conexion(); // CREA LA CONEXION

  //Documentacion https://www.php.net/manual/es/wrappers.php.php
  $json = file_get_contents('php://input');

  $params = json_decode($json);

  echo "Php abierto correctamente";
  echo $json;

  // REALIZA LA QUERY A LA DB
//  $registros = mysqli_query($con, "INSERT INTO `profesores` (`id_profesor`, `nick`, `fname`, `lname`, `mail`, `centro`, `pssw`, `psswConf`)
//  VALUES (NULL, '$_GET[id_profesor]', '$_GET[nick]', '$_GET[fname]', '$_GET[lname]', '$_GET[mail]', '$_GET[centro]', '$_GET[pssw]', '$_GET[psswConf]');");

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  $registros=mysqli_query($con,"INSERT INTO `profesores` (`nick`, `fname`) VALUES ('$params->nick',$params->fname)");


  class Result {}

  echo "
";
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'EL PROFESOR SE AnADIO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO

?>
