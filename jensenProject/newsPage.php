<?php
// j here  static
	session_start();
	require_once("includes/dbConnection.php");
	include("includes/functions.php");

	if(!hasLoggedIn()){
    	return;
    }
	
	autoLogout();
	
	include("includes/head.php");
	include("includes/checkpost.php");
?>

<?php include("includes/menu.php");?>   	
<script src="js/frontpageAnimations.js"></script>
<body id="newsBackground">
         <div id="content" class="container-fluid">
            <div id="textLeft" class="col-md-5 bothTexts">
                <h1>Nyheter</h1>
                <div id="title" class="imageLeft"></div>
                <h3>Jensen?</h3>
                
                    
                       <p>"Vet ej egentligen men..."Lorem ipsum dolor sit amet, te homero tibique 
                            hendrerit mel, usu ea aeque omnes, mei animal option labitur 
                            in. Ad brute ponderum sententiae has, qui eu minim errem 
                            omnium. Ut nec essent consetetur. Ut has wisi suscipit 
                            periculis, mea id tritani maiorum, cu cum quas liberavisse. 
                            Mel equidem scripserit ne, quod consectetuer ius ne. No vide 
                            vitae cum, malorum fuisset usu te.Ut has wisi suscipit 
                            periculis, mea id tritani maiorum, cu cum quas liberavisse. 
                            Mel equidem scripserit ne, quod consectetuer ius ne. No vide 
                            vitae cum, malorum fuisset usu te.
                            Mel equidem scripserit ne, quod consectetuer ius ne. No vide 
                            vitae cum, malorum fuisset usu te.Ut has wisi suscipit 
                            periculis, mea id tritani maiorum, cu cum quas liberavisse. 
                            Mel equidem scripserit ne, quod consectetuer ius ne. No vide 
                            vitae cum, malorum fuisset usu te.</p>
                            
            </div>
            
            <div id="textRight" class="col-md-5 bothTexts" > 
               <h1>Nyheter</h1>
                <div id="title" class="imageRight"></div>
                <h3>Kylen i köket luktar</h3>
                       <p>"Ja, det stämmer..."Lorem ipsum dolor sit amet, te homero tibique 
                            hendrerit mel, usu ea aeque omnes, mei animal option labitur 
                            in. Ad brute ponderum sententiae has, qui eu minim errem 
                            omnium. Ut nec essent consetetur. Ut has wisi suscipit 
                            periculis, mea id tritani maiorum, cu cum quas liberavisse. 
                            Mel equidem scripserit ne, quod consectetuer ius ne. No vide 
                            vitae cum, malorum fuisset usu te. 
                            Mel equidem scripserit ne, quod consectetuer ius ne. No vide 
                            vitae cum, malorum fuisset usu te.Ut has wisi suscipit 
                            periculis, mea id tritani maiorum, cu cum quas liberavisse. 
                            Mel equidem scripserit ne, quod consectetuer ius ne. No vide 
                            vitae cum, malorum fuisset usu te</p>
                            
            </div>
        </div>  
    
</body>
</html>


