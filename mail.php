<?php
// Get data from the 'Contact Me' form
$name = $_POST['name'];
$email = $_POST['emailaddress'];
$message = $_POST['message'];

$to = "petertsanev7@gmail.com";

$subject = "Message From Personal Website Contact Form";
$body = "User Name: ". $name "\r\n User Email: ". $email "\r\n\r\n Message: \r\n". $message;

$headers = "From: noreply@yoursite.com";

if($email != NULL) {
    mail($to,$subject,$body,$headers);
}

// redirect
header("Location:indext.html");
?>