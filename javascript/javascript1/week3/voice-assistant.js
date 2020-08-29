let command = '';
function getReplay(command) {
    let name;
    let todo = [];
    let activities;
    switch (command) {
        case 'my name is' + name:
         console.log('nice to meet you' + name);
            break;
        case 'what is my name':
          console.log('Your name is' + name);
            break;
        case 'add' + activities + 'to my todo':
            console.log(activities + 'adding to yor todo');
            todo.push(activities);
              break;
    
        case command = 'remove'+ activities + 'from my to do':
            console.log(activities + ' is removed from your todo' + todo.splice(activities));
            break;
}      
}  

    console.log(getReplay('my name is maha'));
    let day; //* declare a variable day 
  switch (new Date().getDay()) {
    case 0:
    day = "Sunday";
    break;
case 1:
    day = "Monday";
    break;
case 2:
    day = "Tuesday";
    break;
case 3:
    day = "Wednesday";
    break;
case 4:
    day = "Thursday";
    break;
case 5:
    day = "Friday";
    break;
case 6:
    day = "Saturday";
}
    

  
}