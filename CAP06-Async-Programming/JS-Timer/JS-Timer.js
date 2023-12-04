

let h = document.querySelector('#h');
let m = document.querySelector('#m'); 
let s = document.querySelector('#s');
let paus = document.querySelector('#pause');
let hours = document.querySelector('#hours');
let minute = document.querySelector('#minute');
let set; 
let count = 0; 
let err = 0;



function start(){ 
    err++;
let hours = document.querySelector('#hours').value;
let minute = document.querySelector('#minute').value;
    let secnod = 60; 
    // if(err == 1){ 
    if(hours == '' && minute >=1 ){
         m.innerHTML = minute;
        set = setInterval(()=>{
            s.innerHTML = secnod--; 
            if(s.innerHTML <= 0){
                secnod = 60; 
                m.innerHTML = minute--;    
            }
            if(minute <= 0){
                m.innerHTML = 0;
                s.innerHTML = 0;
                clearInterval(set)
            }
        },1000); 
    }else if(hours >= 1 && minute == ''){
         minute = 60;
         hours  = hours-1;
        h.innerHTML = hours;
        m.innerHTML = minute;
        set = setInterval(() => {
            s.innerHTML = secnod--;  
            if(s.innerHTML <= 0){ 
                secnod = 60;  
                m.innerHTML = minute--;  
            }if(m.innerHTML <= 0){
                minute = 60; 
                hours--;
                m.innerHTML = minute;
                h.innerHTML = hours;    
              }  
            if(hours <= 0 && minute <= 0){
                m.innerHTML = 0;
                h.innerHTML = 0;
                
                clearInterval(set)
            }  
              
        }, 1000);   
    }else if(hours >= 1 && minute >= 1){
        m.innerHTML = minute;
        h.innerHTML = hours;
     set = setInterval(()=>{ 
            s.innerHTML = secnod--;  
            if(s.innerHTML <= 0){ 
                secnod = 60;
                minute--;
                m.innerHTML = minute;
            }
            if(minute <= 0){
                minute = 60;
                hours--; 
                h.innerHTML = hours;
            } 
             if(hours <= 0){  
               clearInterval(set)
               m.innerHTML = 60;  
                set = setInterval(() => {
                    s.innerHTML = secnod--;  
            if(s.innerHTML <= 0){ 
                secnod = 60;  
                m.innerHTML = minute--;  
            }if(m.innerHTML <= 0){
                 clearInterval(set) 
                     
              }   
             
                }, 1000);  
             } 
 
        },1000)
    } 
// }         
}  ;
   



function pause(){
   count++;
   if(count % 2 == 1){
    paus.innerHTML = 'RESUME'; 
    clearInterval(set)
   }else if(count % 2 == 0){
       paus.innerHTML = 'PAUSE';  
       hours = h.innerHTML;
       minute = m.innerHTML; 
       start();  
   } 
  
 }
 
 
 
 
 function stop(){ 
     m.innerHTML = 0;
     h.innerHTML = 0;
     s.innerHTML = 0;  
     clearInterval(set)  
     location.reload();
 } 
  
 
  
 