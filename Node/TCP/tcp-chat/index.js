const net = require('net');

let count = 0,
    users = {};

let server = net.createServer(function (conn) {
    console.log('\033[90m  new connection! \033[39m');
    conn.setEncoding('utf8');

    let nickname;
    
    conn.write(
        '\n > welcome to \033[92m node-chat\033[39m!'
        + '\n > '+ count +' other people are connected at this time'
        + '\n > please write your name and press enter:'
    );

    conn.on('close', function () {
        count--;
        delete users[nickname];
        broadcast('\033[90m > ' + nickname + ' left the room\033[39m\n');
    });

    function broadcast (msg, exceptMyself) {
        for(var i in users) {
            if (!exceptMyself || i != nickname) {
                users[i].write(msg);
            }
        }
    }

    conn.on('data', function (data) {
        // 这是因为 Node 通过换行符来判断信息是否结束，在存放信息的时候，我们需要去除换行符；
        data = data.replace('\r\n', '');
        console.log(data);
        console.log(data.toString('utf8'));

        if(!nickname) {
            if (users[data]) {
                conn.write('\033[93m> nickname already in use. try again:\033[39m ');
                return;
            } else {
                nickname = data;
                users[nickname] = conn;

                for(var i in users) {

                    // 将加入的信息在所有的面板中提示
                    // users[i].write('\033[90m > ' + nickname + ' joined the room\033[39m\n');
                    broadcast('\033[90m > ' + nickname + ' joined the room\033[39m\n');
                }
            }
        } else {
            for (var i in users) {
                if (i != nickname) {
                    users[i].write('\033[96m > ' + nickname + ':\033[39m ' + data + '\n');
                }
            }
        }
    });
    
    count++;
});

server.listen(3000, function () {
    console.log('\003[96m  server listening on *:3000\033[39m');
});
