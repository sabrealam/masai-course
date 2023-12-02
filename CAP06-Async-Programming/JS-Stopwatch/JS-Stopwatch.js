let res = document.querySelector('#res');
let btn = document.querySelectorAll('#btn>button');
let sec = document.querySelector('#sec');

let ms = document.querySelector('#ms');
    let remove;
    btn.forEach((e)=>{ 
        let click = 0;
        e.addEventListener('click',function(){
            click++;
            let count = 1;
            let show = 1;
            let z = 1; 
            if(e.innerHTML == 'START'){
                // e.innerHTML = 'STOP';
        remove = setInterval(()=>{
            ms.innerHTML = count++; 
            if(count >= 250 ){ 
                count = 1;   
            sec.innerHTML = show++;
            } 
            if(show >= 60){
                show = 1;
                // count = 1;  
                res.innerHTML = z++;
            }
        },.1000);    
           }else if(e.innerHTML == 'STOP'){
            //    e.innerHTML = 'START';  
               sec.innerHTML = show++;
               console.log(show);
            clearInterval(remove)
           }else if(e.innerHTML == 'RESET'){
            res.innerHTML = '0';
            sec.innerHTML = '0';
            ms.innerHTML = '0';
            clearInterval(remove);
           }
        })
    })
 
  