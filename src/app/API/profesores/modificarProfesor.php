
  <?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");




  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  $json = file_get_contents('php://input');
  $profesores =json_decode($json);

  // echo "Php abierto correctamente";
  // echo $json;

  // REALIZA LA QUERY A LA DB
 $registros = mysqli_query($conexion, "UPDATE `profesores` SET nick = '$profesores->nick', fname = '$profesores->fname', lname = '$profesores->lname', mail = '$profesores->mail', centro = '$profesores->centro',pssw = '$profesores->pssw', psswConf = '$profesores->psswConf', avatar = '$profesores->avatar' WHERE id_profesor ='$profesores->id_profesor';");


  // GENERA LOS DATOS DE RESPUESTA
    if($registros){
      $resultado = 'OK';
    }else{
      $resultado = 'No';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado); // MUESTRA EL JSON GENERADO

?>
