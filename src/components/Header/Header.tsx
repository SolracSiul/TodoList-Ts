import React, { ChangeEvent, FormEvent, useState } from 'react'
import TodoLogo from '../../assets/Logo.svg'
import styles from './Header.module.css'
import { PlusCircle } from 'phosphor-react'

interface Props{
  onAddTask: (taskContent: string) => void;
}

function Header({onAddTask}: Props) {
  const [texto, setTexto] = useState("")

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    onAddTask(texto)
    setTexto('')
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
    setTexto(event.target.value)
  }
  return (
    <header className={styles.header}>
        <img src={TodoLogo}/>
        <form className={styles.taskInput} onSubmit={handleSubmit}>
            <input 
            placeholder="Adicione sua nova Task" onChange={onChangeTitle}
            value={texto}/>
            <button>Criar
            <PlusCircle size={18} />

            </button>
        </form>
    </header>
  )
}

export default Header
