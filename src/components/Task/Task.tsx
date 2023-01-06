import { CheckCircle, Trash, Circle } from 'phosphor-react'
import React from 'react'
import styles from './Task.module.css'
import { ITask } from '../../App'

interface Props{
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onCheckTask: (taskId: string) => void;
}

function Task({task, onDeleteTask, onCheckTask} : Props) {

  return (
    <div className={styles.task}>
      <button className={styles.check} onClick={() => onCheckTask(task.id)}>
        {task.isCompleted ? <CheckCircle size={30}/> : <Circle size={32} />}
      </button>
      <p className={task.isCompleted ? styles.textUnderline : "" }>
        {task.content}
      </p>
      <button className={styles.trash} onClick={() => onDeleteTask(task.id)}>
        <Trash size={18}/>
      </button>
    </div>
  )
}

export default Task
