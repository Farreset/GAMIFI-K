<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');

  $codigo = $_GET['codigo'];
  // echo "El codigo es " . $codigo . "<br>";

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  $list = mysqli_query($conexion, "SELECT name_r, id_r FROM ranking WHERE codigo = $codigo");
  if(!$list){
    $response = 'Error';
  }else if($list->num_rows == 0){
    $resultado = 'No esta';
  }else{
    $datos = $list->fetch_assoc();
    // REALIZA LA QUERY A LA DB
    $registros = mysqli_query($conexion, "INSERT INTO `r_alumno` (`id_alumno`, `id_r`, `name_r_a`) VALUES ($_GET[id_alumno], $datos[id_r], '$datos[name_r]')");

    //echo "$registros";
    if($registros){
      $resultado = 'OK';
    }else{
      $resultado = 'NO';
    }
  }

  header('Content-Type: application/json');

  echo json_encode($resultado);
?>
