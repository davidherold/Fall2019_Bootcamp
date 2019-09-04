var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  /*parsedUrl = fs.createReadStream('listings.json')*/
  if (true)/*a getRequest is sent to the /listings path*/ {
    //response.setHeader('Content-Type', 'application/json');
    //response.writeHead(200, {'Content-Type': 'application/json'});
    var data = fs.readFileSync('listings.json', 'utf8');
    var words = JSON.parse(data);
  }
  else{
    response.statusCode = 404;    
  }
  /*
 If a GET request is sent to the '/listings' path your 
 request handler should send listingData in the JSON format 
 as a response. Otherwise, it should send a 404 error. 

    HINT: Explore the request object and its properties 
    HINT: Explore the response object and its properties
    https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
    
    HINT: Explore how callback's work 
    http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4
    
    HINT: Explore the list of MIME Types
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
   */
};

// readJsonFile("C:/Users/'David Herold'/'Fall 2019'/'Software Eng'/Fall2019_Bootcamp/listings.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 

    HINT: Check out this resource on fs.readFile
    //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    HINT: Read up on JSON parsing Node.js
   */

    //Check for errors
  

   //Save the sate in the listingData variable already defined
  

  //Creates the server
  const server = http.createServer(requestHandler);
  
  //Start the server
  server.listen /*server.on?*/ ('request', (request, response) => {
    console.log('The server is started.');
  });

  console.log('Is the server started?');


});
