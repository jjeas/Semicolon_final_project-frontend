const MemberEditPage = () => {
  return (
    <div>
        <ul>
          개인 정보 수정하기~
          <li>
            회원 등급
            <input type="text" className="bg-gray-300" placeholder="일반회원" disabled />
          </li>
          <li>
            이름
            <input type="text" className="bg-gray-300" placeholder="id" disabled/>
          </li>
          <li>
              아이디
              <input type="text" className="bg-gray-300" placeholder="id" />
          </li>
          <li>
              이메일
              <input type="email" className="border-solid" placeholder="a@a.com" />
          </li>
          <li>
              비밀번호
              <input type="password" className="border-solid" placeholder="pw" />
          </li>
          <li>
              비밀번호 확인
              <input type="password" className="border-solid" placeholder="pwcheck" />
          </li>
          <li>
            전화번호
            <input type="tel" className="border-solid" placeholder="01012341234" />
          </li>
          <li>
            주소
            <input type="text" className="border-solid" placeholder="서울" />
          </li>
          <button>수정</button>
        </ul>
    </div>
  )
}

export default MemberEditPage
