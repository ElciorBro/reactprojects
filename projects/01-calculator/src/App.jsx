import './App.css'
import { INITIAL_NUMBERS, INITIAL_OPERATIONS, INITIAL_BIG, INITIAL_CLEAR } from './constant'
import { SquareNum, SquareOp, SquareBig } from './component/Squares'
import { useState } from 'react'
import { History } from './component/History'
import { calculateString } from './logic/stringTransform'

function App() {
  const [screen, setScreen] = useState('0')
  const [preResult, setPreResult] = useState('0')
  const [historyOperation, setHistoryOperation] = useState([])


  const handleKeyDelete = (event) => {
    if (event.key === 'Backspace') {
      handleDelete()
    }
  }

  const handleDelete = () => {

    if (preResult.length === 1) {
      setScreen('0')
      setPreResult('0')
    } else if (preResult !== 0) {
      const newString = screen.slice(0 ,-1)
      setScreen(newString)
      setPreResult(calculateString(newString))
    }

  }

  const handleClear = () => {
    setScreen('0')
    setPreResult('0')
  }

  const handleEqual = () => {
    const newScreen = preResult
    setHistoryOperation([...historyOperation, screen + ' = ' + preResult])
    setPreResult('0')
    setScreen(newScreen)
  }

  const handleScreen = (ch) => {
    if (ch === '.') {
      const newScreen = screen + ch
      setScreen(newScreen)
    } else if(screen === '0') {
      setScreen(ch.toString())
      setPreResult(ch.toString())
    } else {
      const newScreen = screen + ch.toString()
      setScreen(newScreen);
      setPreResult(calculateString(newScreen))
    }

    document.addEventListener('keyup', handleKeyDelete)


  };

  return (
    <>
      <main>
        <h1>React Calculator</h1>
        <div className="calculator">
          <div className="screenResult">
            <div className="screenOp">
              <p className='result'><strong>{screen}</strong></p>
              <div className="subtle-red">
                <button onClick={handleDelete}>
                  {INITIAL_CLEAR[1]}
                </button>
              </div>
            </div>
            <div className="preResult">{preResult}</div>
          </div>
          <div className="keyboard">
            <SquareBig handleClear={handleClear}>{INITIAL_CLEAR[0]}</SquareBig>
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
          <div className="historyList">
            {historyOperation.map((hist, index) => {
              return <History key={index} operation={hist}/>
            })}
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App
