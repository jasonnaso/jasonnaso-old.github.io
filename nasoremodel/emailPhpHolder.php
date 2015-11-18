<?php 
    
    contact_form();

        $email;$comment;$captcha;$name;

        if(isset($_POST['name']))
          $name=$_POST['name'];
        if(isset($_POST['email']))
          $email=$_POST['email'];
        if(isset($_POST['Message']))
          $comment=$_POST['Message'];
        if(isset($_POST['g-recaptcha-response']))
          $captcha=$_POST['g-recaptcha-response'];

        if(!$captcha){
          echo '<h2>Please check the the captcha form.</h2>';
          exit;
        }
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LcSwxATAAAAAPgOgFbX8ZY6UcF0JUyoql4aKnF6&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
        if($response.success==false)
        // $response=json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LcSwxATAAAAAPgOgFbX8ZY6UcF0JUyoql4aKnF6&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']), true);
        // if($response['success'] == false)
        {
          echo '<h2>You are spammer ! Get the @$%K out</h2>';
        }
        else
        {
          echo '<h2>Thanks for posting comment.</h2>';
        }
    //recaptcha secret
    //6LcSwxATAAAAAPgOgFbX8ZY6UcF0JUyoql4aKnF6
    //http://stackoverflow.com/questions/27274157/new-google-recaptcha-with-checkbox-server-side-php
    //http://stackoverflow.com/questions/27274157/new-google-recaptcha-with-checkbox-server-side-php
    function contact_form(){
        
        $form = "";
        $form .= "<form class='form-horizontal' method='GET' action='http://www.nasoremodel.com/cgi-bin/FormMail.pl' accept-charset='ISO-8859-1' onsubmit='var originalCharset = document.charset; 
            document.charset = 'ISO-8859-1'; 
            window.onbeforeunload = function () {document.charset=originalCharset;};'>";
        $form .= "<div class='form-group row'>";
        $form .= "<label for='inputEmail3' class='col-sm-2 control-label'>Name</label>";
        $form .= "<div class='col-sm-10'>";
        $form .= "<input type='text' class='form-control' name='name' placeholder='John Doe'>";
        $form .= "</div>";
        $form .= "</div>";
        $form .= "<div class='form-group'>";
        $form .= "<label for='inputPassword3' class='col-sm-2 control-label'>Email</label>";
        $form .= "<div class='col-sm-10'>";
        $form .= "<input type='email' class='form-control' name='email' placeholder='someone@somwhere.com'>";
        $form .= "</div>";
        $form .= "</div>";
        $form .= "<div class='form-group'>";
        $form .= "<label for='inputPassword3' class='col-sm-2 control-label'>Text</label>";
        $form .= "<div class='col-sm-10'>";
        $form .= "<textarea type='text' class='form-control' name='Message' rows='5' placeholder='To whom it may concern...'></textarea>";
        $form .= "</div>";
        $form .= "</div>";
        $form .= "<div class='form-group'>";
        $form .= "<div class='col-sm-offset-2 col-sm-10'>";
        $form .= "<button type='submit' class='btn btn-default pull-right' name='send'>Send Email</button>";

        $form .= "<input type='hidden' name='recipient' value='info@nasoremodel.com' />";
        $form .= "<input type='hidden' name='subject' value='Subject' />";
        $form .= "<input type='hidden' name='redirect' value='http://www.nasoremodel.com/contact.php?status=success' />";
        $form .= "<input type='hidden' name='missing_fields_redirect' value='http://www.nasoremodel.com/contact.php?status=error' />";
        $form .= "</div>";
        $form .= "</div>";
        $form .= "<input type='hidden' name='required' value='name,email,Message' />";
        $form .= "<input type='hidden'  value='g-recaptcha-response' />";
        $form .= "<div class='g-recaptcha' data-sitekey='6LcSwxATAAAAAOC_f4Gi-G6HpWs9eqi8KrAVYldm'></div>";
        $form .= "</form>";
        
        echo $form;

    }; 
?> 