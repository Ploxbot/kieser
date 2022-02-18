const counter = document.querySelector("#counter"); 
const start = document.querySelector("#start"); 
const stop = document.querySelector("#stop"); 

counter.value = 0; 
let interval; 
let i = 0; 

start.addEventListener("click", startCounter); 
stop.addEventListener("click", stopCounter); 

function startCounter(){ 
    interval = setInterval(function() { 
      counter.value = i++; 
    }, 1000); 
  } 
   
  function stopCounter(){ 
    clearInterval(interval);  
  } 