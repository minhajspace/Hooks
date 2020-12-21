import React,{useReducer} from 'react'
const initalState = {
    firstCounter :  0 ,
    Name : "Minhaj ahmad khan"
} ; 
const reducer = (state,action) =>{
    console.log(state)
    switch(action.type){
        case 'increment':
        return    {firstCounter : state.firstCounter + action.value  };
        case 'decrement':
        return   {firstCounter : state.firstCounter - action.value } ;
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
          <button onClick={()=>{ dispatch({type:'increment',value: 1})}}>increment</button>
          <button onClick = {()=>{dispatch({type:'decrement' ,value : 1})}}>decrement</button>
          <button onClick ={()=>{dispatch({type:'reset' })}}>reset</button>
          <button onClick ={()=>{dispatch({type:'increment',value:5})}}>increment by 5 </button>
          <button onClick = {()=>{dispatch({type:'decrement', value:5})}}>decrement by 5 </button>
        </div>
    )
}

export default CounterTwo
