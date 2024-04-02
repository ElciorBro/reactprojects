/* eslint-disable react/prop-types */
import './App.css'
import './css/addTask.css'
import { useState } from 'react'
import { saveList, resetList, removeItems } from './logic/storage'


export const AddTask = ({ handleTask }) => {
  const [task, setTask] = useState('')

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const handleSubmit = () => {
    handleTask(task)
    setTask('')
  }

  return (
    <>
      <div className="content">
          <h2>Agrega una Tarea pendiente Aquí</h2>
          <p>
              Agrega todas las tareas que necesites y luego ve marcandolas
              a medida que vayas completando!
          </p>
          <input onChange={handleChange} type="text" value={task} placeholder="Tu tarea aqui"/>
          <button onClick={handleSubmit}>Enviar</button>
      </div>
    </>
  )
}

function App() {
  
  const [taskList, setTaskList] = useState(() => {
    const taskListFromStorage = window.localStorage.getItem('taskList')
    if (taskListFromStorage) return JSON.parse(taskListFromStorage)
    return []
  })
  // const [selectedIndexes, setSelectedIndexes] = useState([])

  console.log(taskList)

  const handleTask = (task) => {
    const newTaskList = [...taskList, task]
    setTaskList(newTaskList)
    saveList(newTaskList)
  }


  const handleResetList = () => {
    resetList()
    setTaskList([])
  }


  return (
    <>
      <main>
        <h1 className='title'>TASK LIST</h1>
        <div className="taskInput">
          <AddTask handleTask={handleTask}/>
        </div>

        <div className="taskList">
          {taskList.map((task, index) => (
            <div key={index} className="taskContainer">
              <p className='taskText'>{task}</p>
              <input 
                className='taskChackbox' 
                type="checkbox" value={index} 
              />
            </div>
          ))}
        </div>

        <div className="configButtons">
          {taskList.length > 0 && (
            <>
              <button onClick={handleResetList}>Borrar Lista</button>
              <button >Borrar Seleccionados</button>
            </>            
          )}
        </div>
      </main>
    </>
  )
}

export default App
