const http = require('http');
http.createServer((req,res) => {
    res.write("<h1>hey this is a response</h1>")
}).listen(3000)