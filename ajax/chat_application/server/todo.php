<?php

/*
 * Database connection values using a php data object. For differnt db or user
 * config, change these.
 */

$dbinfo = "mysql:dbname=chat;host=localhost";
$user   = "dbuser";
$pass   = "dbpass";

$table  = "messages";

// number of messages to store in the db
$storeNum   = 10;
// number of messages to display
$displayNum = 10;

/*
 * NO EDITING BEYOND THIS POINT
 */

 $dbh = null;
 $sth = null;

 // array of results in the database
$rows = array();

// value to determine which id has been selected
$selected = -1;

try
{
    $dbh = new PDO($dbinfo, $user, $pass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbh->exec("SET CHARACTER SET utf8");

}
catch (PDOException $e)
{
    echo "I'm sorry, Jim; I can't do that." . PHP_EOL;
    echo $e->getMessage() . PHP_EOL;
}

// Error reporting
error_reporting(E_ALL);
// messages are saved in XML format (see messageFormat.xml)
header("Context-type: text/xml");
// make IE not cache responses that have same url as requesting page
header("Cache-Control: no cache");


?>
