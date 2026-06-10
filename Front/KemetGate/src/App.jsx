
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Explore from './Pages/Explore'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>  
<Route path='/explore' element={<Explore/>}/>
    </Routes> 
   
</>
  )
}

export default App
