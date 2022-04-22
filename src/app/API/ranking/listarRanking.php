<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization');
    header('Content-Type application/json; charset=utf-8');
    header('Content-Type: application/json');

  // $json = file_get_contents('php://input');
  // $RankingParam = json_decode($json);

  // global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  $json = file_get_contents('php://input');
  $params = json_decode($json);

  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "SELECT * FROM ranking");

  echo "$registros";

  // GENERA LOS DATOS DE RESPUESTA
  if($registros){
    $resultado = 'OK';
  }else{
    $resultado = 'NO';
  }

  echo json_encode($resultado); // MUESTRA EL JSON GENERADO
  // $resultado = $registros->fetch_assoc();

  // $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS

  // header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.

  // echo $json; // MUESTRA EL JSON GENERADO AL EJECUTAR DIRECTAMENTE EL LOCALHOST



/*
  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  while ($resultado = mysqli_fetch_array($registros))
  {
    $datos[] = $resultado;
   }

   for ($i=0;$i<sizeof($datos);$i++){
     if($datos[$i]['equipos']==0){
      $datos[$i]['equipos']=false;
     }else{
      $datos[$i]['equipos']=true;
     }
   }


  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS


  header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.


  echo $json; // MUESTRA EL JSON GENERADO AL EJECUTAR DIRECTAMENTE EL LOCALHOST
*/

?>
