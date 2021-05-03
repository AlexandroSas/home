<?php
    $name = $_POST['name'];
    $vemail = $_POST['email'];
    $message = $_POST['message'];

    $email_form = "alexandro.sas98@gmail.com";
    $email_sub = "New Form Submission";
    $email_body = "User Name: $name\n"."User Email: $vemail\n"."User Message: $message\n";
    $to = "alexandro.sas98@gmail.com";

    $headers = "From: $email_form \r\n";
    $headers .= "Reply-To: $vemail \r\n";

    mail($to,$email_sub,$email_body,$headers);
    header("Location: index.html");
?>