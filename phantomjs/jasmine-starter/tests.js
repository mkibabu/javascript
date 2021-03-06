describe ("DOM Tests", function ()
{
    var el = document.createElement("div");
    el.id = "myDiv";
    el.innerHTML = "Hi there!";
    el.style.background = "#ccc";
    document.body.appendChild(el);

    var myEl = document.getElementById('myDiv');
    it("is in the DOM", function ()
    {
        expect(myEl).not.toBeNull();
    });

    it("is a child of the body", function()
    {
        expect(myEl.parentElement).toBe(document.body);
    });

    it("has the right text", function()
    {
        expect(myEl.innerHTML).toEqual("Hi there!");
    });

    it("has the right background", function()
    {
        expect(myEl.style.background).toEqual("rgb(204, 204, 204)");
    });
});
