import React from 'react'
import Reside from "./Comp2/Reside/Reside"
// import ScrollToTop from './Comp2/BestSell/ScrolToTop'
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Reside/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App