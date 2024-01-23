import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'

function App() {

  const [count, setCount]=useState(0)
  return (
    <>
      <Header />
      <h1 className='p-3 text-3xl bg-green-500 rounded-md'>Vite with Tailwind</h1>
      <Card username="bradley"/>
    </>
  )
}

export default App
