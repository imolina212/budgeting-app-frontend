//Dependencies
import { Routes, Route } from "react-router-dom"

//Components
import NavBar from "./Components/NavBar"
//Pages
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import New from "./Pages/New"
import Budget from "./Pages/Budget"

export default function App() {
  return(
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/transactions" element={<Index />}/>
        <Route exact path="/transactions/new" element={<New />}/>
        <Route exact path="/transactions/budget" element={<Budget />}/>
      </Routes>
    </div>
  )
}