var http = require('http');

var serv = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<p>HelloWorld</p>');
})

serv.listen(3000);