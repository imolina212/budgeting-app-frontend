//Dependencies
import { Routes, Route } from "react-router-dom"

//Components
import NavBar from "./Components/NavBar"
//Pages
import Home from "./Pages/Home"
import Index from "./Pages/Index"

export default function App() {
  return(
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/transactions" element={<Index />}/>
      </Routes>
    </div>
  )
}