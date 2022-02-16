
  <?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Allow: GET, POST, OPTIONS, PUT, DELETE");
 header('Content-Type application/json; charset=utf-8');
  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "UPDATE profesores SET nick = 'R_$_GET[nick]', fname = 'R_$_GET[fname]', lname = 'R_$_GET[lname]', mail = 'R_$_GET[mail]', centro = 'R_$_GET[centro]', 
  pssw = 'R_$_GET[pssw]', psswConf = 'R_$_GET[psswConf]' WHERE id_profesor ='$_GET[id_profesor]';");





  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'EL USUARIO SE MODIFICO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
