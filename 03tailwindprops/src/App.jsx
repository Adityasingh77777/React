import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
    let myObj={
      username:"Aditya",
      age:20
    }
  return (
    <>
      <h1 className='bg-green-400 
      text-black 
      p-4 
      rounded-xl mb-4' >Tailwind Test</h1>
      <Card channel="chai aur code" someObj={myObj}/>
      <Card/>
    </>
  )
}

export default App
