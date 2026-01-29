import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('#121212')

  return (
   <div className='min-h-screen
 flex justify-center bg-red-900 items-center'
   style={{backgroundColor:color}}>


    <div className='flex gap-3'>
      <button onClick={()=>setColor("#800020")} className='bg-red-500 p-2.5 rounded-2xl'>🍷 Burgundy</button>
      <button onClick={()=>setColor("#E76F51")} className='bg-red-500 p-2.5 rounded-2xl'>🧱 Terracotta</button>
      <button onClick={()=>setColor("#CC5500")} className='bg-red-500 p-2.5 rounded-2xl'>🔥 Burnt Orange</button>
      <button onClick={()=>setColor("#B7410E")} className='bg-red-500 p-2.5 rounded-2xl'>🍂 Rust</button>
      <button onClick={()=>setColor("#6F1D1B")} className='bg-red-500 p-2.5 rounded-2xl'>🌑 Warm Brown</button>

    </div>

   </div>
  )
}

export default App
