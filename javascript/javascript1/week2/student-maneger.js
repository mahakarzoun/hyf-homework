let class07Students = ['Maha', 'kamal', 'Gary', 'Karolina', 'shruthi'];
let studentName;

function addStudentToClass(studentName) {  
if (studentName.length === 0) {   
    return 'what is your name?';
}else if (class07Students.includes(studentName)) {
    return `${studentName} is already in the class`;
}else if (class07Students.length >=6 && studentName !== 'queen') {
    return 'Sorry but we can\'t add more students to class 15';   
}else {
    return `${class07Students.push(studentName)} welcome ${studentName} , you\'r added to class 15`; 
} 
}

function getNumberOfStudents() {
const totalNrOfStudents = addStudentToClass.length;
  return addStudentToClass(class07Students).length;
}

console.log(addStudentToClass('kamal'));
console.log(addStudentToClass('queen'));
console.log(addStudentToClass('amber'));
console.log(addStudentToClass(''));
getNumberOfStudents();
