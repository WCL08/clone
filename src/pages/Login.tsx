import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/_Join.scss'
import instagram from '../images/instagram.png'
import Button from '../components/Button';

function Login() {

  const navigate = useNavigate();
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
          <input className='loginInput' placeholder='전화번호, 사용자 이름 또는 이메일' /><br />
          <input className='loginInput' placeholder='비밀번호' /><br />
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
