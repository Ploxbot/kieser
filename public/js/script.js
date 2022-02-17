const counter = document.querySelector("#counter"); 
const reset = document.querySelector("#reset"); 
const start = document.querySelector("#start"); 
const stop = document.querySelector("#stop"); 

counter.innerHTML = 00; 
let interval; 
let i = 0; 

start.addEventListener("click", startCounter); 
stop.addEventListener("click", stopCounter); 
reset.addEventListener("click", resetCounter); 

function startCounter(){ 
    interval = setInterval(function() { 
      counter.innerHTML= i++; 
    }, 1000); 
  } 
   
  function stopCounter(){ 
    clearInterval(interval);  
  } 