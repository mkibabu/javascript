// load a specific url and measure the time it takes to load it

var page = require("webpage").create(),
    system = require("system"),
    t, address;

if(system.args.length === 1)
{
    console.log("Usage: loadSpeed.js <somr URL>");
    phantom.exit();
}

// get the current time
t = Date.now();
// get the first (and presumably only) argument
address = system.args[1];
// open the page, and time it
page.open(address, function (status)
{
    if(status !== "success")
    {
        console.log("FAIL to load address");
    }
    else
    {
        t = Date.now() - t;
        console.log("Loading time:", t, "msec");
    }
    phantom.exit();
});
