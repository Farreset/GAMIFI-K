<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Allow: GET, POST, OPTIONS, PUT, DELETE");

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $conexion = conexion(); // CREA LA CONEXION
  $json= file_get_contents('php://input');
  $delete=json_decode($json);
  // echo $delete; 
 

  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "DELETE FROM entregas WHERE id_ent = '$_GET[id_ent]';");
 
  
    if($registros){
      $resultado = 'OK';  
    }else{
      $resultado = 'NO';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado); 



?>