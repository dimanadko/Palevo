const fs = require('fs');

const today = new Date();
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
const todayStandart = today.toLocaleString('ru-Ru', options);

function CheckDate(index, item) {
  if (item['deadline'] > todayStandart) return item;
}

function deleteByTime() {
  const dataCheckRead = fs.readFileSync('DataForDeleteByTime.json','utf8');
  const HomeWorkToDo = JSON.parse(dataCheckRead);
  console.log(HomeWorkToDo);
  let subj;
  let HomeWorkUpToDate;
  for (subj in HomeWorkToDo) {
    tasksUpToDate = HomeWorkToDo[subj].filter((item) => {if (item['deadline'] >= todayStandart)return(item)})
    HomeWorkToDo[subj] = tasksUpToDate;
    // if (HomeWorkToDo[subj]['deadline'] >= todayStandart) {
    //   console.log();

  //   console.log(subj.filter(CheckDate(index, item)));
  }
  console.log(HomeWorkToDo);
  fs.writeFileSync('DataForDeleteByTime.json', JSON.stringify(HomeWorkToDo))
 }

deleteByTime();
