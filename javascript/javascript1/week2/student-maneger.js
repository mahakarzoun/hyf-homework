let class07Students = ['Maha', 'Kamal', 'Karolina'];

function preventSameName (name){
    const theRestLetters = name.slice(1);
    let splittedName = name.split("");
    name = `${splittedName[0].toUpperCase()}${theRestLetters.toLowerCase()}`
    return name 
}
function addStudentToClass(studentName) {
    studentName = preventSameName(studentName)
if (studentName.length === 0) {   
    return 'what is your name?';
}else if (class07Students.includes(studentName)) {
    return `${studentName} is already in the class`;
}else if (class07Students.length >=6 && studentName !== 'queen') {
    return 'Sorry but we can\'t add more students to class 15';   
}else {
    class07Students.push(studentName)
    return `welcome ${studentName} , you\'r added to class 15`; 
} 
}

function getNumberOfStudents() {
const totalNrOfStudents = class07Students.length;
  return totalNrOfStudents;
}

console.log(addStudentToClass('')); // it gives an error bcs of the toUpperCase()
console.log(addStudentToClass('queen'));
console.log(addStudentToClass('maha'));
console.log(addStudentToClass('maher'));
console.log(addStudentToClass('maHer'));
console.log(getNumberOfStudents());