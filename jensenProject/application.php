<?php

    session_start();

    require_once("includes/dbConnection.php");
    require_once("includes/functions.php");
	include("includes/head.php");
	include("includes/checkpost.php");
?>
<body>
	
<body id="frontPageBody">

    <div class="container" id="frontPageContainer">

    	<div class="row">

    		<div class="col-sm-4" id="lame">
    			<h2>Vill du veta mer om våra utbildningar? Fyll i dina uppgifter här bredvid så får du informationen                             hemskickad.</h2>
    		</div>
            
            <div class="col-sm-4 col-sm-offset-2" id="contactinfo">
                <div id="contactfields">
                    
    			<form action="application.php" method="POST">
                    <label for="meddelande">Förnamn</label><br />
                    <input type="text" name="name" class="fieldcolor"><br />
                    <label for="meddelande">Efternamn</label><br />
                    <input type="text" name="lastname" class="fieldcolor"><br />
                    <label for="meddelande">Gata</label><br />
                    <input type="text" name="street" class="fieldcolor"><br />
                    <label for="meddelande">Postadress</label><br />
                    <input type="text" name="address" class="fieldcolor"><br />
                    <label for="meddelande">E-mail</label><br />
                    <input type="text" name="mail" class="fieldcolor"><br /><br>
                    <input type="checkbox" name="wuk" value="wuk"> Webbutveckling<br>
                    <input type="checkbox" name="it" value="itprojekt"> IT-projektledning<br>
                    <input type="checkbox" name="testers" value="testare"> Programvarutestare<br>
                    <input type="checkbox" name="cobol" value="cobol"> COBOL<br>
                    <input type="checkbox" name="personnel" value="lönepers"> Löne/Personal<br>
                    <input type="checkbox" name="account" value="redovisning"> Redovisning<br><br>
                    <input type="submit" method="post" value="Skicka" name="applicationButton" id="applicationButton">
                </form>
                    
                </div>
    		</div>
    </div>

</body>
</html>