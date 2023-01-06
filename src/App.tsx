import { useState } from 'react'
import '../src/assets/styles/global.css'
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks'

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([{
    id: '1',
    content: 'Hello World',
    isCompleted: true,
  },
  {
    id: '2',
    content: 'Hello World',
    isCompleted: false,
  }
])
  function AddTask(taskContent: string){
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: taskContent,
        isCompleted: false
      }
    ]);
  }
  function deleteTask(taskId: string){
    const newTasks = tasks.filter((task) => task.id  != taskId)
    setTasks(newTasks)
  }
  function checkTask(taskId: string){
    const newTasksCheck = tasks.map((task) =>{
      if(task.id == taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTasksCheck)
  }
  return (
    <>
      <Header onAddTask={AddTask}/>
      <Tasks
      tasks={tasks} onDeleteTask={deleteTask} onCheckTask={checkTask}/>
    </>
  )
}

export default App
