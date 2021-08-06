student=[];

function submit(){
 name1  =document.getElementById('student_1').value;
 student.push(name1);
 name2 =document.getElementById('student_2').value;
 student.push(name2);
 name3 =document.getElementById('student_3').value;
 student.push(name3);
 name4 =document.getElementById('student_4').value;
 student.push(name4);
 name5 =document.getElementById('student_5').value;
 student.push(name5);
 document.getElementById('result').innerHTML=student;
}