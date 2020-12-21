import React,{useState,useEffect} from 'react'
import axios from 'axios'


const DataFetchingUsinguseState = () => {
    const [loding,setLoding] =useState(true);
    const [error,setError] = useState('')
    const [post,setPost]=useState({});
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
        
        setPost(res.data)
        setError('')
        setLoding(false)
        console.log(post.data)
      }).catch ((e)=>{
        setPost({})
        setLoding(true)
        setError('something went wrong')
      })
    },[])

    return (
        <div>
            <h1>{post ? post.title :'loding'}</h1>
            <h1>{error ? error:null}</h1>
            
        </div>
    )
}

export default DataFetchingUsinguseState ;
