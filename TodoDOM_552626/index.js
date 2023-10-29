let res = document.querySelector('#res');
let form = document.querySelector('form');

let task = document.querySelector('#task');
let prior = document.querySelector('#priority');

let arr = [];

form.addEventListener('submit',function(e){
    e.preventDefault();
    let obj = {};
    obj.in1 = task.value;
    obj.in2 = prior.value;
    arr.push(obj)

res.innerText = null;
    
    arr.map((e)=> {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        td1.innerText = e.in1;
        td2.innerText = e.in2;

        tr.append(td1,td2)
        res.append(tr)
    })
        
})