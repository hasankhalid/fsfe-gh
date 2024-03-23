const http = require("http"); 

http.createServer(function(req, res) {
	res.write("<h1 style='font-family: sans-serif; color: purple;'>On the way to being happy!!</h2>");
	res.end();
}).listen(3000);


console.log("Server started on port 3000"); 


