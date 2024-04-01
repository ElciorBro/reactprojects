import './App.css'
import { AddTask } from './component/addTask'

// export const AddTask = () => {
//   return (
//       <>
//           <h2>Add your task here</h2>
//           <input type="text" placeholder="Add Task Here"/>
//       </>
//   )
// }

function App() {

  return (
    <>
      <main>
        <h1 className='title'>TASK LIST</h1>
        <div className="taskInput">
          <AddTask/>
        </div>
      </main>
    </>
  )
}

export default App
