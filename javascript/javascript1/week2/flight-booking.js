let fullName1;
let fullName2;
let formalFullName = true;
function getFullName (firstName, surName, formalFullName) {
fullName1 = `lord ${firstName} ${surName}`;
fullName2 = `${firstName} ${surName}`;
if (formalFullName) {
  return fullName1;
} else {
  return fullName2;
}
}
getFullName('Benjamin', 'Hughes', true);
getFullName('Benjamin', 'Hughes', false);
