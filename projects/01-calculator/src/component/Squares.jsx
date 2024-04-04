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

export const SquareBig = ({ children }) => {

  const handleClick = () => {
    console.log("has presionado", children)
  }

  return (
    <div onClick={handleClick} className="bigSquare">
      {children}
    </div>
  )
}


