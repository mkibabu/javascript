// require() isn't a standard JS construct. It works like PHP's include, but
// rather than merging in the included module, require returns it and caches it
// as a variable (aka namespace)

// load the phantomjs webpage module & create a webpage object
var page = require ('webpage').create();

// call webpage's open() method, giving it a url and the callback function used
// to interact with it. Here, we'll call the page.evaluate function within our
// callback function

page.open('http://net.tutsplus.com', function()
{
    // the function we pass to page.evaluate executes as javascript  on the
    // loaded webpage, and returns the page's title
    var title = page.evaluate(function ()
    {
        // find all elements with the post class; exit if none are found
        var posts = document.getElementsByClassName("post");
        if(typeof(posts) === "undefined" || posts === null)
        {
            console.log("No item with class name \"posts\"");
            phantom.exit();
        }
        // set background of first post to black
        posts[0].style.backgroundColor = "#000000";
        return document.title;
    });
    // set the dimensions of the screenshot to take with render
    page.clipRect = { top: 0, left: 0, width: 600, height: 700 };
    //take the screenshot, save it as titleOfPage.png
    page.render(title + ".png");
    phantom.exit();
});
