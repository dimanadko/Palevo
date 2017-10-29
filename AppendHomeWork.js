'use strict';

const fs = require('fs');

function apendHomeWork(subj, task, deadline) {

  const data_read = fs.readFileSync('Data.json', 'utf8');
  const TasksToDo = JSON.parse(data_read);

  if (!Object.keys(TasksToDo).includes(subj))
    throw ('No such subject exist');

  if (deadline === '') deadline = nextClassIs(subj);

  TasksToDo[subj].push({ 'task': task, 'deadline': deadline });
  fs.writeFileSync('Data.json', JSON.stringify(TasksToDo));
  console.log(TasksToDo);
}

function nextClassIs(subj) {
  const today = new Date();
  const weekday = today.getDay();
  const TimeTable = JSON.parse(fs.readFileSync('Timetable.json', 'utf8'));

  let i = 0;
  let days_to_prepare;
  let breaker = 'False';
  let k = 0;

  while (breaker === 'False') {
    k = weekday + i;
    if (k > 6) k=k-7;
    let j = 0;
    for (j of TimeTable[k])
      if (subj === j) {
        days_to_prepare = i;
        breaker = 'True';
      }
    ++i;
  }
  const nextClass = new Date();
  nextClass.setDate(today.getDate() + days_to_prepare);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  console.log(nextClass.toLocaleString('ru-Ru', options));
  return nextClass.toLocaleString('ru-Ru', options);
}


apendHomeWork('Dm', 'p3 #71', '');
