
  <?php

//  header('Access-Control-Allow-Origin: *');
//  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
//  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
//  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
//  header('Content-Type application/json; charset=utf-8');
//   require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

//   $conexion = conexion(); // CREA LA CONEXION

//   // REALIZA LA QUERY A LA DB
//   mysqli_query($conexion, "UPDATE profesores SET nick = 'R_$_GET[nick]', fname = 'R_$_GET[fname]', lname = 'R_$_GET[lname]', mail = 'R_$_GET[mail]', centro = 'R_$_GET[centro]', 
//   pssw = 'R_$_GET[pssw]', psswConf = 'R_$_GET[psswConf]' WHERE id_profesor ='$_GET[id_profesor]';");





//   class Result {}

//   // GENERA LOS DATOS DE RESPUESTA
//   $response = new Result();
//   $response->resultado = 'OK';
//   $response->mensaje = 'EL USUARIO SE MODIFICO EXITOSAMENTE';

//   header('Content-Type: application/json');

//   echo json_encode($response); // MUESTRA EL JSON GENERADO

header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization');
    header('Content-Type application/json; charset=utf-8');
   
    $json =file_get_contents('php://input');
    $profesores =json_decode($json);

  global $datos;
 
  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  //Documentacion https://www.php.net/manual/es/wrappers.php.php
  $json = file_get_contents('php://input');

  $params = json_decode($json);

  echo "Php abierto correctamente";
  echo $json;

  // REALIZA LA QUERY A LA DB
 $registros = mysqli_query($conexion, "UPDATE `profesores` SET nick = '$profesores->nick', fname = '$profesores->fnam', lname = '$profesores->lnam', mail = '$profesores->mail', centro = '$profesores->cento', 
  pssw = '$profesores->pssw' WHERE id_profesor ='$profesores->id_pofesor';");


  echo "
";
  // GENERA LOS DATOS DE RESPUESTA
    if($registros){
      $resultado = 'OK';  
    }else{
      $resultado = 'NO';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado); // MUESTRA EL JSON GENERADO

?>
