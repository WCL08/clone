import React from 'react'
import './App.css'
function App() {
  return (
    <div>
      <div className='firstBox'>

        <div className='instagramLogo'>
          instagram
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

export default App
