import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  Login,
  Main
} from './pages/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
