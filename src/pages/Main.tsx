import React from 'react'
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    const gotoLogin = () => {
        navigate('/Login')
      }

  return (
    <div>
      Main
      <button onClick={gotoLogin}>
        gotoLogin
      </button>
    </div>
  )
}

export default Main
