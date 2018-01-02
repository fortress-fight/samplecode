var process = require('process');
var WatchJS = require("./watch");
var watch = WatchJS.watch;
var unwatch = WatchJS.unwatch;
var callWatchers = WatchJS.callWatchers;

//defining our object however we like
var ex1 = {
	attr1: "initial value of attr1",
	attr2: "initial value of attr2"
};

//defining a 'watcher' for an attribute
watch(ex1, "attr1", function(){
    console.log(arguments);
    process.exit();
});

//when changing the attribute its watcher will be invoked
setTimeout(() => {
    ex1.attr1 = "other value";
}, 1000);
