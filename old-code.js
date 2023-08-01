const staticTasks = [
  {
    name: 'trash',
    description: "Tirar o lixo (segunda, quarta, sexta)"
  },
  {
    name: 'filter',
    description: "Encher o filtro"
  },
];

const longTask = [
  {
    name: 'cleanFilter',
    description: "Limpar o filtro",
  },
];

const dynamicTasks = [
  {
    name: 'house',
    description: "Limpeza da casa"
  },
  {
    name: 'bathroom',
    description: "Limpeza do banheiro"
  },
  {
    name: 'tablecloth',
    description: "Lavar a toalha de mesa"
  }
];

/*const people = ["Manoel", "Inacio","Geovane"]; */
const DAY_ONE = new Date('07/31/2023');//SEGUNDA-FEIRA
const TODAY = new Date('08/31/2023');
console.log(DAY_ONE)
console.log(TODAY)

const Difference_In_Time = TODAY.getTime() - DAY_ONE.getTime();
      
const NUMBER_DAYS = Difference_In_Time / (1000 * 3600 * 24);

const NUMBER_WEEKS = NUMBER_DAYS/7;
console.log(NUMBER_WEEKS)

let resultTasks = [
  {
    name: "Inácio",
  },
  {
    name: "Geovane",
  },
  {
    name: "Manoel",
  },
]
let number_owner = 0;
let start_taskId = 0;
let count_taskId = 0;
for(let i=0; i<NUMBER_WEEKS; i++){
  for(let j=0; j<3; j++) {
    if(j===2){
      if(count_taskId<=0){
        start_taskId = 2;
      }else {
        start_taskId--;
        if(start_taskId<0) {
          start_taskId = 2
        }
      }
  
      if(count_taskId>=2){
        count_taskId = 0;
      }else {
        count_taskId++;
      }
    }else {
      if(j===0) {
        count_taskId = start_taskId;
      } else {
        if(count_taskId>=2){
          count_taskId = 0;
        }else {
          count_taskId++;
        }
      }
    } 
    console.log('count_taskId:', count_taskId);
    resultTasks[j].task = dynamicTasks[count_taskId].description;
    resultTasks[j].taskId = count_taskId;
  }
}
console.log(resultTasks)


let dynamicTasksStr = '';
for(let i=0; i<3; i++) {
  //dynamicTasksStr = `${dynamicTasksStr}<li>${people[number_owner]}: ${dynamicTasks[count_taskId].description}</li>`
  dynamicTasksStr = `${dynamicTasksStr}<li>${resultTasks[i].name}: ${resultTasks[i].task}</li>`



/*

  finalTasks.push({
    people: people[number_owner],
    peopleId: number_owner,
    task: dynamicTasks[count_taskId].description,
    taskId: count_taskId
  })
  if(count_taskId>=2){
    count_taskId = 0;
  }else {
    count_taskId++;
  }

  if(number_owner>=2){
    number_owner = 0;
  }else {
    number_owner++;
  }
*/
}
console.log(dynamicTasksStr)
document.getElementById("dynamicTasks").innerHTML = dynamicTasksStr

const peopleFinalTask = resultTasks.find(taskObject => taskObject.taskId === 2);
let initialTasksStr = `${peopleFinalTask.name}: `;
console.log(initialTasksStr)
let staticTasksStr = '';

staticTasks.map((task, index) => {
  staticTasksStr = `${(staticTasks.length-1===index) ? `${staticTasksStr}${task.description}.` : `${staticTasksStr}${task.description} + `}`
});

document.getElementById("staticTasks").innerHTML = `${initialTasksStr}${staticTasksStr}`;
