import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl'>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'>Green</button>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'>Blue</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'>Purple</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'>Orange</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'>Yellow</button>
        </div>
      </div>
     </div>
  )
}

export default App
