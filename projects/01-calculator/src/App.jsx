import './App.css'
import { INITIAL_NUMBERS, INITIAL_OPERATIONS, INITIAL_BIG, INITIAL_CLEAR } from './constant'
import { SquareNum, SquareOp, SquareBig } from './component/Squares'
import { useState } from 'react'

function App() {
  const [screen, setScreen] = useState(0)

  const handleScreen = (ch) => {

    setScreen((prevScreen) => {
      return prevScreen == 0 && prevScreen.length < 2 ? ch : prevScreen.toString() + ch.toString();
    });
  };

  return (
    <>
      <main>
        <h1>React Calculator</h1>
        <div className="calculator">
          <div className="screenResult">
            <h2 className='result'><strong>{screen}</strong></h2>
            <p className="subtle-red">{INITIAL_CLEAR[1]}</p>
          </div>
          <div className="keyboard">
            <SquareBig>{INITIAL_CLEAR[0]}</SquareBig>
            <div className="squareNum numKey">
              {
                INITIAL_NUMBERS.map((num, index) => (
                  <SquareNum key={index} handleScreen={handleScreen}>{num}</SquareNum>
                ))
              }
            </div>
            {
              INITIAL_OPERATIONS.map((op, index) => (
                <SquareOp key={index} handleScreen={handleScreen}>{op}</SquareOp>
              ))
            }
            {
              INITIAL_BIG.map((op, index) => (
                <SquareBig key={index} >{op}</SquareBig>
              ))
            }
          </div>
        </div>
        <div className="history">
          <h3><strong>Historial de Operaciones</strong></h3>
        </div>
      </main>
    </>
  )
}

export default App
