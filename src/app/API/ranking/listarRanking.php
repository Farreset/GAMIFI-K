<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  global $datos;

  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $conexion = conexion(); // CREA LA CONEXION


  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "SELECT * FROM ranking");


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


?>
