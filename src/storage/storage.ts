const BOARDS_KEY = 'boards';
const TASKS_KEY = 'tasks';
const SUBTASKS_KEY = 'subtasks';
const TASKER_KEY = 'tasker';


function setInitialData() {
    localStorage.setItem(TASKER_KEY, JSON.stringify({  boards: [],tasks: [], subtasks: []}))
}

function getAllData() {    
  const data = JSON.parse(localStorage.getItem(TASKER_KEY) as string);
  if(!data) {
    setInitialData();
}
  return JSON.parse(localStorage.getItem(TASKER_KEY) as string);
}

function getItemList(key: string) {
  const data = getAllData()
  return data[key];
}

function setItem(key: string, item: any) {
  const allData =  getAllData();
  const newList = [...allData[key], item]
  localStorage.setItem(TASKER_KEY, JSON.stringify({...allData,[key]: newList}) as string)
}
export const Storage = {
  getAllData,
  getItemList,
  setItem,
  BOARDS_KEY,
  TASKER_KEY,
  SUBTASKS_KEY,
  TASKS_KEY,
};
