let [seconds, minutes, hours] = [0,0,0];
let DisplayTime = document.getElementById("DisplayTime");
let timer = null;


function Stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;

        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++; 
        }
    }

let h = hours < 10 ? "0" + hours : hours; 
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" +seconds : seconds;

    DisplayTime.innerHTML = h +":"+ m +":"+ s;
}

function watchStart(){
if(timer!==null){
clearInterval(timer);
}
timer = setInterval(Stopwatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    DisplayTime.innerHTML = "00:00:00"
}