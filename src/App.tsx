import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
