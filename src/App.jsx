import { Routes,Route, BrowserRouter, Navigate } from "react-router-dom"
import './index.css'
import Home from "./pages/Home"
import NavBar from "./components/components/NavBar"

import Packages from "./pages/Packages"
import AddProduct from "./pages/AddProduct"

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/packages" element={<Packages/>} />
      <Route path="/locations" element={<p>locations</p>} />
      <Route path="/contacts" element={<p>contacts</p>} />
      <Route path="/Agregar-producto" element={<AddProduct/>} />

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
