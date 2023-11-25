let form = document.querySelector('form');
let root = document.querySelector('#root');
// let filter = document.querySelector('#filter');
// obj.filter = filter.value;

let arr = [];
form.addEventListener('submit', function(e){
    e.preventDefault();
 
    let obj = {};
    obj.name = e.target.name.value;
    obj.doctor_id = e.target.doctor_id.value;
    obj.specialization = e.target.specialization.value;
    obj.experience = e.target.experience.value;
    obj.email = e.target.email.value;
    obj.mobile = e.target.mobile.value; 
     
    arr.push(obj);
    root.innerHTML = null;
arr.map((e,i)=>{ 
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = e.name;
    let td2 = document.createElement('td');
    td2.innerHTML = e.doctor_id ;
    let td3 = document.createElement('td');
    td3.innerHTML = e.specialization ;
    let td4 = document.createElement('td');
    td4.innerHTML = e.experience;
    let td5 = document.createElement('td');
    td5.innerHTML =  e.email;
    let td6 = document.createElement('td');
    td6.innerHTML =  e.mobile;
    let td7 = document.createElement('td');
    if(e.experience > 5){
        td7.innerText = 'Senior';
    }else if(e.experience > 1 && e.experience < 6 ){
        td7.innerText = 'Junior';
    }else{
        td7.innerText = 'Trainee';
        
    } 
    let btn = document.createElement('button');
    btn.innerHTML = 'Delete';

    btn.addEventListener('click', function(){
    ar  = arr.filter((el,j)=>{ 
            // return el.name != el.name;
            if(e.name == el.name){
                tr.innerHTML = null;
            }
        })
        tr.innerHTML = null;
    })



    tr.append(td1,td2,td3,td4,td5,td6,td7,btn);
    root.append(tr)
})



})

 