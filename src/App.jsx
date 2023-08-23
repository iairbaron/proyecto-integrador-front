import { Routes,Route, BrowserRouter, Navigate } from "react-router-dom"
import './index.css'
import Home from "./pages/Home"
import NavBar from "./components/components/NavBar"
import Packages from "./pages/Packages"
import AddProduct from "./pages/AddProduct"
import ProductDetail from "./pages/ProductDetail"
import Dashboard from "./pages/Dashboard"
import { ContextProvider } from "./components/utils/GlobalContext"
import Footer from "./components/components/Footer"
import LogIn from "./pages/LogIn"
import Banner from "./components/components/Banner"
import RegistrationForm from "./pages/RegistrationForm"

function App() {

  return (
    <BrowserRouter>
    <ContextProvider>
    <NavBar/>
    <Banner/>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/packages" element={<Packages/>} />
      <Route path="/locations" element={<p>locations</p>} />
      <Route path="/contacts" element={<p>contacts</p>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Agregar-producto" element={<AddProduct/>} />
      <Route path="/producto/:id" element={<ProductDetail />} />  
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Register" element={<RegistrationForm />} />
    </Routes>
    <Footer/>
    </ContextProvider>
    </BrowserRouter>
    
  )
}

export default App
