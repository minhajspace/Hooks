import React,{useState} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentComponent = () => {
    const [age,setAge]=useState(25)
    const[salary , setSalary] =useState(25000)

    const incrementAge=()=>{
      return   setAge(age + 1  )
    }
    const incrementSalary =() =>{
     return    setSalary(salary + 1000)
    }
    return (
        <div> 
            <Title/>
            <Count text='age' count={age}/>
            <Button handleIncrement={incrementAge}>Increment Age </Button>
            <Count text='salary' count={salary}/>
            <Button handleIncrement={incrementSalary}>Increment Salary</Button>
            
        </div>
    )
}

export default ParentComponent
