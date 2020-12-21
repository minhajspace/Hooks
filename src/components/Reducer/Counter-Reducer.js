import React,{useReducer} from 'react'
const initialState = 0 ; 
const reducer = (state,action)=>{
    switch(action){
        case 'increment':
        return state + 1 ;
       case 'decrement' : 
        return state - 1 ;
       case 'reset' :
        return state = 0 ;
        default :
        return state 
    }

}

const CounterReducer = () => {
  
    const [count , dispatch ] = useReducer(reducer,initialState)
    return (
        <div style={{marginRight:'auto',marginLeft:'auto',marginTop:'auto',marginBottom:'auto',}}>
            <h1>{count}</h1>
            <button onClick ={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick = {()=>dispatch('reset')}>Reset</button>
            
        </div>
    )
}

export default CounterReducer;
