import React,{useReducer} from 'react'

const intialState = {
    firstCounter : 0 ,
    secondCounter: 10 
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'incerment':
            return {...state , firstCounter : state.firstCounter + 1}
        case 'decrement':
            return {...state,firstCounter : state.firstCounter - 1 }
        case 'increment-start-with-10':
            return {...state , secondCounter:state.secondCounter + 1}
        case 'decrement-start-with-10':
            return {...state ,secondCounter:state.secondCounter - 1 }
        case 'reset':
            return intialState
            default: 
            return state  ; 
    }   

}


const TwoCounterUsingSameState = () => {
    const [count,dispatch ] =useReducer(reducer,intialState)

    return (
        <div>
            <div>
            <h1>First Counter {count.firstCounter}</h1>
            <button onClick={()=>{dispatch({type:'incerment'})}}>increment</button>
                <button onClick={() => { dispatch({ type:'decrement'}) }}>decrement</button>
            </div>
                <hr/>
            <div>
                <button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
            </div>
            
            <hr/>
            <div>
             <h1>Second Counter  {count.secondCounter}</h1>
           
            <button onClick={()=>{dispatch({type:'increment-start-with-10'})}}>increment start with 10 </button>
            <button onClick={()=>{dispatch({type:'decrement-start-with-10'})}}>decrement start with 10 </button>
            </div>


            
        </div>
    )
}

export default TwoCounterUsingSameState
