import './App.css'
import { INITIAL_NUMBERS, INITIAL_OPERATIONS, INITIAL_BIG, INITIAL_CLEAR } from './constant'
import { SquareNum, SquareOp, SquareBig } from './component/Squares'
import { useState } from 'react'

function App() {
  const [screen, setScreen] = useState('0')
  const [preResult, setPreResult] = useState('0')
  // const [historyOperation, setHistoryOperation] = useState([])


  const modifyPreResult = (ch, stringToEval) => {
    const operation = stringToEval + ch.toString()

    try {
        const result = eval(operation)
        return result
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleEqual = () => {
    const newScreen = preResult
    setPreResult('0')
    setScreen(newScreen)
  }

  const handleScreen = (ch) => {

    setScreen((prevScreen) => {
      const newScreen = prevScreen === '0' ? ch.toString() : prevScreen + ch.toString()
      return newScreen;
    });
    const newPreResult = modifyPreResult(ch, screen)
    setPreResult(newPreResult)

  };

  return (
    <>
      <main>
        <h1>React Calculator</h1>
        <div className="calculator">
          <div className="screenResult">
            <div className="screenOp">
              <p className='result'><strong>{screen}</strong></p>
              <div className="subtle-red">{INITIAL_CLEAR[1]}</div>
            </div>
            <div className="preResult">{preResult}</div>
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
                <SquareBig key={index} handleScreen={handleScreen} handleEqual={handleEqual}>{op}</SquareBig>
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
