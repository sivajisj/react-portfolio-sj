import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import About from './components/About'
import { Navbar } from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Workk from './components/Workk'
import Contact from './components/contact'



function App() {
  const [count, setCount] = useState(0)

  return (

   <>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Workk/>
   <Contact/>
   </>
  )
}

export default App

