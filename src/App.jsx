import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavbarDefault } from './components/NavbarDefault'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        
        <NavbarDefault />

        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
