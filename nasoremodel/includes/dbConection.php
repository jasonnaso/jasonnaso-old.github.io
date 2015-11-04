 <?php

    $db = new PDO('mysql:host=localhost;dbname=jensen_online', 'root', '');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec("SET NAMES 'utf8'");										
?>