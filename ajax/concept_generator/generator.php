<?php
// Cache-Control, because IE caches same-url pages, even if the content changes.
header("Cache-control: no-cache");

// File that outputs a random quote from a list of prefixes and suffixes.

$prefixes = array("Mashup", "2.0", "Folksonomy", "Tagging", "Hashtag");
$suffixes = array("Web", "Media", "SaaS", "Cloud-based", "Virtualization");
// Note that, if you'd rather the names come from files rather than arrays,
// switch each line above with its equivalent, like so:
// $prefixes = file("nameOfPrefixFile");

// Select a random element of each array
echo $prefixes[rand(0, count($prefixes) - 1)] . " is the new "
    . $suffixes[rand(0, count($suffixes) - 1)] . ".";
?>

