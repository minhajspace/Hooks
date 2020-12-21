import React,{useContext} from 'react'
import {CountContext} from './app'

const ComponentF = () => {
    const countContext =useContext(CountContext)
    return (
        <div>
            <div>
                <h1>Component F</h1>
                <button onClick={() => { countContext.countDispatch('increment') }}>increment</button>
                <button onClick={() => { countContext.countDispatch('decrement') }}>decrement</button>
                <button onClick={() => { countContext.countDispatch('reset') }}>reset</button>

            </div>
        </div>
    )
}

export default ComponentF
