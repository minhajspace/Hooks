import React,{useContext} from 'react'
import FirstName from './ContextApi'


const ComponentD = () => {

const firstname = useContext(FirstName);
console.log(firstname)
    return (
      
            <div style={{ margin: "100px" }}>
             {firstname}
             
            </div>
       
    )
}

export default ComponentD
