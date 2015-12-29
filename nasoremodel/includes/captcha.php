<?php

if(isset($_REQUEST["send"])){

    $name=$_REQUEST['name']; 
    $email=$_REQUEST['email']; 
    $message=$_REQUEST['message'];

    if(isset($_POST['g-recaptcha-response'])){

        $captcha=$_POST['g-recaptcha-response'];
    

        if(!$captcha){

            echo "<div class='alert alert-warning-alt alert-dismissable'>
                <span class='glyphicon glyphicon-exclamation-sign'></span>
                <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>
                <i class='fa fa-times-circle'></i></button><strong>Please check robot box.</strong></div>";
          
        }else{

            if (($name=='')||($email=='')||($message=='')){

                echo "<div class='alert alert-danger-alt alert-dismissable'>
                <span class='glyphicon glyphicon-exclamation-sign'></span>
                <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>
                <i class='fa fa-times-circle'></i></button><strong>Sorry! Make sure all fields are filled.</strong></div>";

            }else{
            
                echo "<div class='alert alert-success-alt alert-dismissable'>
                    <span class='glyphicon glyphicon-thumbs-up'></span>
                    <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>
                    <i class='fa fa-times-circle'></i></button><strong>Email Sent!  Have a nice day!</strong></div>";

                $to = 'info@nasoremodel.com';
                    
                    $subject = 'You gotz a message from your website gangsta!';
                    $mailheader  = "From: ".$email."\r\n";
                    $mailheader .= "Reply-To: ".$email."\r\n";
                    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
                    mail($to, $subject, $message, $mailheader) or die ("Failure");
            }
        }
    }

    $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LcSwxATAAAAAPgOgFbX8ZY6UcF0JUyoql4aKnF6&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
}

?>

<!-- 
   // $response=json_decode(file_get_contents("https://www.google.com/recaptcha/api/    siteverify?secret=6LcSwxATAAAAAPgOgFbX8ZY6UcF0JUyoql4aKnF6&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']), true);


    //  if($response['success'] == false)
    // {
    //   echo '<h2>Spammer?</h2>';
    // } -->
   

   





