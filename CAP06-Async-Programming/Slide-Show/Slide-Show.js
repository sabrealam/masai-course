
let main = document.querySelector('.main');
let img = document.querySelector('img');
let star = document.querySelector('#start');
let btn = document.querySelectorAll('#btn > button');
let arr = [
    "https://img.freepik.com/premium-vector/human-humanoid-robot-team-working-together-man-cyborg-sitting-with-laptops-office-workspace-flat-vector-illustration-artificial-intelligence-workforce-futuristic-technology-concept_74855-21191.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/premium-vector/cloud-management-abstract-concept-vector-illustration_107173-29849.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/premium-vector/young-woman-use-technology-device-working-online-with-laptop-computer-smartphone-doing-work-cartoon-character-vector-illustration_1150-59756.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18146.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/software-integration-concept-illustration_114360-7277.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/digital-transformation-concept-illustration_114360-8629.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/floating-man-using-virtual-reality-headset-concept_52683-52780.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/isometric-cms-concept_23-2148807389.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/hand-drawn-innovation-concept-with-vr-glasses_52683-76241.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/hand-drawn-flat-design-rpa-illustration_23-2149277643.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/group-people-working-together_52683-28615.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/innovation-concept-illustration_114360-5848.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/hand-drawn-flat-design-metaverse-background_23-2149272282.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/hand-drawn-flat-design-rpa-illustration_23-2149277643.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/group-people-working-together_52683-28615.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/innovation-concept-illustration_114360-5848.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/free-vector/hand-drawn-flat-design-metaverse-background_23-2149272282.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais",
    "https://img.freepik.com/premium-vector/man-is-sitting-with-laptop-concept-illustration-working-freelancing-studying-education_572614-344.jpg?size=626&ext=jpg&ga=GA1.1.1546815657.1692990221&semt=ais"
]
 
let cur = 0;
img.setAttribute('src',arr[cur]);
let count = 1; 
let set;

 
function start(){ 
    count++;
    if(count % 2 == 0){
        star.innerHTML = 'STOP';
    set =  setInterval(e=>{ 
            cur++;
            img.setAttribute('src',arr[cur]);
            if(cur >= 20){
                cur = 0;
            } 
        },1000) 
        
    }else{ 
        star.innerHTML = 'START';
        clearInterval(set)
    } 
}  
  
btn.forEach(e=>{
    e.addEventListener('click',function(){
        if(e.innerHTML == 'NEXT'){
           cur++;
        clearInterval(set); 
            img.setAttribute('src',arr[cur]);
            if(cur >= 20){
                cur = 0;
            }
       }else{
        cur--;
        clearInterval(set)
        img.setAttribute('src',arr[cur])
        if(cur < 0){
            cur = 19;
        }
       }
    })
}) 


