import React,{useState,useMemo} from 'react'


const App = () => {
    const [count , setCount] = useState(0)
    const [count2,setCount2]  = useState(0)

    const handleIncrement = () =>{
     setCount(count + 1 )
}
    const handleDecrement = () => {
        setCount2(count2 - 1)
    }
   
   const isEven =  useMemo = (() => {
            let i = 0;
            while (i < 20000000000) i++
            return count % 2 === 0 
    },[count])
    
    return (
        <div>
            <button onClick={handleIncrement}>Increment {count}</button>
            <span>{isEven ? 'even':'odd'}</span>
            <br/>
            <button onClick={handleDecrement}>Decrement {count2}</button>
        </div>
    )
}

export default App
