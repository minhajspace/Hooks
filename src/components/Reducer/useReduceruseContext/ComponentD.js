import React,{useContext} from 'react'
import {CountContext} from './app';

const ComponentD = () => {
    const countContext = useContext(CountContext);
    return (
        <div>
            <div>
                <h1>Component D </h1>
                <button onClick={() => {countContext.countDispatch('increment') }}>increment</button>
                <button onClick={() => {countContext.countDispatch('decrement') }}>decrement</button>
                <button onClick={() => {countContext.countDispatch('reset') }}>reset</button>

            </div>
        </div>
    )
}

export default ComponentD
