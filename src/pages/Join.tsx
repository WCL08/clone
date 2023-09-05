import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/_Login.scss'
import instagram from '../images/instagram.png'
import Button from '../components/Button';

function Join() {

    const navigate = useNavigate();
    const gotoMain = () => {
      navigate('/Main')
    }
    const gotoLogin = () => {
      navigate('/')
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
            <div className='introJoinMessage'>친구들의 사진과 동영상을 보려면 가입하세요</div>
          <input className='loginInput' placeholder='휴대폰 번호 또는 이메일 주소' /><br />
          <input className='loginInput' placeholder='비밀번호' /><br />
          <Button
            className='addAccountBtn'
            onClick={handleClick}>가입
          </Button>
        </div>
      </div>
      <div className='secondBox'>
        계정이 있으신가요? <button className='joinBtn' type='button' onClick={gotoLogin}>로그인</button>
      </div>
    </div>
  )
}

export default Join