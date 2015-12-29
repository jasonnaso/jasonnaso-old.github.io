<?php 
    
    contact_form();
    
    function contact_form(){
            
            $form = "";
            $form .= "<form class='form-horizontal' action='' method='POST' enctype='multipart/form-data'>";
            $form .= "<div class='form-group row'>";
            $form .= "<label class='col-sm-2 control-label'>Name</label>";
            $form .= "<div class='col-sm-10'>";
            $form .= "<input type='text' class='form-control' name='name' placeholder='Name'>";
            $form .= "</div>";
            $form .= "</div>";
            $form .= "<div class='form-group'>";
            $form .= "<label  class='col-sm-2 control-label'>Email</label>";
            $form .= "<div class='col-sm-10'>";
            $form .= "<input type='email' class='form-control' name='email' placeholder='someone@somwhere.com'>";
            $form .= "</div>";
            $form .= "</div>";
            $form .= "<div class='form-group'>";
            $form .= "<label  class='col-sm-2 control-label'>Text</label>";
            $form .= "<div class='col-sm-10'>";
            $form .= "<textarea type='text' class='form-control contact-text-area' name='message' rows='5' placeholder='To whom it may concern...'></textarea>";
            $form .= "<div class='g-recaptcha pull-right' data-sitekey='6LcSwxATAAAAAOC_f4Gi-G6HpWs9eqi8KrAVYldm'></div>";
            $form .= "</div>";
            $form .= "</div>";
            $form .= "<div class='form-group'>";
            $form .= "<div class='col-sm-offset-2 col-sm-10'>";
            $form .= "<button type='submit' class='btn btn-default pull-right' name='send'>Send Email</button>";
            $form .= "</div>";
            $form .= "</div>";
            $form .= "<input type='hidden' name='required' value='name,email,message' />";
            $form .= "<input type='hidden'  value='g-recaptcha-response' />";
            $form .= "</form>";
            
           

            echo $form;

        
    }; 
    

?> 