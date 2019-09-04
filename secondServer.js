var http = require('http'),
  fs = require('fs'),
  url = require('url'),
  port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function (request, response) {
  var parsedUrl = url.parse(request.url);
  //console.log(parsedUrl);
  if ((request.method === 'GET') && (request.url == '/listings')) {
    response.status = 200;
    response.end(listingData); /* untested */
    //console.log(jsonData);
  }
  else {
    response.writeHead(404, {'Content-Type': 'application/json'});
    //response.status = 404;
    response.end("Bad gateway error")
  }
  
  /*If a GET request is sent to the '/listings' path your 
  request handler should send listingData in the JSON format 
  as a response. Otherwise, it should send a 404 error. 
  */
};

fs.readFile('listings.json', 'utf8', function (err, data) {
  /*This callback function should save the data in the listingData variable, 
    then start the server.    
    HINT: Check out this resource on fs.readFile
    https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
    HINT: Read up on JSON parsing Node.js*/

  //Check for errors
  if(err) {
    return err;
  }
  else{
    listingData = data;  
  }
  //Creates the server
  const server = http.createServer(requestHandler);

  //Start the server
  server.listen(port, (request, response) => {
    console.log('The server is started.');
  });

  console.log('Is the server started?');
});
