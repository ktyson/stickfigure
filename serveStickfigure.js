var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8080;


http.createServer(function(request, response) {

  
var uri = url.parse(request.url).pathname, 
    filename = path.join(process.cwd(), uri),
    pathkey = uri.substr(uri.lastIndexOf('/') + 1);

console.log("ok", uri, filename, pathkey);




      //STATIC FILES
   
	  if (uri === '/favicon.ico') {
		response.writeHead(200, {'Content-Type': 'image/x-icon'} );
		response.end();
		//console.log('favicon requested');
		return;
	  }
	  	  
      if (fs.statSync(filename).isDirectory()) filename += 'index.html';
     
      var contentType = 'text/plain';
      if (request.url.indexOf('.css') != -1) {
        contentType = 'text/css';
      }

      fs.readFile(filename, "binary", function(err, file) {
        if(err) {        
          response.writeHead(500, {"Content-Type": contentType});
          response.write(err + "\n");
          response.end();
          return;
        }

        response.writeHead(200);
        response.write(file, "binary");
        response.end();
      });



}).listen(parseInt(port, 10));

console.log("Server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
