

<?php

//NOT FINISHED

	//Grabs all the students

	require_once("dbConnection.php");

		try{

			$query = "SELECT education_key, name, lastname, socialsecurity ";
			$query .= "FROM users WHERE authority = 'student'";

			$ps = $db->prepare($query);

			$ps->execute();

			$students = $ps->fetchAll();
		}
		catch(Exception $exception){
			echo $exception;
		}

	//Grabs all the teachers

		try{

			$query = "SELECT education_key, name, lastname, socialsecurity ";
			$query .= "FROM users WHERE authority = 'teacher'";

			$ps = $db->prepare($query);

			$ps->execute();

			$teachers = $ps->fetchAll();
		}
		catch(Exception $exception){
			echo $exception;
		}

?>

<?php

	if(isset($_POST["WUK"])){

		try{

			$query = "SELECT WUK.education_name, courses.course_name ";
			$query .= "FROM WUK ";
			$query .= "JOIN courses ";
			$query .= "ON courses.education_id = WUK.education_id";

			$ps = $db->prepare($query);

			$ps->execute();

			$courses = $ps->fetchAll();

			foreach($courses as $c){
				echo "<p>".$c["course_name"]."</p></br>";
			}
		}	
		catch(Exception $exception){
			echo $exception;
		}
	}

	if(isset($_POST["COBOL"])){

		try{

			$query = "SELECT COBOL.education_name, courses.course_name ";
			$query .= "FROM COBOL ";
			$query .= "JOIN courses ";
			$query .= "ON courses.education_id = COBOL.education_id";

			$ps = $db->prepare($query);

			$ps->execute();

			$courses = $ps->fetchAll();

			foreach($courses as $c){
				echo "<p>".$c["course_name"]."</p></br>";
			}
		}
		catch(Exception $exception){
			echo $exception;
		}
	}

	if(isset($_POST["PTK"])){

		try{

			$query = "SELECT PTK.education_name, courses.course_name ";
			$query .= "FROM PTK ";
			$query .= "JOIN courses ";
			$query .= "ON courses.education_id = PTK.education_id";

			$ps = $db->prepare($query);

			$ps->execute();

			$courses = $ps->fetchAll();

			foreach($courses as $c){
				echo "<p>".$c["course_name"]."</p></br>";
			}
		}
		catch(Exception $exception){
			echo $exception;
		}
	}



?>


    <table class="table">
      <caption>Optional table caption.</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>



















