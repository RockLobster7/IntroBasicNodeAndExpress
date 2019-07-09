//Use the app.get() method to serve the string Hello Express, 
//to GET requests matching the / root path. Be sure that your 
//code works by looking at the logs, then see the results in your browser, 
//clicking the button ‘Show Live’ in the Glitch UI.


var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log ("Hello World");


/** 2) A first working Express Server */
/*
app.get("/", function(req, res) {
  res.send("Hello Express");
});
*/


/** 3) Serve an HTML file */
// app responds with index.HTML
// Node global variable __dirname to calculate the path
var indexPath = __dirname +  "/views/index.html";
console.log (indexPath);

app.get("/", function(req, res) {
  res.sendFile(indexPath);
});


/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use( 
  (req, res, next) => {
  //console.log("I'm a middleware...");
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
  }
);

/** 4) Serve static assets  */
// we've now given the user access to assets in the public folder (css)
var assetsFolderPath = __dirname + "/public";
app.use(express.static(assetsFolderPath));


/** 5) serve JSON on a specific route */
//serving JSON at appURL/json
/*
app.get("/json", (req, res) => {
  res.json({"message": "Hello json"});
});
*/

/** 6) Use the .env file to configure the app */
console.log (process.env.MESSAGE_STYLE);

app.get("/json", (req, res) => {
  
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({"message": "HELLO JSON"});
  } else {
    res.json({"message": "Hello json"});
  }
});


/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next();
}, (req, res, next) => {
  res.json({time: req.time});
});


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
