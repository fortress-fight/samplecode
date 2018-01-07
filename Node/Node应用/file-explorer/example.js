/**
 * Module dependencies
 */

let fs = require('fs');

/**
 * ---------------------
 * 对应的颜色代码是：30（黑色）、31（红色）、32（绿色）、 33（黄色）、34（蓝色）、35（洋红）、36（青色）、37（白色）。
 */

fs.readdir(process.cwd(), function (err, files) {
    // 输出一个换行
    console.log('');
    // \033[31m 和 \033[39m 是为了让文件呈现红色
    if (!files.length) {
        return console.log('     \033[31m No files to show!\033[39m\n')
    }

    console.log(' Select which file or directory you want to see\n');

    function file(i) {

        // 获取文件名
        var filename = files[i];

        // stat 是获取文件或者路径的元数据, 在回调中存在一个错误对象，和一个 stat 对象
        fs.stat(__dirname + '/' + filename, function (err, stat) {

            // 使用 stat 对象上的 isDirectory 方法，判断传入的是一个文件还是一个文件路径
            if (stat.isDirectory()) {

                // 如果是文件路径将会显示 红色
                console.log('   ' + i + '   \033[36m' + filename + '\033[39m');
            } else {

                console.log('   ' + i + '   \033[34m' + filename + '\033[39m');
            }

            i++;

            // 如果循环结束
            if (i == files.length) {
                console.log('');

                // 输出提示信息
                process.stdout.write('  \033[33mEnter your choice: \033[39m');

                // 开启 stdin 流，等待输入
                // process.stdin.resume();

                // 设置流编码为 utf8 这样就可以支持特殊字符了
                process.stdin.setEncoding('utf8');
            } else {

                // 否则继续回调
                file(i);
            }
        });
    }

    file(0)
})

console.log 相当于 stdout 输出 + /n 换行

