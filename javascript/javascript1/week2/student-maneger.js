let class14Students = ['maha', 'Elias', 'Anil' , 'Deepti'];
function addStudentToClass(studentName) { 
     if (class14Students.length >= 6) {
       return 'no more student can be added to class 14';
    } else if  (class14Students.includes(studentName)) {
       return 'Student ' + studentName +  ' is already in the class'; 
    } else if  (class14Students.length < 6 || studentName == 'queen' ) {
        return  studentName + ' is added to class 14 as the '+
         class14Students.push(studentName)+ 'th ' + 'student';
    }  
}


//try calling the function 
addStudentToClass('nuha');
//displaying the function of the class 14
console.log(addStudentToClass('nuha'));
console.log(addStudentToClass('queen'));
console.log(addStudentToClass('maher'));