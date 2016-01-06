<?php
    if(isset($_POST['applicationButton'])){
			try{

				$nameError = $lastnameError = $streetError = $addressError = $mailError = false;

				require_once("includes/dbConnection.php");
				require_once("includes/functions.php");

				$name      		= ($_POST["name"]);
				$lastname  		= ($_POST["lastname"]);
				$street  		= ($_POST["street"]);
				$address  		= ($_POST["address"]);
				$mail     		= ($_POST["mail"]);
				$wuk            = isset($_POST["wuk"]) ? 1 : 0;
				$it 		    = isset($_POST["it"]) ? 1 : 0;
                $testers        = isset($_POST["testers"]) ? 1 : 0;
                $cobol          = isset($_POST["cobol"]) ? 1 : 0;
                $personnel      = isset($_POST["personnel"]) ? 1 : 0;
                $account        = isset($_POST["account"]) ? 1 : 0;

				$options = [
					"cost" => 10,
					//"salt" => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM)
				];

				//j here
				if(!preg_match("/^[A-Za-z]*$/",$name)){

  					$nameError = true;
  				}
                if(!preg_match("/^[A-Za-z]*$/",$lastname)){

  					$lastnameError = true;
  				}
                if(!preg_match("/^[A-Za-z0-9 ]*$/",$street)){

  					$streetError = true;
  				}
                if(!preg_match("/^[A-Za-z0-9 ]*$/",$address)){

  					$addressError = true;
  				}

				if(!filter_var($mail, FILTER_VALIDATE_EMAIL)){

  					$mailError = true;
  				}
                
                
		 
  																									
  				if($nameError === true || $mailError === true || $lastnameError === true || $streetError === true || $addressError === true){
                    
  					if($nameError === true){

  						alert("Du kan bara använda bokstäver.");
  					}
  					
  					if($lastnameError === true){

						alert("Du kan bara använda bokstäver.");
  					}
  					if($streetError === true){

  						alert("Har du skrivit gatunamnet rätt?");
  					}
  					if($addressError === true){
  						
  						alert("Har du skrivit postadressen rätt?");
  					}
                    if($mailError === true){

						alert("E-postformatet var fel");					
  					}

  				}//to here
  				else{

					$query = "INSERT INTO application ";
					$query .= "(name, lastname, street, address, mail, wuk, it, testers, cobol, personnel, account) ";
					$query .= "VALUES (:name, :lastname, :street, :address, :mail, :wuk, :it, :testers, :cobol, :personnel, :account)";

					$ps = $db->prepare($query);

					$ps->execute(array(
						"name"        => $name,
						"lastname"    => $lastname,
						"street"      => $street,
						"address"     => $address,
						"mail"        => $mail,
						"wuk"         => $wuk,
						"it"          => $it,
                        "testers"     => $testers,
                        "cobol"       => $cobol,
                        "personnel"   => $personnel,
                        "account"     => $account,
                        
					));

					alert("Tack för ditt intresse. Du får snart hem din information.");
				    //j here but unused
					unset($_POST['name']);
					unset($_POST['lastname']);
					unset($_POST['street']);
					unset($_POST['address']);
					unset($_POST['mail']);
					unset($_POST['wuk']);
					unset($_POST['it']);
                    unset($_POST['testers']);
                    unset($_POST['cobol']);
                    unset($_POST['personnel']);
                    unset($_POST['account']);

  				}
			}
			catch(Exception $exception){
				echo $exception;
			}
    }
 ?>



