import React, {useState,useEffect} from 'react'

const Counter = () => {
 
    let [isCount, setCount]= useState(0)
    let [isCounter, setCounter]= useState(0)
    
    const incrementCount = () => {
        // setCount(isCount + 1)
        setCount((prevC)=> prevC+1)
    }
    
    const decrementCount = () => {
        // setCount(isCount - 1)
        if (isCount > 0) {
            
            setCount((prevC)=> prevC-1)
        }
    }


    const incrementCounter = () => {
        // setCount(isCount + 1)
        setCounter((prevC)=> prevC+1)
    }
    
    const decrementCounter = () => {
        // setCount(isCount - 1)
        if (isCounter > 0) {
            setCounter((prevC)=> prevC-1)
        }
    }

    // useEffect(()=>{
    //     setCount((prevC)=> prevC+1)
    // },[setCount])

    useEffect(() => {
        console.log('Component re-rendered');
      }, [isCount, isCounter]); // Dependency array with state variables
    // [] only first time render

  return (
    <div>
      <h3>Count: {isCount}</h3>
      <button onClick={incrementCount}>+1Count</button>
      <button onClick={decrementCount}>-1Count</button>
      <h3>Count: {isCounter}</h3>
      <button onClick={incrementCounter}>+1Counter</button>
      <button onClick={decrementCounter}>-1Counter</button>
    </div>
  )
}

export default Counter

// rendering process first time render thenn re-render