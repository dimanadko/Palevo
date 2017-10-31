'use strict';

const fs = require('fs');

function apendHomeWork(subj, task, deadline) {

  const dataRead = fs.readFileSync('data.json');
  const TasksToDo = JSON.parse(dataRead);

  if (!Object.keys(TasksToDo).includes(subj)) {
    throw new Error('No such subject exist');
  }

  if (!deadline) deadline = nextClassIs(subj);

  TasksToDo[subj].push({ task, deadline });
  fs.writeFileSync('data.json', JSON.stringify(TasksToDo));
  console.log(TasksToDo);
}

function nextClassIs(subj) {
  const today = new Date();
  const weekday = today.getDay();
  const TimeTable = JSON.parse(fs.readFileSync('timetable.json', 'utf8'));

  let i = 0;
  let daysToPrepare;
  let breaker = false;
  let currentDay;
  let currentSubject;

  while (breaker === false) {
    currentDay = (weekday + i) % 7;
    const dailyTimetable  = TimeTable[currentDay];
    for (currentSubject of dailyTimetable)
      if (subj === currentSubject) {
        daysToPrepare = i;
        breaker = true;
      }
    ++i;
  }
  const nextClass = new Date();
  nextClass.setDate(today.getDate() + daysToPrepare);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  console.log(nextClass.toLocaleString('ru-Ru', options));
  return nextClass.toLocaleString('ru-Ru', options);
}


apendHomeWork('Matan Lection', 'Dopishi etu Progu s norm datoy', '');
