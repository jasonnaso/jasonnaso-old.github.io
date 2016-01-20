<?php
	session_start();

    include("includes/functions.php");

    if(!hasLoggedIn()){
    	return;
    }

    autoLogout();

	include("includes/head.php");
	include("includes/checkPost.php");
?>
<body id="gradingPageBody">

<script>

	function displayStudents(str) {

	  $.ajax({
  		type: 'GET',
  		// under// //name of get is "filter students" posted from filter grades
  		url: 'includes/filterGrades.php?filterStudents=' + str,
  		success: function(data) {
  			$("#list").html(data);
  		}

		}).done(function(){


			$('.valuegrabber').click(function(){
				var user_id = this.parentNode.parentNode.firstChild.id;
				var course_id = this.parentNode.parentNode.children[3].id;
				var grade = this.value;
				
				updateGrade(user_id, course_id, grade);
			});

		});
	}

	function updateGrade(user_id, course_id, grade) {

		$.ajax({
			type: 'GET',
			url: 'includes/filterGrades.php?updateGrade=yolo&user_id=' + user_id + '&course_id=' + course_id + '&grade=' +grade,
			success: function(data){
			} 
		})
	}

</script>

	<?php include("includes/menu.php");?>

		<div id="list">

			<?php include("includes/filterGrades.php");?>

		</div>
	</div>
		

</body>
</html>
















