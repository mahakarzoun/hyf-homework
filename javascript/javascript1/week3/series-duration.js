const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]

  function logOutSeriesText(seriesDurations) {
      let obj_1 = seriesDurations[1];
      const timeSpentOnObj_1 = (((obj_1.days)*24) + obj_1.hours + (obj_1.minutes * (1/60))) / (525949.2 * 80) * 100;
    if (obj_1.title === 'Game of thrones') 
      return  obj_1.title + ' took ' + timeSpentOnObj_1; 
  }
  
  logOutSeriesText(seriesDurations[1] = true); // logs out the text found above

