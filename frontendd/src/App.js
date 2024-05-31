import React from 'react'
import Header from './components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    
    </div>
    </BrowserRouter>
  )
}

export default App