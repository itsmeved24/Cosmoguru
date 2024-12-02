import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  RevealBento  from './Components/RevealBento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RevealBento/>
    </>
  );
}

export default App
