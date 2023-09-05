import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/" element={<Login />} />
        <Route path="/Join" element={<Join />} />
      </Routes>
    </div>
  )
}

export default App
