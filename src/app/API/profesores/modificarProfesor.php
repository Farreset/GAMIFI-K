
  <?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Allow: GET, POST, OPTIONS, PUT, DELETE");
 header('Content-Type application/json; charset=utf-8');
  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "UPDATE profesores SET nick = '$_GET[nick]', fname = '$_GET[fname]', lname = '$_GET[lname]', mail = '$_GET[mail]', centro = '$_GET[centro]', 
  pssw = '$_GET[pssw]', psswConf = '$_GET[psswConf]' WHERE id_profesor ='$_GET[id_profesor]';");





  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'EL PROFESOR SE MODIFICO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
