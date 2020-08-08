const weekDays = ['monday', 'tuesday', 'thursday', 'wednesday',
 'thursday', 'friday', 'saturday', 'sunday'];
const today = new Date();
const day = today.getDay()
let numDaysToEvent;
function getEventWeekDay (numDaysToEvent) {
 const dayOfTheEvent =( day + numDaysToEvent) % 7 ;
  return weekDays[dayOfTheEvent];
}
console.log(getEventWeekDay(4));
console.log(getEventWeekDay(9));
