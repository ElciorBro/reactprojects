/* eslint-disable react/prop-types */
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

export const SquareBig = ({ children, handleScreen, handleEqual }) => {

  const handleClick = () => {
    if (children === 0) {
      handleScreen(children)
    }

    if (children === '=') {
      handleEqual(children)
    }
  }
  
  console.log("haz presionado", children)

  return (
    <div onClick={handleClick} className="bigSquare">
      {children}
    </div>
  )
}


