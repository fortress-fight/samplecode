const net = require('net');

var client = net.connect(3000, '127.0.0.1', function () {

});

client.setEncoding('utf8');

client.on('connect', function () {
    client.write('NICK mynick\r\n');
});
