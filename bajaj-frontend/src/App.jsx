import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import HomePage from './Pages/HomePage'

import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<HomePage/>} path='/'/>
      </Routes>

    </BrowserRouter>
  )
}

export default App