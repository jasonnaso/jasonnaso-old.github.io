<?php

    session_start();

    require_once("includes/functions.php");
    require_once("includes/dbConnection.php");
//j here
    try{
            
        $content = "";
        $content .="\r\n";
        $content .= "//USERS";
        $content .= "\r\n";

        foreach(selectAllFrom("users") as $u){
            $content .="\r\n";
            $content .= $u['user_id'].";";
            $content .= $u['education_key'].";";
            $content .= $u['name'].";";
            $content .= $u['lastname'].";";
            $content .= $u['username'].";";
            $content .= $u['socialsecurity'].";";
            $content .= $u['email'].";";
            $content .= $u['authority'].":";
        }

        $content .="\r\n";
        $content .="\r\n";
        $content .= "//COURSES";
        $content .= "\r\n";
            //j 
        foreach(selectAllFrom("courses") as $c){
            $content .="\r\n";
            $content .= $c['id'].";";
            $content .= $c['course_id'].";";
            $content .= $c['education_key'].";";
        }

        $content .="\r\n";
        $content .="\r\n";
        $content .= "//EDUCATIONS";
        $content .="\r\n";
//j
        foreach(selectAllFrom("educations") as $e){
            $content .="\r\n";
            $content .= $e['id'].";";
            $content .= $e['education_key'].";";
        }

        $content .="\r\n";
        $content .="\r\n";
        $content .= "//GRADES";
        $content .="\r\n";

        foreach(selectAllFrom("grades") as $g){
            $content .="\r\n";
            $content .= $g['id'].";";
            $content .= $g['user_id'].";";
            $content .= $g['course_id'].";";
            $content .= $g['grade'].";";
        }

        file_put_contents("dbDump.txt", $content);
    }
             
    catch(Exception $exception){
            echo $exception;
    }

?>