<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  global $datos;

  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $conexion = conexion(); // CREA LA CONEXION


  // REALIZA LA QUERY A LA DB
 $registros = mysqli_query($conexion, "SELECT name_r FROM ranking");


 echo "$registros";
  
 if($registros){
   $resultado = 'OK';  
 }else{
   $resultado = 'NO';
 }
header('Content-Type: application/json');

echo json_encode($resultado); 

?>