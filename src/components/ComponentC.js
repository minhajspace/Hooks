import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = (props) => {
    return (
        <div>
            <ComponentD name={props.name}/>
        </div>
    )
}

export default ComponentC
