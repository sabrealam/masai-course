 
let arr = ['MA','SA','I','SCH','OOL'];
 
let ar = [];
function convert(n){
  let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let small = 'abcdefghijklmnopprstuvwxyz';
  let str = '';
  for(let i = 0; i < n.length; i++){
    for(let j = 0; j < small.length; j++){
      if(n[i] == cap[j]){
         str += small[j];
        }else if(n[i] == small[j]){
          str += cap[j];
        }
      }
    } 
    ar.push(str) 
    
  } 
  
  
  arr.forEach(e=>{
    convert(e);
  })
  
  console.log(ar);