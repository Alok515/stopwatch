
let [sec,min,hour] = [0,0,0];
let displayTime = document.getElementById("dt");
let timer = null;
let pastTime = document.getElementById("pastEvent");


//the Timer with Hour Min and Sec 
const changeTime = function(){
    //increaseing the seconds
    sec++;
    if(sec === 60){
        // reset the seconds back to the beginning
        sec = 0;
        //increase the minutes
        min++;
        if(min === 60){
            // reset the minutes back to the beginning
            min = 0;
            //increase the hours
            hour++;
        }
    }
    //fill the timer with 0 if min is between 1 to 9
    let h = hour < 10 ? '0'+hour : hour;
    let m = min < 10 ? '0'+min : min;
    let s = sec < 10 ? '0'+sec : sec;
    //display the time on the page
    displayTime.innerText = h + ":" + m + ":" + s ;
}

// three buttons for the working of stopwatch
let startButton = document.getElementById("play");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

//Function to start the timer
function startWatch(){
    if(timer!==null){
        clearInterval(timer);
    }
    
    timer = setInterval(changeTime,1000);
}
//Function to stop the Stopwatch timer
function stopWatch(){
    clearInterval(timer);
    //alert the user if the timer is not running
    if(hour === 0 && min === 0 && sec === 0){
        alert("Please First Start the Stopwatch Timer");
        return;
    }
}
//reset timer Function changes the timer to 00:00:00
function resetWatch(){
    clearInterval(timer);
    console.log(hour,min,sec);
    //alert the user if the timer is not running
    if(hour === 0 && min === 0 && sec === 0){
        alert("Please First Start the Stopwatch Timer");
        return;
    }
    pastTime.innerText = 'Last Count is '+ hour + ':' + min + ':' + sec; 
    [sec,min,hour]=[0,0,0];
    displayTime.innerText = "00:00:00";
}
//Event handlers for the timer events using the addEventListener method    
//Event handler fot start Button
startButton.addEventListener("click",startWatch);
//Event handler For Stop Button
stopButton.addEventListener("click",stopWatch);
//Event handler For Reset Button
resetButton.addEventListener("click",resetWatch);
