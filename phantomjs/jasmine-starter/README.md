# PHANTOM-JASMINE TESTS

## Source

[PhantomJS tutorial on nettuts+](net.tutsplus.com/tutorials/javascript-ajax/testing-javascript-with-phantomjs/)

To run the tests, navigate to the phantom-jasmine directory and enter:

    `phantomjs lib/run\_jasmine__test.coffee ./SpecRunner.html`

If you plan on using this often, it might be a good idea to move the
run\_jasmine\_test.coffee file to a more accesible location, such as
~/bin/run\_jasmine\_test.coffee, and create a terminal alias for the whole
command. This can be achieved by adding the following line to .bashrc, for
instance:

    `alias phantom-jasmine='phantomjs /path/to/run\_jasmine\_test.coffee'`

