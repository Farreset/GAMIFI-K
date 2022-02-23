<?php
<<<<<<< Updated upstream
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');
=======
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization');
    header('Content-Type application/json; charset=utf-8');

    $json =file_get_contents('php://input');
    $profesores =json_decode($json);
>>>>>>> Stashed changes

  echo "Se abre el php";
  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $con = conexion(); // CREA LA CONEXION

<<<<<<< Updated upstream
  echo " CONEXION";

  // REALIZA LA QUERY A LA DB
 $registros = mysqli_query($conexion, "INSERT INTO `profesores` (`id_profesor`, `nick`, `fname`, `lname`, `mail`, `centro`, `pssw`, `psswConf`)
 VALUES (NULL, '$_GET[id_profesor]', '$_GET[nick]', '$_GET[fname]', '$_GET[lname]', '$_GET[mail]', '$_GET[centro]', '$_GET[pssw]', '$_GET[psswConf]');");
=======
  //Documentacion https://www.php.net/manual/es/wrappers.php.php
  $json = file_get_contents('php://input');

  $params = json_decode($json);

  echo "Php abierto correctamente";
  echo $json;

  // REALIZA LA QUERY A LA DB
<<<<<<< Updated upstream
//  $registros = mysqli_query($con, "INSERT INTO `profesores` (`id_profesor`, `nick`, `fname`, `lname`, `mail`, `centro`, `pssw`, `psswConf`)
//  VALUES (NULL, '$_GET[id_profesor]', '$_GET[nick]', '$_GET[fname]', '$_GET[lname]', '$_GET[mail]', '$_GET[centro]', '$_GET[pssw]', '$_GET[psswConf]');");

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  $registros=mysqli_query($con,"INSERT INTO `profesores` (`nick`, `fname`) VALUES ('$params->nick',$params->fname)");
>>>>>>> Stashed changes

  echo "<br> consulata";

  class Result {}

  echo "
";
  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
<<<<<<< Updated upstream
  $response->mensaje = 'EL PORFESOR SE AÑADIO EXITOSAMENTE';
=======
  $response->mensaje = 'EL PROFESOR SE AnADIO EXITOSAMENTE';
>>>>>>> Stashed changes

  header('Content-Type: application/json');
=======
 $registros = mysqli_query($conexion, "INSERT INTO `profesores` (`id_profesor`, `nick`, `fname`, `lname`, `mail`, `centro`, `pssw`, `psswConf`)
 VALUES (NULL, '$profesores->nick', '$profesores->fname', '$profesores->lname', '$profesores->mail', '$profesores->centro', '$profesores->pssw', '$profesores->psswConf')");

if($registros){
  $resultado = 'OK';
}else{
  $resultado = 'NO';
}
header('Content-Type: application/json');
>>>>>>> Stashed changes

  echo json_encode($response); // MUESTRA EL JSON GENERADO

?>
