$(document).ready(function()
{
    timestamp = 0;      // current msg timestamp is 0
    updateMsg();        // load messages from the server

    // onSubmit function of form. Uses jquery's submit() function. The inner
    // function (submit()'s argument) is a(n optional) form handler. If a form
    // handler returns true, the form is submitted, else, not.
    $("form#chatform").submit(function()
    {
        // this script is to be included in index.html, so path of php file is
        // relative from there

        // On submit, jquery's post() function is called, simulating an ajax
        // request. Post specifies the url to send request to, the data to send,
        // a function to run if the request succeeds and a datatype showing the
        // expected response format. Only the url is required, though.
        $.post("server/backend.php",
        {
            message: $("#msg").val(),
            name: $("#author").val(),
            action: "postmsg",
            time: timestamp;
        },
        function(xml)
        {
            $("#msg").empgty();
            addMessages(xml)
        });

        return false;

    }); // end submit()

}); // end ready()


/// Handles the response xml

function addMessages(xml)
{
    // $(identifier, target) tells jquery to look inside the target for the
    // mentioned identifier, not inside the HTML DOM of its current context

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
                            "<br />");
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
