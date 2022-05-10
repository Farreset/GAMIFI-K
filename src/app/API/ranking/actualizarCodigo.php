<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');
  header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.

 

  //$codigo = $_GET['codigo'];

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  // REALIZA LA QUERY A LA BD

  

  // while ($resultadoArray = mysqli_fetch_array($listado)) {
  //   $rankingsArray[] = $resultadoArray;
  // }
    // echo($_GET['codigo']);
    // echo("\n");

    // echo($_GET['id_r']);
    
  $listado = mysqli_query($conexion, "UPDATE ranking SET codigo = $_GET[codigo] WHERE id_r = $_GET[id_r];");
  // $resultado = $listado->fetch_assoc();
  // $json = json_encode($rankingsArray); 


      //echo "$registros";
      if($listado){
        $resultado = 'OK';
      }else{
        $resultado = 'NO';
      }
  
  echo json_encode($resultado); // MUESTRA EL JSON GENERADO AL EJECUTAR DIRECTAMENTE EL LOCALHOST


?>
