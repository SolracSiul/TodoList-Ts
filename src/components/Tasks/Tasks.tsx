import React from 'react'
import Task from '../Task/Task'
import styles from './Tasks.module.css'
import { ITask } from '../../App'
import { Note } from 'phosphor-react'
interface Props{
    tasks: ITask[];    
    onDeleteTask: (taskId: string) => void;
    onCheckTask: (taskId: string) => void;
}


function Tasks({tasks, onDeleteTask, onCheckTask}: Props) {
    const arrayLength = tasks.length;
    const completas = tasks.filter((task) => task.isCompleted).length;
  return (
    <div className={styles.tasks}>
        <header className={styles.header}>
            <div>
                <p>Tarefas Criadas</p>
                <span>{arrayLength}</span>
            </div>
            <div>
                <p className={styles.purple}>Concluidas</p>
                <span>{completas} de {arrayLength}</span>
            </div>
        </header>
        <div className={styles.list}>
            {tasks.map((task) =>(
                <Task key ={task.id} task={task} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask}/>
            ))
            }
            {tasks.length <= 0 && (
            <section className={styles.noTask}>
                <Note size={90}/>
                <h2>Você ainda não tem tarefas cadastradas</h2>
                <span>Crie Tarefas e organize seus itens a fazer</span>
            </section>    
                
            )}
        </div>
    </div>
  )
}

export default Tasks
