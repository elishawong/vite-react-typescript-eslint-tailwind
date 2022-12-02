import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import NotFound from "./pages/Error/NotFound"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
