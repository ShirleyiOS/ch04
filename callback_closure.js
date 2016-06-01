/**
 * Created by wangshuang on 16/6/1.
 */
function logCar(logMsg, callback){
    process.nextTick(function() {
        callback(logMsg);
    });
}
var cars = ["Ferrari", "Porsche", "Bugatti"];
for (var idx in cars){
    var message = "Saw a " + cars[idx];
    console.log("outside :" + message);
    logCar(message, function(){
        console.log("inside :" + message);
        console.log("Normal Callback: " + message);
    });
}
for (var idx in cars){
    var message = "Saw a " + cars[idx];
    (function(msg){
        logCar(msg, function(){
            console.log("Closure Callback: " + msg);
        });
    })(message);
}