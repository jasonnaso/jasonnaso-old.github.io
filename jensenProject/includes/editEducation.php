<?php

	include("dbConnection.php");

?>
	<div class="hidden adminForms">
    	<div class="panel panel-default col-md-8 col-md-offset-2" id="profilePanel">
            <div class="panel-heading">
            	<h3 class="panel-title">Ändra utbildning</h3>
            </div>

        	<div class="panel-body">
				<div class="col-md-12">

					<form action="profile.php" method="POST">
						<select name="editEducation" class="form-control">
							<option>Utbildningar</option>

							<?php

							foreach(selectAllFrom("educations") as $edu){
								echo "<option value =".$edu["id"].">".$edu["education_name"]."</option>";
							}

							?>

						</select>
						<input type="submit" name="chooseEducation" class="form-control formSubmits">
					</form>


<?php

	if(isset($_POST["chooseEducation"])){

		try{

			$id = $_POST["editEducation"];

			$query = "SELECT * FROM educations ";
			$query .= "WHERE id = :id";

			$ps = $db->prepare($query);

			$ps->execute(array(
				"id" => $id
			));

			$education = $ps->fetch(PDO::FETCH_ASSOC);

		}catch(Exception $exception){
			echo $exception;
		}


	}

?>

<form action="profile.php" method="POST">

<!--A div with the input-group class is neccessary for the span element with the input-group-addon element to work-->
	<div class="input-group">
		<span class="input-group-addon">Utbildning</span>
		<input type="text" name="education_id" value="<?php if(isset($_POST['chooseEducation'])){echo $education['id'];}?>" class="hidden">
		<input type="text" name="education_key" value="<?php if(isset($_POST['chooseEducation'])){echo $education['education_key'];}?>" class="form-control">
	</div>
	<input type="submit" name="updateEducation" value="Uppdatera" class="form-control formSubmits">
</form>
</div>
</div>
</div>
</div>

<?php 

	if(isset($_POST["updateEducation"])){

		$education_key = $_POST["education_key"];
		$education_id  = $_POST["education_id"];

		try{

			$query = "UPDATE educations ";
			$query .= "SET education_key = :education_key, education_name = :education_key ";
			$query .= "WHERE id = :education_id";

			$ps = $db->prepare($query);

			$ps->execute(array(

				"education_key" => $education_key,
				"education_id"  => $education_id
			));

			alert("success", $education_key, "har uppdaterats");


		}catch(Exception $exception){
			echo $exception;
		}
	}

?>










