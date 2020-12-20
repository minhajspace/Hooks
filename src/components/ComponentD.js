import React from 'react'
import FirstName from './ContextApi'

const ComponentD = () => {
    return (
      
            <div style={{ margin: "100px" }}>
             <FirstName.Consumer>
                {(value)=>{
                    return <div>{value}</div>
                }}
             </FirstName.Consumer>
             
            </div>
       
    )
}

export default ComponentD
