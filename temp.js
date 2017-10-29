const fs = require('fs');

let subject = 'Histoty';

function NextClassIs(subj){
  let today = new Date();
  let weekday = today.getDay();
  let TimeTable = JSON.parse(fs.readFileSync('Timetable.json','utf8'));

  let i = 0;
  let days_to_prepare;
  let breaker = 'False';
  let k = 0;

  while (breaker === 'False')
    {
    k = weekday + i;
    if (k>6) {k=k-7};
    console.log(k);
    let j = 0;
    for (j of TimeTable[k])
      if (subj === j){
        days_to_prepare = i;
        breaker = 'True'
      }
      ++i;
    }
  let nextClass= new Date();
  nextClass.setDate(today.getDate() + days_to_prepare);
  console.log(days_to_prepare);
  console.log(today.toDateString());
  console.log(nextClass.toDateString());
}

NextClassIs(subject)
