<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
   
    $json = file_get_contents('php://input');
    $usuario = json_decode($json);

    global $datos;

    require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


    $conexion = conexion(); // CREA LA CONEXION

   
    // $resultado = mysqli_query($conexion, $registros);
    // mysqli_num_rows($resultado);

    // $resultado2 = mysqli_query($conexion, $registros2);
    // mysqli_num_rows($resultado2);


   
   
    $registros = mysqli_query($conexion, "SELECT * FROM profesores WHERE mail='$usuario->mail' AND pssw='$usuario->pssw'");

    if(!$registros){
        $response = 'Error';
        echo json_encode($response);
    }else{
        if($registros->num_rows == 0){
            $registros2 = mysqli_query($conexion,"SELECT * FROM alumnos WHERE mail='$usuario->mail' AND pssw='$usuario->pssw'");
            if($registros2->num_rows == 0){
                $response = 'Cuenta';
               echo json_encode($response);
            }else{
                $datos = $registros2->fetch_assoc();
                if($datos['pssw'] == $usuario->pssw){
                    $json = json_encode($datos);
                    echo $json;
                }else{
                    $response = 'pssw';
                    echo json_encode($response);
                }
            }
        }else{
            $datos = $registros->fetch_assoc();
            if($datos['pssw'] == $usuario->pssw){
                $json = json_encode($datos);
                echo $json;
            }else{
                $response = 'pssw';
                echo json_encode($response);
            }
        }
    }

?>
