'use strict';
const fs = require('fs');

const today = new Date();
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
const todayStandart = today.toLocaleString('ru-Ru', options);


function deleteByTime() {
  const dataCheckRead = fs.readFileSync('dataForDeleteByTime.json', 'utf8');
  const HomeWorkToDo = JSON.parse(dataCheckRead);
  console.log(HomeWorkToDo);
  let subj;
  let tasksUpToDate;
  for (subj in HomeWorkToDo) {
    tasksUpToDate = HomeWorkToDo[subj].filter((item) => {
      if (item['deadline'] >= todayStandart) return (item);
    });
    HomeWorkToDo[subj] = tasksUpToDate;
  }
  console.log(HomeWorkToDo);
  fs.writeFileSync('dataForDeleteByTime.json', JSON.stringify(HomeWorkToDo));
}

deleteByTime();
