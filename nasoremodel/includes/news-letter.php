<?php 
    
    

news_letter();

function news_letter(){


        $form = "";

        $form .= "<div class='newsletter-outer box'>";
        $form .= "<div class='ribbon'><span>NEWS</span></div>";
                    
        $form .= "<h3 class='newsletter-title'>Join Our Newsletter</h3>";
        $form .= "<p class='center-md newsletter-statement'>Get tips on doing it yourselve from smaller to meddium size jobs!</p>";
        
        $form .= "<form class='form-horizontal' action='' method='POST' enctype='multipart/form-data'>";


        $form .= "<div class='form-group'>";
        $form .= "<div class='col-xs-8 col-xs-offset-2'>";
        $form .= "<label for='' class='control-label'>Email</label>";
        $form .= "<input type='email' class='form-control input-newsletter' name='email' id='inputPassword' placeholder='someone@somwhere.com'>";
        $form .= "</div>";
        $form .= "</div>";

        $form .= "<div class='form-group'>";
        $form .= "<div class='col-xs-6 col-xs-offset-4'>";
        $form .= "<button type='submit' class='btn btn-default btn-newsletter' name='send'>Get News Letter</button>";
        $form .= "</div>";
        $form .= "</div>";
        
        $form .= "</form>";
        $form .= "</div>";
        
        echo $form;

        if(isset($_REQUEST["send"])){

            $email=$_REQUEST['email']; 
            
            echo $email;

        if ($email==''){

            echo "<h6 class='alert alert-danger'>Please fill in field.</h6><br>";
            
        }else{
                
            // $from='From: $name<$email>\r\nReturn-path: $email'; 
            // $subject='Message sent using your contact form'; 
            // mail("danaz45@hotmail.com", $subject, $message, $from); 
            // echo "<h3 class='alert alert-success' role='alert'>Email sent!</h3>";

            $to = 'danaz45@hotmail.com';

                $subject = 'Message sent using your contact form';
                $mailheader  = "From: ".$email."\r\n";
                $mailheader .= "Reply-To: ".$email."\r\n";
                $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
                mail($to, $subject, $mailheader) or die ("Failure");

                echo  "<h6 class='alert alert-success'>Nice work G_Money</h6><br>";
        }

    }
}; 
    

?> 
<!-- 
 $response = "";

                $response .= "<div class='col-xs-3 pull-right'></div>";
                $response .= "<h6 class='alert alert-danger'>All fields are required, please fill the form again.</h6><br>";
                $response .= "</div>";

                echo $response; -->

               
               


