#  MeteorJS clickstart

MeteorJS is a realtime JS framework for building server and client apps very very quickly:

"Meteor is an open-source platform for building top-quality web apps in a fraction of the time, whether you're an expert developer or just getting started." You can read more about it (here)[http://meteor.com/]

When you run this clickstart, it will deploy a sample app (the todo app from meteor) - create a new mongodb instance (on mongohq for you) and build that runs a real browser run an integration test against the app, before deploying it to cloudbees ready to do. 

After that point, you can clone your new private repo, modify - and push changes ! Away you go. The aim is to get you going with an end to end pipeline from source to deployment with testing, a build and a database all ready to go, no more servers.


<a href="https://grandcentral.cloudbees.com/?CB_clickstart=https://raw.github.com/michaelneale/meteor-clickstart/master/clickstart.json"><img src="https://d3ko533tu1ozfq.cloudfront.net/clickstart/deployInstantly.png"/></a>


CloudBees is a complete platform as a service - all your bits are hosted (even your source code and building).

When you run this clickstart, it will grab the freshest version of meteor (you can customise the build script later however you want).

# To run manually locally

Clone this:
* cd this repo/todos
* $ meteor 

Browser to localhost:3000 (that is all !)

You will need meteor installed on your system.


Running integration testing locally: 
install nodejs
install phantomjs (npm install phantomjs works)
git clone https://github.com/jgonera/webspecter.git --recursive
add phantomjs, node and webspectre to your path
Start meteor (as above)
$ webspectre tests/integration.coffee


# What next
Well once you have this running - you can modify it to be the app you want. The MongoDB app is bound to your application, and any change you make triggers the Jenkins build automatically. For those more keen on browser testing - you can try the saucelabs add on to get a wide variety of browser/OS testing via selenium-webdriver.

