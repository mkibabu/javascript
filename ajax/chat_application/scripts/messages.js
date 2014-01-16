timestamp = 0;      // current msg timestamp is 0
updateMsg();        // load messages from the server

// onSubmit function of form
$("form#chatform").submit(function()
{
    $.post("server/backend.php",
    {
         message: $("#msg").val(),
         name: $("#author").val(),
         action: "postmsg",
         time: timestamp;
    },
    function(xml)
    {
        addMessages(xml)
    });

    return false;

});


/// Handles the response xml

function addMessages(xml)
{
    // $(identifier, target) tells jquery to look inside the target for the
    // mentioned indentifier, not inside the HTML DOM of its current context

    if($("status", xml).text() == "2")
        return;

    timestamp = $("time", xml).text();

    // .each() is jQuery's array iteration function. Takes as a param a function
    // denoting the actions to perform to each array element
    $("message", xml).each(function(id)
    {
        message = $("message", xml).get(id);
        $("#messagewindow").prepend("<b>" + $("author", message).text() +
                            "</b>: " + $("text", message).text() +
                            "<br />);
    });
}

// load current messages from server
function updateMsg()
{
    $.post("server/backend.php", { time: timestamp }, function(xml)
    {
        $("#loading").remove();
        addMessages(xml);
    });

    setTimeout('updateMsg()', 4000);
}
