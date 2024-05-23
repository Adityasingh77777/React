import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)
    // setCounter is just a name of valriable
  //let counter=15;

  const addValue= ()=>{
   
    //counter=counter+1;
    if(counter<20) 
    setCounter(counter+1)
  else 
  setCounter(counter)
} 

  const removeValue=()=>{
    console.log("Clicked",counter);
    
    if(counter<=0) setCounter(counter)
    else setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button 
      onClick={addValue}
      >Add Value:{counter}</button>
      <br/>
      <button 
      onClick={removeValue}>remove value:{counter}</button>
    </>
  )
}

export default App


// useState is used as hooks to propagate in ui

