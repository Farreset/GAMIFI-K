<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization');
    header('Content-Type application/json; charset=utf-8');

  // echo "El codigo es " . $codigo . "<br>";

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  $list = mysqli_query($conexion, "SELECT * FROM ranking WHERE codigo = '$_GET[codigo]'");
  if(!$list){
    $response = 'Error';
  }else if($list->num_rows == 0){
    $resultado = 'No esta';
  }else{
    $datos = $list->fetch_assoc();
     
    $registros = mysqli_query($conexion, "INSERT INTO `r_alumno` (`id_alumno`, `id_r`) VALUES ('$_GET[id_alumno]', '$datos[id_r]')");

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
