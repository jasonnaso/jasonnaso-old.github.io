<?php

	if(isset($_POST["forgotUsername"])){
		require_once("lostUsername.php");
	}
	if(isset($_POST["forgotPassword"])){
		require_once("lostPassword.php");
	}
	if(isset($_POST["login"])){
		require_once("loginValidate.php");
	}
	if(isset($_POST["addUser"])){
		require_once("addUser.php");
	}
	if(isset($_POST["addEducation"])){
		require_once("addEducation.php");
	}
	if(isset($_POST["addCourse"])){
		require_once("addCourse.php");
	}
    if(isset($_POST["applicationButton"])){
        require_once("addApplication.php");
    }
	
?>