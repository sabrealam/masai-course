 
let root = document.querySelector('h1');
document.querySelector('#start').addEventListener('click',start);
document.querySelector('#add').addEventListener('click',increament)
document.querySelector('#sub').addEventListener('click',decreament)


let start_stop = 0;
let clear;
var count = 1;   
function start(){
  start_stop++;
  if(start_stop % 2 == 1){    
    document.querySelector('#start').textContent = 'Stop';
    clear = setInterval(() => { 
      root.innerHTML = count++;
    }, 1000); 
  }else{
    document.querySelector('#start').textContent = 'Start';
    clearInterval(clear);
    count = count; 
  }  
}
 


let increament_count = 0;

function increament(st){ 
  increament_count++;  
  clearInterval(clear);
  if(increament_count > 1){  
    count = +root.innerHTML + 1;
    root.innerHTML = +root.innerHTML + 1;
    document.querySelector('#start').textContent = 'Start';
  }
 
}

function decreament(){
  increament_count++;
  if(increament_count > 1){ 
    clearInterval(clear);
    let plus = root.innerHTML;
    root.innerHTML = +plus - 1;
  }
}

 
