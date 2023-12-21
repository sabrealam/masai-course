
let root = document.querySelector('h1');
document.querySelector('#start').addEventListener('click',start);
document.querySelector('#add').addEventListener('click',increament)
document.querySelector('#sub').addEventListener('click',decreament)


 
let clear;
let count = 0;
class Counter{
    constructor(){ 

    } 
    start(){
    clear =  setInterval(() => {
          count++;
          root.innerHTML = count;
        }, 1000);
        
      }
      stop(){
        clearInterval(clear);
      } 
      increase(){ 
      clearInterval(clear);
      count++;
      root.innerHTML = count;
      }
      decrease(){ 
      clearInterval(clear)
      count--;
      root.innerHTML = count;

     }
      

}   

let counter = new Counter();  
let stspcount = 0;
function start(){
   stspcount++; 
  if(stspcount % 2 == 1){
  counter.start();
  document.querySelector('#start').textContent = 'Stop';
  }else{
    counter.stop();
    document.querySelector('#start').textContent = 'Start';      
  }
}


incdec_counter = 0;
function increament(){ 
  incdec_counter++;
  if(incdec_counter>1){
    counter.increase();
  }else{
    counter.stop();
  } 
    
  }
  
function decreament(){
  incdec_counter++;
  if(incdec_counter > 1){
    counter.decrease(); 
  }else{
    counter.stop();
  }
}

