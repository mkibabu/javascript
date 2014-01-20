<?php

// Database connection variables
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "chat";

// number of records to store and display

$store_num = 10;
$display_num = 10;

// identify all errors in the code
error_reporting(E_ALL);
// make sure the output is treated as XML
header("Content-type: text/xml");
// make sure IE doesn't cache the request
header("Cache-control: no-cache");
// connect to db
$dbconn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_select_db($dbname, $dbconn);
// parse the POST data into key-value pairs
foreach($_POST as $key => $value)
    $$key = mysql_real_escape_string($value, $dbconn);

?>
