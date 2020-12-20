import React, { createContext } from 'react'
import ComponentA from './ComponentA'

export const FirstName = createContext();


const ContextApi = () => {

    return (
        <div >
            <FirstName.Provider value={'Minhaj ahmad khan'}>
            <ComponentA/>
            </FirstName.Provider>
        </div>
    )
}

export default ContextApi
