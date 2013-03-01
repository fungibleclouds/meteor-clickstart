/*
 * Basic test suite for the meteor todo app
 * This is making use of webdriver and https://github.com/Camme/webdriverjs
 * 
 * Take a look at http://unexpectedliteral.com/2012/05/09/automated-functional-testing-with-javascript-using-mocha-and-selenium-part-2/
 * For more ideas. Other options are phantom.js (webkit only)
 * Webdriver/selenium also works with the saucelabs grid
 */

var webdriverjs = require("webdriverjs");
var client = webdriverjs.remote();
//var client = webdriverjs.remote({host: "xx.xx.xx.xx"}); // to run it on a remote webdriver/selenium server
//var client = webdriverjs.remote({desiredCapabilities:{browserName:"chrome"}}); // to run in chrome

client    
    .init()
    .url("http://localhost:3000")    
    .tests.titleEquals("Todos")
    .tests.visible("#side-pane", true, "Side pane is visible")
    .setValue("#new-todo", "Yeah")
    .click("#new-list")        
    .end();