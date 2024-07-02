"use client"
import React, { useState } from 'react'

const Calculator:React.FC = () => {
    // calculator: useState to set the expression
    const [expression, setExpression] = useState("")
    // calculator: handleButtonClick function that takes a value of string and sets the expression
    const handleButtonClick = (value:string)=>{
        setExpression((prevExpression)=> prevExpression + value)
    }
    // calculator: handleCalculate function that tries to evaluate the expression and sets the expression to the result.
    const handleCalculate = () => {
        try {
            setExpression(eval(expression))
        } catch (error) {
            setExpression('Error')
        }
    }
    // calculator: handleClear function that sets the expression to an empty string
    const handleClear = () => {
        setExpression("")
    }
  return (
    // calculator: aligning the calculator in the center of the screen
    <div className='calculator-alignment'>
        {/* calculator: calculator container*/}
        <div className='calculator'>
            {/* calculator: shows calculation. READ ONLY! */}
            <input
                type='text'
                className='calculator-display'
                value={expression}
                readOnly
            />
            {/* calculator: buttons grid */}
            <div className='calculator-grid'>
                {/* calculator: maps over 7,8,9, and / . Takes a value and index.
                Passes in a key of index and onClick function that takes the value. */}
                {['7', '8', '9', '/'].map((value, index)=>(
                    <button
                        key={index}
                        className=''
                        onClick={()=>handleButtonClick(value)}>
                        {value}
                    </button>
                ))}
                {/* calculator: maps over 4,5,6, and *. Takes a value and index. Passes in a key of index and onClick function that takes the value. */}
                {['4', '5', '6', '*'].map((value, index)=>(
                    <button
                        key={index}
                        className=''
                        onClick={()=>handleButtonClick(value)}>
                        {value}
                    </button>
                ))}
                {/* calculator: maps over 1,2,3, and -. Takes a value and index. Passes in a key of index and onClick function that takes the value. */}
                {['1', '2', '3', '-'].map((value, index)=>(
                    <button
                        key={index}
                        className=''
                        onClick={()=>handleButtonClick(value)}>
                        {value}
                    </button>
                ))}
                {/* calculator: maps over 0,.,=, and +. Takes a value and index. Passes in a key of index and onClick function that takes the value. */}   
                {['0', '.', '=', '+'].map((value, index)=>(
                    <button
                        key={index}
                        className=''
                        onClick={()=>value === '=' ? handleCalculate() : handleButtonClick(value)}>
                        {value}
                    </button>
                ))}
            </div>
            {/* calculator: clear button */}
            <button
            className='calculator-clear'
            onClick={handleClear}
            >
                {/* calculator: sets clear button text */}
                <p className=''>Clear</p>
            </button>
        </div>
    </div>
  )
}

export default Calculator