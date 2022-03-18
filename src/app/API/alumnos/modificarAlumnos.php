
  <?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization');
    header('Content-Type application/json; charset=utf-8');

    echo "Php abierto correctamente";

    global $datos;
 
  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  
  $json = file_get_contents('php://input');
  $params = json_decode($json);
 
  //echo($params);
 
 $registros = mysqli_query($conexion, "UPDATE `alumnos` SET nick = '$params->nick', fname = '$params->fname', lname = '$params->lname', mail = '$params->mail', fecha = '$params->fecha' WHERE id_alumno ='$params->id_alumno';");



  // GENERA LOS DATOS DE RESPUESTA
    if($registros){
      $resultado = 'OK';  
    }else{
      $registros = 'NO';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado); // MUESTRA EL JSON GENERADO

?>
