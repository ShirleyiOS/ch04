/**
 * Created by wangshuang on 16/5/31.
 */
function simpleTimeout(consoleTimer){
    console.timeEnd(consoleTimer)
}

//"twoSecond"计时器的名字
console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");
console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");