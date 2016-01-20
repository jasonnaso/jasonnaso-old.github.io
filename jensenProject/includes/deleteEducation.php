<?php

include("dbConnection.php");

	if(isset($_POST["deleteEducation"])){
		try{

			$id = $_POST["educations"];

			$query = "DELETE FROM educations WHERE id = :id";

			$ps = $db->prepare($query);

			$ps->execute(array(
				"id" => $id
			));

			alert("success","","Kursen är borttagen");

		}
		catch(Exception $exception){
			echo $exception;
		}
	}
	try{

		$query = "SELECT * FROM educations";

		$ps = $db->prepare($query);

		$ps->execute();
		$educations = $ps->fetchAll();

	}
	catch(Exception $exception){
		echo $exception;
	}
	
?>
	<div class="hidden adminForms">
    	<div class="panel panel-default col-md-8 col-md-offset-2" id="profilePanel">
            <div class="panel-heading">
            	<h3 class="panel-title">Ta bort utbildning</h3>
            </div>

        	<div class="panel-body">
				<div class="col-md-12">

					<form action="profile.php" method="POST">
						<select name="educations" class="form-control">
							<option>Utbildningar</option>

	<?php

	foreach($educations as $e){
		echo "<option value =".$e["id"].">".$e["education_name"]."</option>";
	}

	?>
	</select>
	<input type="submit" name="deleteEducation" class="form-control formSubmits" value="Ta bort">
	</form>
	
</div>
</div>
</div>
</div>



