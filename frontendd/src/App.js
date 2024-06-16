import React from 'react'
import Header from './components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import ContextProvider from './components/ContextProvider/ContextProvider'


const App = () => {
  return (
    
    <div>
    <ContextProvider>
    
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </ContextProvider>
    </div>
   
  )
}

export default App