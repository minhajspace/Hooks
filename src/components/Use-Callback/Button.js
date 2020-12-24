import React from 'react'

const Button = (props) => {
    const {handleIncrement, children} =props
    console.log(`rendring ${children}`)
   
    return (
        <div>
          <button onClick={handleIncrement}>{children}</button>  
        </div>
    )
}

export default React.memo(Button)
