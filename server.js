var http = require("http");

http.createServer(function (request, response) {
  // body...
  // Send http header
  // http status: 200 ok
  // content-type: text-plain
  response.writeHeader(200, {'Content-type': 'text/plain'});

  // send the response body as "hello world"
  response.end("Hello World\n");
}).listen(3000);

// console will print the message

console.log("Server running at http://localhost:3000")