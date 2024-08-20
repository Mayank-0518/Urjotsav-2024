import { useState } from 'react'
import Header from './components/Header'
import LandingPage from "./images/Landing Page.png"
import Designer from "./images/Designer.png"
import '../src/App.css'
import Cursor from '../src/components/Cursor'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div id='bgimg' className=' w-full h-screen bg-no-repeat bg-cover bg-center overflow-hidden' style={{ backgroundImage:`url(${LandingPage})`}}>
   <Header/>
   
   <div className='h-[100%] flex justify-center items-center '>
      <Cursor/>
   </div>
    </div>
    
   
  )
}

export default App
