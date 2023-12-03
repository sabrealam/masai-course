let min = document.querySelector('#res');
let sec = document.querySelector('#sec');
let ms = document.querySelector('#ms'); 
let star = document.querySelector('#start');
let set ;
let clickcount = 1;
let resetcount = 1;
let mms = 1;
let s = 1;
let m = 1;
 function start(){
    clickcount++;
    resetcount++;
    resetcount = clickcount;
    if(clickcount % 2 == 0){
    set = setInterval(()=>{
        star.innerHTML = 'STOP';
        ms.innerHTML = mms++;
        if(mms >= 100){
            sec.innerHTML = s++;
            mms = 1;
        }
        if(s >= 60){
            min.innerHTML = m++;
            s = 1;
        } 
    },10)  
}else if(clickcount % 2 == 1){
    star.innerHTML = 'START'; 
    clearInterval(set) 
     
    } 
    return clickcount;
 } 
 function reset(){   
     if(clickcount % 2 == 0){
         clearInterval(set)
         star.innerHTML = 'START';
         min.innerHTML = '0';
         sec.innerHTML = '0';
         ms.innerHTML = '0';
         clickcount++;
        mms = 1;
         s = 1;
         m = 1;
    }else if(clickcount % 2 == 1){
          
        min.innerHTML = '0';
        sec.innerHTML = '0';
        ms.innerHTML = '0';
        
         
    }
 }











































    // let remove;
    // btn.forEach((e)=>{ 
    //     let click = 0;
    //     let count = 1;
    //     e.addEventListener('click',function(){
    //         click++;
    //         count++;
    //         let show = 1;
    //         let z = 1; 
    //         if(e.innerHTML == 'START'){ 
    //                 e.innerHTML = 'STOP';
    //                 remove = setInterval(()=>{
    //                     ms.innerHTML = count++; 
    //                     if(count >= 250 ){ 
    //                         count = 1;   
    //                     sec.innerHTML = show++;
    //                     } 
    //                     if(show >= 60){
    //                         show = 1;   
    //                         res.innerHTML = z++;
    //                     }
    //                 },.1000); 
            
    //        }else if(e.innerHTML = 'STOP'){
    //         clearInterval(remove);
    //         e.innerHTML = 'START';  
    //     } 
 
  