/**
 * Module dependencies
 */

let fs = require('fs'),
    stdin = process.stdin,
    stdout = process.stdout;


fs.readdir(process.cwd(), function (err, files) {

    // 用于储存文件信息，使其可以在整个上下文中调用
    let stats = [];

    function file(i) {
        var filename = files[i];

        fs.stat(__dirname + '/' + filename, function (err, stat) {

            stats[i] = stat;
            if (stat.isDirectory()) {
                console.log('   ' + i + '   \033[36m' + filename + '\033[31m');
            } else {

                console.log('   ' + i + '   \033[36m' + filename + '\033[37m');
            }
            if (++i == files.length) {
                read();
            } else {
                file(i)
            }
        });
    }

    function read() {
        console.log('');
        stdout.write('  \033[33mEnter you choice: \033[39m');
        stdin.resume();
        stdin.setEncoding('utf8');

        // 开始监听用户的输入行为
        stdin.on('data', option);
    }

    function option(data) {
        let filename = files[Number(data)];

        if (!files[Number(data)]) {

            stdout.write('  \033[31mEnter your choise: \033[39m');
        } else {

            if (stats[Number(data)].isDirectory()) {
                fs.readdir(__dirname + '/' + filename, function (err, files) {
                    console.log('');
                    console.log('   (' + files.length + 'file)');

                    files.forEach(function (v, i) {
                        console.log('   -  ' + v);
                    });
                    console.log('');
                })
            } else {


                fs.readFile(__dirname + '/' + filename, 'utf8', function (err, data) {
                    console.log('');

                    // 添加一些缩进
                    console.log('\033[37m' + data.replace(/(.*)/g, '    $1') + '\033[39m');
                });
            }


            // 暂停输入流
            stdin.pause();
        }
    }

    file(0)
});




