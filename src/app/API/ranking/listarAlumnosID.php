<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $codigo = $_GET['id_r'];
  echo "Codigo: " . $codigo;

  $conexion = conexion(); // CREA LA CONEXION
  $json= file_get_contents('php://input');
  $delete=json_decode($json);
  // echo $delete;


  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "SELECT a.id_alumno FROM r_alumno ra , alumnos a , ranking r WHERE ra.id_alumno = a.id_alumno AND  ra.id_r = r.id_r AND ra.id_r = '$codigo'");


    if($registros){
      $resultado = $registros->fetch_assoc();
    }else{
      $resultado = 'NO';
    }
  echo "Despues de consulta" . $resultado;

  header('Content-Type: application/json');

  echo json_encode($resultado);



?>
