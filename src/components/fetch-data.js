import React,{useState,useEffect} from 'react';
import axios from 'axios';

const FetchData = ()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").
        then((res)=>{
         console.log(res)
         setData(res.data)
        }).catch((e)=>{
      console.log(e)
        })
    },[])
    return (
        <div>
         {data.map((value)=>{
           return <div id={value.id}><img src={value.url}></img><br/></div>
         })}
        </div>
    )
}
export default FetchData ;