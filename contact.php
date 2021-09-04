<?php  

$para = "vinicio.71@hotmail.com, info@jotajotavmjj.com, ";
$asunto = "Mensaje desde VinicioGarcía.com";
$mailheader = "From: ".$_POST["email"]."\r\n";
$mailheader = "Reply to: ".$_POST["email"]."\r\n";
$mailheader = "Content-type: text/html; charset=utf-8\r\n";
$MESSAGE_BODY = "Nombre: ".$_POST["name"]."\n";
$MESSAGE_BODY .= "\n<br>Email: ".$_POST["email"]."\n";
$MESSAGE_BODY .= "\n<br>Teléfono: ".$_POST["phone"]."\n";
$MESSAGE_BODY .= "\n<br>Empresa: ".$_POST["empresa"]."\n";
$MESSAGE_BODY .= "\n<br>Página web: ".$_POST["site"]."\n";
$MESSAGE_BODY .= "\n<br>Mensaje: ".nl2br($_POST["message"])."\n";
//comando mail
mail($para, $asunto, $MESSAGE_BODY, $mailheader) or die("Error al enviar email");
// esto es a donde tiene que irse el navegador
header('Location: http://jotajotavm.com/soniacarretero');

// $mailheader es la cabecera del email donde
// van a ir datos de configuración de codificación de cararacteres
?>