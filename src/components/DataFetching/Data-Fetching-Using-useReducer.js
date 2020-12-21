import React,{useReducer,useEffect} from 'react'
import axios from 'axios';


const initalState = {
    post:{},
    error:'',
    loding:true 
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCESSFULL':
            return { error:'',
            loding:false,
            post:action.payload
            }
        case 'FETCH_UNSUCESSFULL':
            return{
                loding:true,
                error:'something went wrong',
                post:{}
            }
    }

}

const DataFetchingUsinguseReducer = () => {
    const [state,dispatch] =useReducer(reducer,initalState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/2').then((res)=>{
            dispatch({ type:'FETCH_SUCESSFULL',payload:res.data})
        }).catch(()=>{
            dispatch({type:'FETCH_UNSUCESSFULL'})
        })
    },[])


    return (
        <div>
            <h1>{state.error ? 'loding':state.post.title}</h1>
            <h1>{state.loding ?  state.error:null}</h1>
        </div>
    )
}

export default DataFetchingUsinguseReducer
