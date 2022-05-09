<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');
  header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.

  $json = file_get_contents('php://input');
  $unirse = json_decode($json);
  json_decode($json);

  //$codigo = $_GET['codigo'];

  global $datos;
  $name_r = $_GET['name_r'];
  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION


  // REALIZA LA QUERY A LA BD

  

//   while ($resultadoArray = mysqli_fetch_array($listado)) {
//     $rankingsArray[] = $resultadoArray;
//   }


  $listado = mysqli_query($conexion, "SELECT codigo FROM ranking WHERE name_r='$name_r';");
  $resultado = $listado->fetch_assoc();
  $json = json_encode($json); 



      //echo "$registros";
      if($listado){
        $resultado = 'OK';
      }else{
        $resultado = 'NO';
      }
  

     

  header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.

  echo $json; // MUESTRA EL JSON GENERADO AL EJECUTAR DIRECTAMENTE EL LOCALHOST


?>