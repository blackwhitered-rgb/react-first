import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen duration-200'>
      <div className='fixed inset-x-0 flex-wrap justify-center px-2 bottom-12'></div>
    </div>
  )
}

export default App
