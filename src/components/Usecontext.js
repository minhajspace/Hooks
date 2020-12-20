import React,{useState} from 'react'
import ComponentA from './ComponentA';

const Usecontext = () => {
    const [name ,setName] = useState("Minhaj ahmad khan")
    setTimeout(()=>{
        setName('Urooj ahmad')
    },2000)
    return (
        <div>
           <ComponentA name = {name}/>
        </div>
    )
}

export default Usecontext
