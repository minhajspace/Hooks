import React,{useReducer} from 'react'
const initalState = {
    firstCounter :  0 
} ; 
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
        return    {firstCounter : state.firstCounter + 1 };
        case 'decrement':
        return   {firstCounter : state.firstCounter - 1 } ;
        case 'reset' :
        return initalState ;
        default :
        return state ;
    }

}

const CounterTwo = () => {

    const  [count,dispatch]  = useReducer(reducer,initalState)
    console.log(count)

    return (
        <div>
            <h1>{count.firstCounter}</h1>
          <button onClick={()=>{ dispatch({type:'increment'})}}>increment</button>
          <button onClick = {()=>{dispatch({type:'decrement'})}}>decrement</button>
          <button onClick ={()=>{dispatch({type:'reset'})}}>reset</button>
            
        </div>
    )
}

export default CounterTwo
