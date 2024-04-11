import './App.css'
import { INITIAL_NUMBERS, INITIAL_OPERATIONS, INITIAL_BIG, INITIAL_CLEAR } from './constant'
import { SquareNum, SquareOp, SquareBig } from './component/Squares'
import { useState } from 'react'
import { History } from './component/History'
import { calculateString } from './logic/stringTransform'
import { saveScreenInStorage, saveOperationListInStorage, savePreResultInStorage, resetScreenInStorageFromStorage, resetOperationListFromStorage, resetPreResultInStorageFromStorage } from './logic/saveOperation'

function App() {
  const [screen, setScreen] = useState(() => {
    const screenFromStorage = window.localStorage.getItem('screen')
    if (screenFromStorage) return JSON.parse(screenFromStorage)
    return '0'
  })
  const [preResult, setPreResult] = useState(() => {
    const preResultFromStorage = window.localStorage.getItem('screen')
    if (preResultFromStorage) return JSON.parse(preResultFromStorage)
    return '0'
  })
  const [historyOperation, setHistoryOperation] = useState(() => {
    const historyListFromStorage = window.localStorage.getItem('historyList')
    if (historyListFromStorage) return JSON.parse(historyListFromStorage)
    return []
  })


  const handleKeyDelete = (event) => {
    if (event.key === 'Backspace') {
      handleDelete()
    }
  }

  const handleDelete = () => {

    if (screen.length === 1) {
      setScreen('0')
      setPreResult('0')
      resetScreenInStorageFromStorage()
      resetPreResultInStorageFromStorage()
    } else if (preResult === '0' && screen !== 0) {
      setScreen('0')
      setPreResult('0')
      saveScreenInStorage('0')
      savePreResultInStorage('0')
    } else  {
      const newString = screen.slice(0 ,-1)
      setScreen(newString)
      setPreResult(calculateString(newString))
      saveScreenInStorage(newString)
      savePreResultInStorage(calculateString(newString))
    }

  }

  const handleClear = () => {
    setScreen('0')
    setPreResult('0')
    resetScreenInStorageFromStorage()
    resetPreResultInStorageFromStorage()
  }

  const handleEqual = () => {
    const newScreen = preResult
    const historyOp = [...historyOperation, screen + ' = ' + preResult]
    setHistoryOperation(historyOp)
    saveOperationListInStorage(historyOp)
    setScreen(newScreen)
    saveScreenInStorage(newScreen)
    setPreResult('0')
    savePreResultInStorage('0')
  }

  const handleScreen = (ch) => {

    // Logica de inputs
    if (ch === '.') { //Logica si el usuario ingresa un decimal
      const newScreen = screen + ch
      setScreen(newScreen)
      saveScreenInStorage(newScreen)

    } else if(screen === '0' && !isNaN(ch)) { //Logica si tenemos un 0 inicial
      setScreen(ch.toString())
      saveScreenInStorage(ch.toString())
      setPreResult(ch.toString())
      savePreResultInStorage(ch.toString())

    } else if(!isNaN(ch)) { // Logica para concatenar numeros
      const newScreen = screen + ch.toString()
      setScreen(newScreen);
      saveScreenInStorage(newScreen)
      setPreResult(calculateString(newScreen))
      savePreResultInStorage(newScreen)
    } else if (isNaN(ch) && !isNaN(screen.charAt(screen.length - 1))) {
      const newScreen = screen + ch.toString()
      setScreen(newScreen);
      saveScreenInStorage(newScreen)
      setPreResult(calculateString(newScreen))
      savePreResultInStorage(newScreen)
    }

  };

  const toggleResetHistory = () => {
    resetOperationListFromStorage();
    setHistoryOperation([])
  }

  console.log(historyOperation)
  document.addEventListener('keyup', handleKeyDelete)

  return (
    <>
      <main>
        <h1>Calculadora Funcional</h1>
        <p><strong>Bienvenido a mi Calculadora, disfruta haciendo y guardando todos tus calculos!</strong></p>
        <div className="calculator">
          <div className="screenResult">
            <div className="screenOp">
              <p className='result'><strong>{screen}</strong></p>
              <div className="subtle-red">
                <button className='deleteButton' onClick={handleDelete}>
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
        {historyOperation.length > 0 && (
          <>
            <h3><strong>Historial de Operaciones</strong></h3>
          </>
          )}
          <div className="historyList">
            {historyOperation.map((hist, index) => {
              return <History key={index} operation={hist}/>
            })}
          </div>
          {historyOperation.length > 0 && (
            <>
              <button onClick={toggleResetHistory} className="resetHistory">Borrar Historial de Calculo</button>
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default App
