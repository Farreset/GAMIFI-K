<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization');
    header('Content-Type application/json; charset=utf-8');

    $json =file_get_contents('php://input');
    $alumnoParam =json_decode($json);

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  //Documentacion https://www.php.net/manual/es/wrappers.php.php
  $json = file_get_contents('php://input');

  $params = json_decode($json);

  echo $json;

  // REALIZA LA QUERY A LA DB
<<<<<<< Updated upstream
 $registros = mysqli_query($conexion, "INSERT INTO `alumnos` (`id_alumno`, `nick`, `fname`, `lname`, `mail`, `fecha`, `pssw`, `psswConf`,`avatar`)  
 VALUES (NULL, '$alumnoParam->nick', '$alumnoParam->fname', '$alumnoParam->lname', '$alumnoParam->mail', '$alumnoParam->fecha', '$alumnoParam->pssw', '$alumnoParam->psswConf','$alumnoParam->avatar')");
=======
 $registros = mysqli_query($conexion, "INSERT INTO `alumnos` (`id_alumno`, `nick`, `fname`, `lname`, `mail`, `fecha`, `pssw`, `psswConf`,`avatar`)
 VALUES (NULL, '$alumnoParam->nick', '$alumnoParam->fname', '$alumnoParam->lname', '$alumnoParam->mail', '$alumnoParam->fecha', '$alumnoParam->pssw', '$alumnoParam->psswConf', '$alumnoParam->avatar')");
>>>>>>> Stashed changes



  echo "$registros";
  // GENERA LOS DATOS DE RESPUESTA
    if($registros){
      $resultado = 'OK';
    }else{
      $resultado = 'NO';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado); // MUESTRA EL JSON GENERADO

?>
