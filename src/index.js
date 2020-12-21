import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';
import UseEffectExample from './components/use-effect';
import FetchData from './components/fetch-data';
import Indivisualdatafetch from './components/Indivisualdatafetch';
import ContextApi from './components/ContextApi';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC'
import ComponentD from './components/ComponentD'
import CounterReducer from './components/Reducer/Counter-Reducer'
import CounterTwo from './components/Reducer/CounterTwo'
import TwoCounterUsingSameState from './components/Reducer/Two-Counter-Using-Same-State'
import CounterThree from './components/Reducer/CounterThree'
import App from './components/Reducer/useReduceruseContext/app'



ReactDOM.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <UseEffectExample/> */}
    {/* <FetchData/> */}
    {/* <Indivisualdatafetch/> */}
    {/* <ContextApi/> */}
    {/* <CounterReducer/> */}
    {/* <CounterTwo/> */}
    {/* <TwoCounterUsingSameState/> */}
    {/* <CounterThree/> */}
    <App/>

    
   
   

   

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

