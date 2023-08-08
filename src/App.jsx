import { Routes,Route, BrowserRouter } from "react-router-dom"
import './index.css'
import Home from "./pages/Home"
import NavBar from "./components/components/NavBar"


function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
