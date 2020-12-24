import React,{useState} from 'react'


const App = () => {
    const [count , setCount] = useState(0)
    const handleIncrement = () =>{
     setCount(count + 1 )
}
    const handleDecrement = () => {
        setCount(count - 1)
    }
    const isEven = () =>{
        count % 2 ===0 
    }
    return (
        <div>
            <button onClick={handleIncrement}>Increment {count}</button>
            <button onClick={handleDecrement}>Decrement {count}</button>
        </div>
    )
}

export default App
