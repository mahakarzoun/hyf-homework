function getfullname(firstname, lastname, useformal){
  fullName = firstname + '' + lastname;
  if (useformal) {
    fullName = 'MR '+ fullName;
    return fullName;
  }
}
  console.log(getfullname('Benjamin ', 'hughes ', true));
  console.log(getfullname('Benjamin ', 'hughes ', false));
