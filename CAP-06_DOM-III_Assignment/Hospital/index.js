// fill in javascript code here
let form = document.querySelector('form');
let app = document.querySelector('#app');

let name = document.querySelector('#name');
let docID = document.querySelector('#docID');
let dept = document.querySelector('#dept');
let exp = document.querySelector('#exp');
let email = document.querySelector('#email');
let mbl = document.querySelector('#mbl'); 

let arr = [];
form.addEventListener('submit',function(e){
    e.preventDefault(); 
    
    let obj = {};
    obj.name = name.value;
    obj.docID = docID.value;
    obj.dept = dept.value;
    obj.exp = exp.value;
    obj.email = email.value;
    obj.mbl = mbl.value;

    arr.push(obj);
    app.innerText = null; 
    arr.map((ele,i) => { 
        let tr = document.createElement('tr');
        let td1 = document.createElement('td'); td1.innerText = ele.name;
        let td2 = document.createElement('td'); td2.innerText = ele.docID;
        let td3 = document.createElement('td'); td3.innerText = ele.dept;
        let td4 = document.createElement('td'); td4.innerText = ele.exp;
        let td5 = document.createElement('td'); td5.innerText = ele.email;
        let td6 = document.createElement('td'); td6.innerText = ele.mbl;
        let td7 = document.createElement('td');
        let td8 = document.createElement('td'); td8.innerText = 'Delete';
        td8.setAttribute('class','cur')
        if(ele.exp > 5){
            td7.innerText = 'Senior';
        }else if(ele.exp > 1 && ele.exp < 6 ){
            td7.innerText = 'Junior';
        }else{
            td7.innerText = 'Trainee';
            
        } 

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        
            
        td8.addEventListener('click',function(){ 
            let res =  arr.filter((e,j)=> {
                if(i == j){
                      console.log(e.name);
                    tr.innerText = ''; 
                     
                } 
                
            })   
            console.log(res); 

        })
        app.append(tr)
    })


})