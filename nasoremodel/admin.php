 <?php
      
      // session_start();

      // require_once("includes/dbConnection.php");
      // include("includes/head.php");
      // include("includes/checkpost.php");
      // include("includes/head.php");
      // include("includes/header.php");

      // autoLogout();

      // $email = false;

      // $email = trim($_POST["email"]);

      // if(!filter_var($email, FILTER_VALIDATE_EMAIL)){

      //                         $emailError = true;
      //                   }
      // if($emailError === true){

      //       echo "<div class='alert alert-danger-alt alert-dismissable'>
      //           <span class='glyphicon glyphicon-certificate'></span>
      //           <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>
      //           <i class='fa fa-times-circle'></i></button><strong>Sorry! Make sure all fields are filled.</strong></div>";

                                        
      // }
?>

<form class='form-horizontal' action='' method='POST' enctype='multipart/form-data'>
<div class='form-group row'>
<label class='col-sm-2 control-label'>Name</label>
<div class='col-sm-10'>
<input type='text' class='form-control' name='name' placeholder='Name'>
</div>
</div>
<div class='form-group'>
<label  class='col-sm-2 control-label'>Email</label>
<div class='col-sm-10'>
<input type='email' class='form-control' name='email' placeholder='someone@somwhere.com'>
</div>
</div>
<div class='form-group'>
<label  class='col-sm-2 control-label'>Text</label>
<div class='col-sm-10'>
<textarea type='text' class='form-control contactTextArea' name='message' rows='5' placeholder='To whom it may concern...'></textarea>
</div>
</div>
<div class='form-group'>
<div class='col-sm-offset-2 col-sm-10'>
<button type='submit' class='btn btn-default pull-right' name=''>Send Email</button>
</div>
</div>


</form>
<?php include("includes/footer.php");?>

