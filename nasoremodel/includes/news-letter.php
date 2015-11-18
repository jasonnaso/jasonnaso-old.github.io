<?php 
     // print_r($_POST);
    
    if (isset($_POST["email"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){


        require_once("dbConnection.php");
       
        $email = $_POST['email']; 
        
        $query = "INSERT INTO newsletterEmail";
        $query .= "(email)";
        $query .= "VALUES (:email)";

        $ps = $db->prepare($query);

        $ps->execute(array(
            
            "email" => $email,
        ));
        header('Location: http://localhost/projects/nasoremodel/video.php');
        exit;
        
        }else{
                
           
            echo "<h6 class='alert alert-danger'>Please fill in field.</h6><br>";
            // header('Location: http://localhost/projects/nasoremodel/video.php' );
            // exit;
            

         }
        
    


   
 
    

?> 


               
               


