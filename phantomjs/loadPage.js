// require() isn't a standard JS construct. It works like PHP's include, but
// rather than merging in the included module, require returns it and caches it
// as a variable (aka namespace)

// load the phantomjs webpage module & create a webpage object
var page = require ('webpage').create();

// call webpage's open() method, giving it a url and the callback function used
// to interact with the webpage. Here, all we'll do is log the status of the
// webpage (should output "success")
page.open('http://net.tutsplus.com', function(s)
{
    console.log(s);
    phantom.exit();
});
