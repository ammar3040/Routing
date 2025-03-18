import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home'
import Data from './data'

function App() {

  return (
    <>
 
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/display" element={<Data></Data>}/>
     </Routes>
     </BrowserRouter>
     

    </>
  )
}

export default App
