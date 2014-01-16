<?php

// Database connection variables
$dbhost = "localhost";
$dbuser = "chatuser";
$dbpass = "chatpass";
$dbname = "chatdb";

// number of records to store and display

$store_num = 10;
$display_num = 10;

error_reporting(E_ALL);             // identify all errors in the code
header("Content-type: text/xml");   // make sure the output is treated as XML
header("Cache-control: no-cache");  // make sure IE doesn't cache the request

// connect to db
$dbconn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_select_db($dbname, $dbconn);

// parse the POST data into key-value pairs
foreach($_POST as $key => $value)
    $$key = mysql_real_escape_string($value, $dbconn);


if(@$action == "postmsg")
{
    // insert the new message into the database
    mysql_query("INSERT INTO messages (`user`, `msg`, `time`)
                VALUES ('$name', '$message', ".time().")");
    // delete old messages
    mysql_query("DELETE FROM messages WHERE id <= " .
                (mysql_insert_id($dbconn)-$store_num), $dbconn);

}

// get the message info of messages yet to be downloaded, starting fromth e latest
$messages = mysql_query("SELECT user, msg FROM messages WHERE time > $time
                        order by id ACS LIMIT $display_num", $dbconn);

if(mysql_num_rows($messages) == 0)
    $status_code = 2;
else
    $status_code = 1;

echo "<?xml version=\"1.0\"?>\n";
echo "<response>\n";
echo "\t<status>$status_code</status>\n";
echo "\t<time>" .time() . "</time>\n";

if(status_code == 1)
{
    while($message = mysql_fetch_array($messages))
    {
        $message['msg'] = htmlspecialchars(stripslashes($message['msg']));
        echo "\t<message>\n";
        echo "\t\t<author>$message[user]</author>\n";
        echo "\t\t<text>$message[msg]</text>\n";
        echo "\t</message>\n";
    }
}

echo "</response>";

?>
