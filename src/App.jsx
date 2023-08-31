import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState()
  return (
    <>
      <h1 className="text-4xl text-red-300">Password genrator</h1>
    </>
  )
}

export default App
