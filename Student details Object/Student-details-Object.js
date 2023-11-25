
function student_detail(name,roll_no,klass,section,marks_of_5_subjects){
    this.name = name;
    this.roll_no = roll_no;
    this.klass = klass;
    this.section = section; 
    this.marks_of_5_subjects = {
    science         : marks_of_5_subjects[0],
    maths           : marks_of_5_subjects[1],
    social_science  : marks_of_5_subjects[2],
    english         : marks_of_5_subjects[3],
    hindi           : marks_of_5_subjects[4]
    };
    this.printTop3Subjects = function(){
    let t =  marks_of_5_subjects.sort(function(a, b){return b - a});
         let count = 0;  
        for(let key in this.marks_of_5_subjects){
            count++;
            console.log(key);  
            if(count == 3){ 
                break;
            }
        }  
    };
    this.printReportCard = function(){
        let sum = 0;
        marks_of_5_subjects.forEach(e=>{
            sum += e;
        })  
    console.log(` 
            REPORT CARD

    Name      : ${this.name} 
    Roll no.  : ${this.roll_no}
    Class     : ${this.klass}
    Section   : ${this.section}
    Science   : ${marks_of_5_subjects[0]}
    S Sc.     : ${marks_of_5_subjects[1]}
    Maths     : ${marks_of_5_subjects[2]}
    English   : ${marks_of_5_subjects[3]}
    Hindi     : ${marks_of_5_subjects[4]}
    Percetage : ${(sum/600)*100} %
    `);  
    }
} 

/**                  NOTE
 
    1. All The Marks Passed In an Array Form...
  
 */

let student1 = new student_detail('sabre',123,5,'A',[65,56,75,80,70])

student1.printReportCard()  

student1.printTop3Subjects();
 