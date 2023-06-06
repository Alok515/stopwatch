  
let [sec,min,hour] = [0,0,0];
let displayTime = document.getElementById("dt");
let timer = null;




                const changeTime = function(){
                    sec++;
                    if(sec===60){
                        sec=0;
                        min++;
                        if(min===60){
                            min=0;
                            hour++;
                        }
                    }
                    let h = hour < 10 ? '0'+hour : hour;
                    let m = min < 10 ? '0'+min : min;
                    let s = sec < 10 ? '0'+sec : sec;
                    displayTime.innerText = h + ":" + m + ":" + s ;
                }
    
                let startButton = document.getElementById("play");
    let stopButton = document.getElementById("stop");
    let resetButton = document.getElementById("reset");
                function startWatch(){
                    if(timer!==null){
                        clearInterval(timer);
                    }
                    timer = setInterval(changeTime,1000);
                }
                function stopWatch(){
                    clearInterval(timer);
                }
                function resetWatch(){
                    clearInterval(timer);
                    [sec,min,hour]=[0,0,0];
                    displayTime.innerText = "00:00:00";
                }
    
    startButton.addEventListener("click",startWatch);
    stopButton.addEventListener("click",stopWatch);
    resetButton.addEventListener("click",resetWatch);
