const activities = [];
let date = new Date();
let day = date.getDate();
let months = date.getMonth() + 1;
let year = date.getFullYear();

function getSum (arr) {
  let counter = arr.reduce((a, b) => {
  return a + b 
})
return counter 
}

function getTime (arr){
  let time = getSum(arr)
  let hours = Math.floor(time / 60)
  let minuts = Math.round((time % 60) - hours) //
  const timeArr = [time,hours,minuts]
  return timeArr
}


function addActivity(activity,duration) {
  let data = `${day}-${months}-${year}`
  const obj = { "data": `${data}`, "activity": `${activity}`, "duration": duration }
  activities.push(obj)
  return obj
}

function showStatus(date) {
  // check if date is there 
  const filteredArr = activities.filter(obj => obj.data === date)
  const mapped = filteredArr.map(obj => obj.duration) // move to 38 ??
  if (filteredArr.length === 0) {
    console.log("no activities at this date")
  }
  else {
    // number of activity 
    const numOfActivities = filteredArr.length;
    if (numOfActivities > 0) { // but it shouldnt be in the first place sould i still have it 
      /*for (let i = 0; i < numOfActivities; i++) {
        sum = filteredArr[i].duration
        sum += sum*/
      let sumOfTime = getSum(mapped);
      let time = getTime(mapped);

      if (sumOfTime > 240) {
        console.log("You have reached your limit, no more smartphoning for you!")
      }
      else if (60 < sumOfTime && sumOfTime <= 240) {
        console.log(`You have added ${numOfActivities} activities.They amount to ${time[1]} h and ${time[2]} min of usage`)
      } else {
        console.log(`You have added ${numOfActivities} activities.They amount to ${time[0]} min of usage`)
      }
    }
  }
}

function mostTime () {
// declare an obj with act as key and 8add it as a value to keys  map()
let arrOfActivities = activities.filter(function (obj) {
   if (obj.activity.toLowerCase() !== obj.activity)
return obj})/*.map(function (obj) {
  obj = {`${obj.activity}: ${getTime(obj.activity)}`}
})*/
console.log(arrOfActivities)

// use the same func to show status to sum thetime .
// return the key with the heighst value 
}

// or map to loercae then gettime(activity)

addActivity('youtube', 30);
addActivity('Youtube', 40);
addActivity('Facebook', 20);
console.log(showStatus('21-2-2021'));
 mostTime () 

