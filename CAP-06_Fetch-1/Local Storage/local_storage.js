let nam = document.querySelector('#name');
let age = document.querySelector('#age');
let form = document.querySelector('form');
let data = document.querySelector('.data');
let arr =JSON.parse(localStorage.getItem('data')) || [];
form.addEventListener('submit',function(e){
    // e.preventDefault();
     let obj = {
        nam:nam.value,
        age:age.value
     }
     arr.push(obj);
     localStorage.setItem('data', JSON.stringify(arr));
})

let get = JSON.parse(localStorage.getItem('data'));
let count = 0;
console.log(get); 
function singledata(){ 
    count++;
    if(count <= get.length){ 
        let div = document.createElement('div');
        let p1 = document.createElement('p');p1.textContent ='NAME :' + get[count-1].nam;
        let p2 = document.createElement('p');p2.textContent ='AGE  :' + get[count-1].age;
        div.append(p1,p2);
        data.append(div);
    }else {
        alert('We Do Not Have More Data In Local Storage Plase Add From The Left Form');
    } 
         
}  