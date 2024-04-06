/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import '../css/squares.css'


export const SquareNum = ( { children, handleScreen }) => {

    const handleClick = () => {
      console.log("haz presionado", children)
      handleScreen(children)
    }
  
    return (
      <div onClick={handleClick} className="number">
        {children}
      </div>
    )
}

export const SquareOp = ( { children, handleScreen }) => {

  const handleClick = () => {
    console.log("haz presionado", children)
    handleScreen(children)
  }

  return (
    <div onClick={handleClick} className="operator">
      {children}
    </div>
  )
}

export const SquareBig = ({ children, handleScreen, handleEqual , handleClear }) => {
  const [className, setClassName] = useState('normalSquare')

  useEffect(() => {
    if (children === '=' || children === 'CLEAR') {
      setClassName('bigSquare');
    } else {
      setClassName('normalSquare');
    }
  }, [children]);



  const handleClick = () => {
    if (children === 0, children === '.') {
      handleScreen(children)
    } else if (children === '=') {
      handleEqual(children)
    } else if (children === 'CLEAR') {
      handleClear()
    }
  }
  
  console.log("haz presionado", children)

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


