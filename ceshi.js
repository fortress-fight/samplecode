let arr = [{
    "title": "颜色",
    "value": [{
        "title": "红色"
    }, {
        "title": "蓝色"
    }]
}, {
    "title": "重量",
    "value": [{
        "title": "36"
    }, {
        "title": "48"
    }, {
        "title": "60"
    }]
}, {
    "title": "尺寸",
    "value": [{
        "title": "100"
    }, {
        "title": "200"
    }, {
        "title": "300"
    }]
}, {
    "title": "尺寸",
    "value": [{
        "title": "大"
    }, {
        "title": "中"
    }, {
        "title": "小"
    }]
}];

let newArr = arr.map(function (v) {
    let newArr = [];
    v.value.forEach(e => {
        newArr.push(e.title)
    });
    return newArr;
})

let i = 0;
let lastResult = [];

function getResult (arr, result) {
    i++;
    let template = [];
    if (result.length != 0) {
        result.forEach(k => {
            arr.forEach((v, j) => {
                template.push(k + ',' + v);  
            });
        });
    } else {
        arr.forEach((v, j) => {
            template.push(v);  
        });
    }

    if (newArr[i]) {

        getResult(newArr[i], template);
    } else {
        lastResult = template;
    }
};
getResult(newArr[i], []);
console.log(lastResult);