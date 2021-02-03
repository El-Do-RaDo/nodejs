var http = require('http');//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World! brijesh kese brooo kyu brooonahi nab brooo'); //write a response
  res.end(); //end the response
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});
