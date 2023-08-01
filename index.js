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

const people = ["Geovane", "Manoel", "Inácio"];
const dynamicTasks = [
  {
    id: "bathroom",
    description: "Limpeza do banheiro"
  },
  {
    id: "house",
    description: "Limpeza da casa"
  },
  {
    id: "tablecloth",
    description: "Lavar a toalha de mesa"
  },
];

const DAY_ONE = new Date('07/30/2023');
const TODAY = new Date('08/21/2023');

const Difference_In_Time = TODAY.getTime() - DAY_ONE.getTime();
const NUMBER_DAYS = Difference_In_Time / (1000 * 3600 * 24);
const NUMBER_WEEKS = NUMBER_DAYS/7;

for(let i=0; i<NUMBER_WEEKS; i++){
  let removedObject = dynamicTasks.shift();
  dynamicTasks.push(removedObject);
}

let dynamicTasksStr = '';
for(let i=0; i<3; i++) {
  dynamicTasksStr = `${dynamicTasksStr}<li>${people[i]}: ${dynamicTasks[i].description}</li>`;
}
document.getElementById("dynamicTasks").innerHTML = dynamicTasksStr

const staticTaskIndex = dynamicTasks.findIndex( taskObject => taskObject.id === 'tablecloth');

let initialTasksStr = `${people[staticTaskIndex]}: `;
let staticTasksStr = '';

staticTasks.map((task, index) => {
  staticTasksStr = `${(staticTasks.length-1===index) ? `${staticTasksStr}${task.description}.` : `${staticTasksStr}${task.description} + `}`
});

document.getElementById("staticTasks").innerHTML = `${initialTasksStr}${staticTasksStr}`;
