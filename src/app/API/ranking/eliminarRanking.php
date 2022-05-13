<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $conexion = conexion(); // CREA LA CONEXION
  $json= file_get_contents('php://input');
  $delete=json_decode($json);
  // echo $delete; 
 

  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "DELETE FROM ranking  WHERE id_r = '$_GET[id_r]' AND id_profesor = '$_GET[id_profesor]'");
 
  
    if($registros){
      $resultado = 'OK';  
    }else{
      $resultado = 'NO';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado); 



?>