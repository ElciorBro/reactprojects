/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import '../css/squares.css'


export const SquareNum = ( { children, handleScreen }) => {


  const handleKeyPress = (event) => {
    if (event.key === children.toString()) {
      handleClick()
    }
  }

  const handleClick = () => {
    console.log("haz presionado", children)
    handleScreen(children)
  }

  document.addEventListener('keyup', handleKeyPress)


  return (
    <div onClick={handleClick} className="number">
      {children}
    </div>
  )
}

export const SquareOp = ( { children, handleScreen }) => {

  const handleKeyPress = (event) => {
    if (event.key === children) {
      handleClick()
    }
  }

  const handleClick = () => {
    console.log("haz presionado", children)
      handleScreen(children)
    }

  document.addEventListener('keyup', handleKeyPress)

  

  return (
    <div onClick={handleClick} className="operator">
      {children}
    </div>
  )
}

export const SquareBig = ({ children, handleScreen, handleEqual , handleClear }) => {
  const [className, setClassName] = useState('normalSquare')

  const handleKeyPress = (event) => {
    if (event.key === '0') {
      handleClick()
    } else if (event.key === 'Enter') {
      handleEqual()
    }
  }

  useEffect(() => {
    if (children === '=' || children === 'CLEAR') {
      setClassName('bigSquare');
    } else {
      setClassName('normalSquare');
    }
  }, [children]);



  const handleClick = () => {
    if (children === 0 || children === '.') {
      handleScreen(children)
    } else if (children === '=') {
      handleEqual(children)
    } else if (children === 'CLEAR') {
      handleClear()
    }
    console.log("haz presionado", children)
  }
  
  document.addEventListener('keyup', handleKeyPress)

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


