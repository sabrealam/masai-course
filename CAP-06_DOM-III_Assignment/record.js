// fill in javascript code here
let form = document.querySelector('form');
let app = document.querySelector('#app');
let nam = document.querySelector('#name');
let id = document.querySelector('#employeeID');
let department = document.querySelector('#department');
let exp = document.querySelector('#exp');
let email = document.querySelector('#email');
let mbl = document.querySelector('#mbl');

let arr = [];
form.addEventListener('submit',function(e){
    e.preventDefault();
    let obj = {};
    obj.name = nam.value;
    obj.id = id.value;
    obj.department = department.value;
    obj.exp = exp.value;
    obj.email = email.value;
    obj.mbl = mbl.value;
    arr.push(obj);
app.innerText = null;
    arr.map((ele)=> {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerText = ele.name;
        let td2 = document.createElement('td');
        td2.innerText = ele.id;
        let td3 = document.createElement('td');
        td3.innerText = ele.department;
        let td4 = document.createElement('td');
        td4.innerText = ele.exp;
        let td5 = document.createElement('td');
        td5.innerText = ele.email;
        let td6 = document.createElement('td');
        td6.innerText = ele.mbl;

        tr.append(td1,td2,td3,td4,td5,td6)

        app.append(tr)

    })



})

console.log(arr);