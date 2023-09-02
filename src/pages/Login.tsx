import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/_Login.scss'

function Login() {

  const navigate = useNavigate();
  const gotoMain = () => {
      navigate('/Main')
    }

  return (
    <div>
      <div className='firstBoxContainer'>
        <div className='instagramLogo'>
          <button onClick={gotoMain}>
            instagram
            </button>
        </div>
        <div className='loginBox'>
          <input placeholder='전화번호, 사용자 이름 또는 이메일' /><br />
          <input placeholder='비밀번호' /><br/>
          <button>로그인</button>
          <div>또는</div>
          <div>Facebook으로 로그인</div>
          <div>비밀번호를 잊으셨나요?</div>
        </div>
      </div>
      <div className='secondBox'>
계정이 없으신가요? <button>가입하기</button>
      </div>
    </div>
  )
}

export default Login
