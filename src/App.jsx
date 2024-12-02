import { useState } from 'react'
import './App.css';
import  RevealBento  from './Components/RevealBento';

import './index.css'; // Import Tailwind CSS


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RevealBento/>
      <HeaderBlock />
      <SocialsBlock />
      <AboutBlock />
      <LocationBlock />
      <EmailListBlock />
      <Footer />
    </>
  );
}

export default App
