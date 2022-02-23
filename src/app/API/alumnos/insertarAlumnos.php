<?php
//   header('Access-Control-Allow-Origin: *');
//   header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//   header('Content-Type: text/html; charset=UTF-8');


//   global $datos;

//   require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


//   $conexion = conexion(); // CREA LA CONEXION


//   // REALIZA LA QUERY A LA DB
//  $registros = mysqli_query($conexion, " INSERT INTO `alumnos` (`id_alumno`, `nick`, `fname`, `lname`, `mail`, `year`, `pssw`, `psswConf`)
//  VALUES (NULL, '$_GET[id_alumno]', '$_GET[nick]', '$_GET[fname]', '$_GET[lname]', '$_GET[mail]', '$_GET[year]', '$_GET[pssw]', '$_GET[psswConf]');");

//   class Result {}

//   // GENERA LOS DATOS DE RESPUESTA
//   $response = new Result();
//   $response->resultado = 'OK';
//   $response->mensaje = 'EL USUARIO SE ELIMINO EXITOSAMENTE';

//   header('Content-Type: application/json');

//   echo json_encode($response); // MUESTRA EL JSON GENERADO

?>

<?php
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
 $registros = mysqli_query($conexion, "INSERT INTO `profesores` (`id_profesor`, `nick`, `fname`, `lname`, `mail`, `centro`, `pssw`, `psswConf`)
 VALUES (NULL, '$profesores->nick', '$profesores->fname', '$profesores->lname', '$profesores->mail', '$profesores->centro', '$profesores->pssw', '$profesores->psswConf')");


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
