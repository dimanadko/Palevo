const readline = require('readline')
const fs = require('fs')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', function (input){
  let Subject = input.split('; ')[0];
  let Task = input.split('; ')[1];
  let Deadline = input.split('; ')[2];
  ApendHomeWork(Subject,Task,Deadline);
  rl.close();
});

function DataFileOpen(subj,task,deadline) {
  fs.open ('Data.json', 'r', 7777, );
  // TasksToDo = json.parse(dataRead)
  // console.log(dataRead);
  // console.log("1"+TasksToDo);

}
