//Dependencies
import { Routes, Route } from "react-router-dom"

//Components
import NavBar from "./Components/NavBar"
//Pages
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import New from "./Pages/New"
import Budget from "./Pages/Budget"
import Show from "./Pages/Show"

export default function App() {
  return(
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/transactions" element={<Index />}/>
        <Route path="/transactions/new" element={<New />}/>
        <Route path="/transactions/budget" element={<Budget />}/>
        <Route path="/transactions/:id" element={<Show />}/>
      </Routes>
    </div>
  )
}