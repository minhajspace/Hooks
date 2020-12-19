import React,{useEffect,useState}from 'react'
import axios from 'axios';


const  Indivisualdatafetch =()=> {
    const [inputData,setInputData] = useState(1)
    const [mainData , setMainData] =useState([])
    useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/posts/${inputData}`).then((res)=>{
            console.log(res)
         setMainData(res.data)
        }).then((e)=>{
            console.log(e)
        })
       
    },[inputData])

   
    return (
        <div>
            <input type="text" value={inputData} onChange={(e)=>{setInputData(e.target.value)}} ></input>
            <h1>{mainData.body}</h1>
        </div>
    )
}

export default Indivisualdatafetch
