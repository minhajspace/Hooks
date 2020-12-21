import React,{useContext} from 'react'
import {CountContext} from './app'



const ComponentA = () => {
    const countContext =useContext(CountContext); 
    return (
        <div>
            <h1>Component A</h1>
            <button onClick={()=>{countContext.countDispatch('increment')}}>increment</button>
            <button onClick={()=>{countContext.countDispatch('decrement')}}>decrement</button>
           <button onClick={()=>{countContext.countDispatch('reset')}}>reset</button>
           
        </div>
    )
}

export default ComponentA
