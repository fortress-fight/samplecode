// 导出变量
export var color = 'red';

// 导出函数
export function example () {
    console.log('this is a expamle fn')
}

// 导出类
export class example2 {
    constructor () {
        console.log('this is a class fn')
    }
}

function sum (num1, num2) {
    return num1 + num2;
}

export {sum as add};