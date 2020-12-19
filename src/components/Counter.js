import React,{useState} from 'react';
import { Button } from 'semantic-ui-react';




const Counter = () =>{
  const  [number,setNumber] = useState(1)

  const handleIncrement = () => {
    setNumber(number + 1)

  }
  const handleDecrement = ()=>{
    setNumber(number - 1)
  }
  return (
    <div>
      <h1>{number}</h1>
      <Button primary onClick={handleIncrement}> increment </Button>
      <Button primary onClick={handleDecrement}> decrement </Button>
      
    </div>
  )
}
export default Counter ;