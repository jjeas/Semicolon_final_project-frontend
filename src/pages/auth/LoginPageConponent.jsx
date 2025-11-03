import React, { useState } from 'react';
// TODO: 로그인 성공 후 페이지 이동을 위해 import
// import { useNavigate } from 'react-router-dom';
// TODO: Redux state 변경을 위해 import
// import { useDispatch } from 'react-redux';
// import { loginAction } from '../../slices/authSlice'; 
// TODO: API 호출 함수 import
// import { loginPost } from '../../api/userApi'; 
const initData = {
  id:'',
  password:''
}
const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState(initData);

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // 토큰 만료 등 특정 상황에만 안내 메시지를 보여주기 위한 상태 (임시)
  // 예: const showTokenWarning = new URLSearchParams(window.location.search).get('error') === 'token_expired';
  const showTokenWarning = false; // 우선 false로 둡니다.
  const handleChange = (e)=>{
    const {name, value}=e.target
    setLoginInfo({...loginInfo,[name]:value})
  }
  /**
   * 일반 로그인 버튼 클릭 시 실행될 함수
   */
  const handleClickLogin = async (e) => {
    e.preventDefault(); // 폼 기본 동작(새로고침) 방지
    // console.log('로그인 시도:', { id, password });

    // --- TODO: 2~4단계 로직 구현 ---
    // try {
    //   // 2단계: API 호출
    //   const data = await loginPost({ id, password }); 
    //
    //   // 3단계: Redux 상태 업데이트
    //   dispatch(loginAction(data)); // (data에 토큰이 있다고 가정)
    //
    //   // 4단계: 페이지 이동
    //   navigate('/'); // 메인 페이지로 이동
    //
    // } catch (error) {
    //   console.error(error);
    //   alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    // }
    // ------------------------------
  };

  /**
   * 소셜 로그인 버튼 클릭 시 실행될 함수
   */
  const handleSocialLogin = (provider) => {
    console.log(`${provider} 로그인 시도`);
    // TODO: 각 소셜 로그인(OAuth) API 호출
    // window.location.href = `백엔드_소셜로그인_URL/${provider}`;
  };

  return (
    // 페이지 전체를 감싸고, 로그인 박스를 수직/수평 중앙에 배치
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      
      {/* 흰색 로그인 박스 */}
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg p-8 md:p-12">
        
        {/* 1. 토큰 만료 시간 안내 (조건부 렌더링) */}
        {showTokenWarning && (
          <div className="mb-8 p-4 bg-red-100 text-red-700 rounded-md text-center font-bold">
            토큰이 만료되었습니다. 다시 로그인해주세요.
          </div>
        )}

        {/* 2. 로그인 메인 컨텐츠 (좌우 분리) */}
        {/* 모바일에서는 세로로, 데스크탑에서는 가로로 배치 */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          
          {/* 2-1. 회원 로그인 (왼쪽 영역) */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">회원 로그인</h2>
            
            <form onSubmit={handleClickLogin} className="flex space-x-4">
              {/* 아이디/비밀번호 입력부 */}
              <div className="flex-1">
                <input
                  type="text"
                  name='id'
                  value={loginInfo.id}
                  onChange={(e) => handleChange(e)}
                  placeholder="아이디"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="password"
                  name='password'
                  value={loginInfo.password}
                  onChange={(e) => handleChange(e)}
                  placeholder="비밀번호"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              {/* 로그인 버튼 (세로로 길게) */}
              <button 
                type="submit" 
                className="px-6 py-3 bg-gray-700 text-white rounded-md font-bold text-lg self-stretch hover:bg-gray-800 transition-colors"
              >
                로그인
              </button>
            </form>

            {/* 하단 링크 (회원가입, 찾기) */}
            <div className="mt-6 flex space-x-4 text-gray-600">
              {/* TODO: react-router-dom의 Link 컴포넌트로 변경 */}
              <a href="/register" className="hover:underline text-sm">회원가입</a>
              <a href="/find-id" className="hover:underline text-sm">아이디찾기</a>
              <a href="/find-pw" className="hover:underline text-sm">비밀번호찾기</a>
            </div>
          </div>

          {/* 수직 구분선 (데스크탑에서만 보임) */}
          <div className="hidden md:block border-l border-gray-200"></div>

          {/* 2-2. 소셜 로그인 (오른쪽 영역) */}
          <div className="flex-1 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">소셜 로그인</h2>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleSocialLogin('kakao')}
                className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-yellow-500 transition-colors"
              >
                {/* TODO: 카카오 아이콘 추가 */}
                <span>카카오 로그인</span>
              </button>
              <button 
                onClick={() => handleSocialLogin('naver')}
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors"
              >
                {/* TODO: 네이버 아이콘 추가 */}
                <span>네이버 로그인</span>
              </button>
            </div>
          </div>
          
        </div> {/* flex end */}
      </div> {/* main box end */}
    </div> // page wrapper end
  );
};

export default LoginPage;