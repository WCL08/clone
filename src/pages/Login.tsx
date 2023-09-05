// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState,useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/_Join.scss'
// import axios from 'axios';
import instagram from '../images/instagram.png'
import Button from '../components/Button';

function Login() {

  const navigate = useNavigate();
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

// useEffect(() => {
//   axios.get('/user_inform/login')
//   .then(res => console.log(res))
//   .catch()
// },[])
    const handleInputId = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setInputId(e.target.value)
  }

  const handleInputPw = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setInputPw(e.target.value)
  }
  const gotoMain = () => {
    navigate('/Main')
  }
  const gotoJoin = () => {
    navigate('/Join')
  }

  const handleClick = () => {
    alert('버튼이 클릭되었습니다.');
  };
  return (
    <div>
      <div className='firstBoxContainer'>
        <div className='instagramLogo'>
          <button
            className='instaLogoBtn'
            type='button'
            onClick={gotoMain}>
            <img className='instaLogo' alt='Logo' src={instagram} />
          </button>
        </div>
        <div className='loginBox'>
          <input className='loginInput'
          type='text' name='input_id' value={inputId} onChange={handleInputId} placeholder='전화번호, 사용자 이름 또는 이메일' /><br />
          <input className='loginInput'
          type='password' name='input_pw' value={inputPw} onChange={handleInputPw} placeholder='비밀번호' /><br />
          <Button
            className='addAccountBtn'
            onClick={handleClick}>로그인
          </Button>
        </div>
      </div>
      <div className='secondBox'>
        계정이 없으신가요? <button className='joinBtn' type='button' onClick={gotoJoin}>가입하기</button>
      </div>
    </div>
  )
}

export default Login
