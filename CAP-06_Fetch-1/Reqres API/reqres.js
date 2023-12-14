let root = document.querySelector('.head');
let count = 0;
async function fetchUser(){
    
    if(count == 0) {

        let response = await fetch('https://reqres.in/api/users?page=2');
        let data = await response.json();
   data.data.map(e=>{
    console.log(e );
    let div = document.createElement('div');
    let img = document.createElement('img');  img.setAttribute('src',e.avatar);
    let indiv1 = document.createElement('div');
    indiv1.append(img);
    let id = document.createElement('p'); id.textContent = `Id: ${e.id}`;
    let fn = document.createElement('p'); fn.textContent = `First Name : ${e.first_name}`;
    let ln = document.createElement('p'); ln.textContent = `Last  Name : ${e.last_name}`;
    let email = document.createElement('p'); email.textContent = `E-Mail : ${e.email}`; 
    div.append(indiv1, id,fn,ln,email); 
    root.appendChild(div);
    count++;
})
}else{
    alert('We have Not Any Other Data On The Server')
}
}            
 





