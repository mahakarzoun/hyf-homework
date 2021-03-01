const activities = [];
let date = new Date();
let day = date.getDate();
let months = date.getMonth() + 1;
let year = date.getFullYear();

function getSum(arr) {
  let counter = arr.reduce((a, b) => {
    return a + b
  })
  return counter
}

function getTime(time) {
  let hours = Math.floor(time / 60)
  let minuts = time % 60
  const timeArr = [time, hours, minuts]
  return timeArr
}


function addActivity(activity, duration) {
  if (typeof activity != 'string' || typeof duration != 'number')
    throw new Error('Illegal Argument Exception');

  let date = `${day}-${months}-${year}`
  const obj = { 'date': `${date}`, 'activity': `${activity}`, 'duration': duration }
  activities.push(obj)
  return obj
}

function showStatus(date) {
  if (activities.length === 0) {
    return 'Add some activities before calling showStatus';
  }
  // check if date is there 
  const filteredArr = activities.filter(obj => obj.date === date)
  if (filteredArr.length === 0) {
    console.log('no activities at this date')
    return;
  }
  const mapped = filteredArr.map(obj => obj.duration)
  // number of activity 
  const numOfActivities = filteredArr.length;
  if (numOfActivities > 0) {
    let sumOfTime = getSum(mapped);
    let time = getTime(sumOfTime);

    if (sumOfTime > 240) {
      return 'You have reached your limit, no more smartphoning for you!'
    }
    if (60 < sumOfTime && sumOfTime <= 240) {
      return `You have added ${numOfActivities} activities.They amount to ${time[1]} h and ${time[2]} min of usage`
    }
    return `You have added ${numOfActivities} activities.They amount to ${time[0]} min of usage`
  }
}


function mostTime(array) {
  const combinedActivities = array.reduce((result, act) => {
    if (act.hasOwnProperty('activity') && act.hasOwnProperty('duration')) {
      const activity = result.find(a => a.activity === act.activity.toLowerCase())
      if (activity)
        activity.duration += act.duration;
      else
        result.push({ activity: act.activity.toLowerCase(), duration: act.duration })
    }
    return result;
  }, []);
  if (combinedActivities.length === 0)
    return 'no valid activity was found'
  //mda =maxDurationActivity
  const mda = combinedActivities.reduce((max, act) =>
    max.duration > act.duration ? max : act
    , combinedActivities[0])
  return `You has spent the most time on ${mda.activity} with ${mda.duration} m`;
}
console.log(showStatus('1-3-2021'))
addActivity('Youtube', 40);
addActivity('Facebook', 20);
addActivity('Facebook', 20);
console.log(showStatus('1-3-2021'))
console.log(activities)
console.log(mostTime(activities))