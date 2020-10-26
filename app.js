var hour = minute = second = 0;
const getTime = () => {
    //var time = setInterval(myTimer(), 1000); 
    var myVar = setInterval(getTimeFunction, 1000);
    //time = "11:11:11";
    return myVar;
    //document.write(time);
}

const getStopWatch = () => {
    let stopwatch = setInterval( getStopWatchFunction, 1000);
    //stopwatch = "00:00:00";
    return stopwatch; 
}

const getTimeFunction = () => {
    var d = new Date();
    var a = Date.now() 
    //return d.toLocaleTimeString();
    document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}
const getStopWatchFunction = () => {
    d = hour + ":" + minute + ":" + second; 
    //alert(second);
    document.getElementById("stopwatch").innerHTML = d;
    if(second != 59){
        second += 1;
    }else if(minute != 59){
        second = 0;
        minute += 1;
    }else if(hour != 59){
        hour += 1;
    }
}


//getTime();
document.write(getTime());


