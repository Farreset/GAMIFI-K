
  <?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');

  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "UPDATE ranking SET name_r = '$_GET[name_r]' WHERE id_r ='$_GET[id_r]';");




  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'EL RANKING SE MODIFICO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
