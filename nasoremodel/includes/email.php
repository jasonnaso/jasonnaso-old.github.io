<?php 
    
    

    contact_form();
    
    function contact_form(){



            $form = "";

           
            $form .= "<form class='form-horizontal' action='' method='POST' enctype='multipart/form-data'>";
            $form .= "<div class='form-group row'>";
            $form .= "<label for='inputEmail3' class='col-sm-2 control-label'>Name</label>";
            $form .= "<div class='col-sm-10'>";
            $form .= "<input type='text' class='form-control' name='name' id='inputEmail3' placeholder='Name'>";
            $form .= "</div>";
            $form .= "</div>";
            $form .= "<div class='form-group'>";
            $form .= "<label for='inputPassword3' class='col-sm-2 control-label'>Email</label>";
            $form .= "<div class='col-sm-10'>";
            $form .= "<input type='email' class='form-control' name='email' id='inputPassword3' placeholder='someone@somwhere.com'>";
            $form .= "</div>";
            $form .= "</div>";
            $form .= "<div class='form-group'>";
            $form .= "<label for='inputPassword3' class='col-sm-2 control-label'>Text</label>";
            $form .= "<div class='col-sm-10'>";
            $form .= "<textarea type='text' class='form-control' name='message' rows='5' placeholder='To whom it may concern...'></textarea>";
            $form .= "</div>";
            $form .= "</div>";
            $form .= "<div class='form-group'>";
            $form .= "<div class='col-sm-offset-2 col-sm-10'>";
            $form .= "<button type='submit' class='btn btn-default pull-right' name='send'>Send Email</button>";
            $form .= "</div>";
            $form .= "</div>";
            $form .= "</form>";
            
           

            echo $form;

        if(isset($_REQUEST["send"])){

            $name=$_REQUEST['name']; 
            $email=$_REQUEST['email']; 
            $message=$_REQUEST['message'];

            echo $name;
            echo $email;
            echo $message;

            if (($name=='')||($email=='')||($message=='')){

              

                echo "<h6 class='alert alert-danger'>All fields are required, please fill the form again.</h6><br>";

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
                       mail($to, $subject, $message, $mailheader) or die ("Failure");
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



