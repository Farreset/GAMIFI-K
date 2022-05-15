
  <?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION


  $json = file_get_contents('php://input');
  $params = json_decode($json);

  //echo($params);

 $registros = mysqli_query($conexion, "UPDATE `alumnos` SET nick = '$params->nick', fname = '$params->fname', lname = '$params->lname', mail = '$params->mail', fecha = '$params->fecha', pssw = '$params->pssw', psswConf = '$params->psswConf', avatar = '$params->avatar' WHERE id_alumno = $params->id_alumno;");



  // GENERA LOS DATOS DE RESPUESTA
    if($registros){
      $resultado = 'OK';
    }else{
      $resultado = 'NO';
    }


  echo json_encode($resultado); // MUESTRA EL JSON GENERADO

?>
