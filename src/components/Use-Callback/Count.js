import React from 'react'

const Count = (props) => {
    const {text,count} =props
    console.log(`rendring ${text}`)
    return (
        <div>
            <h4>   {text}  {count} </h4>
        </div>
    )
}

export default React.memo(Count)
