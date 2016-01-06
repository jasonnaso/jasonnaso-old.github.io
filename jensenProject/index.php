<?php 
    // j here with pics
    session_start();

    include("includes/head.php");
    include("includes/checkPost.php");?>


<body>
    
    <div class="container" id="login">
        
        <div class="page-header header alignCenter" id="loginHeader">

            <h1>Jensen Online</h1>

        </div>

        <div class="panel panel-default col-md-4 col-md-offset-4 shadow" id="loginPanel">
            <div class="panel-body">

                <form action="index.php" method="POST">
                    <div class="row" id="usernameField">
                        <div class="col-md-12">
                            <div class="input-group">
                                <span class="input-group-addon">Användarnamn</span>
                                <input type="text" name="username" class="form-control inputFieldLogin" placeholder="Skriv här....">
                            </div>
                        </div>
                    </div>

                    <div class="row" id="passwordField">
                        <div class="col-md-12">
                            <div class="input-group">
                                <input type="password" name="password" class="form-control inputFieldLogin" placeholder="Skriv här....">
                                <span class="input-group-addon">Lösenord</span>
                            </div>
                        </div>
                    </div>

                    <div class="row" id="loginButton">
                        <div class="col-md-12">
                            <input type="submit" name="login" value="Logga in" class="btn btn-primary btn-md btn-block">
                        </div>  
                    </div>
                </form>

                <div class="row" id="forgotButton">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-primary btn-md btn-block toggle collapsed"
                         data-toggle="collapse" data-target="#restoreButtons">
                         Glömt dina uppgifter?</button>
                    </div>
                </div>

                <div class="row" id="moreInfo">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-primary btn-md btn-block">
                         <a class="lol" href="application.php">Mer information</a></button>
                    </div>
                </div>

                    <div class="row collapse" id="restoreButtons">
                        <div class="col-md-6">
                            <button type="button" class="btn btn-primary btn-md btn-block toggle collapsed"
                             data-toggle="collapse" data-target="#restoreUsername">Användarnamn</button>
                        </div>


                    <div class="col-md-6">
                        <button type="button" class="btn btn-primary btn-md btn-block toggle collapsed"
                         data-toggle="collapse" data-target="#restorePassword">Lösenord</button>
                    </div>
                </div>
            
                <form action="index.php" method="POST">
                    <div class="row collapse" id="restoreUsername">
                        <div class="col-md-9">
                            <div class="input-group">
                                <span class="input-group-addon" id="e_mail_addon">E-post</span>
                                <input type="text" name="forgotUsernameInput" class="form-control" placeholder="Skriv din e-post adress här...">
                            </div>
                        </div>

                        <div class="col-md-3" id="submitButton">
                            <button type="submit" name="forgotUsername" class="btn btn-primary btn-md btn-block">Skicka</button>
                        </div>
                    </div>
                </form>

                <form action="index.php" method="POST">
                    <div class="row collapse" id="restorePassword">
                        <div class="col-md-9">
                            <div class="input-group">
                                <span class="input-group-addon" id="e_mail_addon">E-post</span>
                                <input type="text" name="forgotPasswordInput" class="form-control" placeholder="Skriv din e-post adress här...">
                            </div>
                        </div>

                        <div class="col-md-3" id="submitButton">
                            <button type="submit" name="forgotPassword" class="btn btn-primary btn-md btn-block">Skicka</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
<script src="js/loginAnimations.js"></script> 
</body>

<?php include("includes/footer.php");?>









