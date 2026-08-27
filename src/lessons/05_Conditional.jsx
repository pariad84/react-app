// Lesson 5: 조건부 렌더링
// JS의 삼항 연산자, && 연산자를 이용해 상태에 따라 다른 화면을 보여주는 방법을 연습합니다.

import { useState } from 'react';

function Conditional() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <section>
      <h2>5. 조건부 렌더링</h2>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? '로그아웃' : '로그인'}
      </button>

      {loggedIn ? (
        <p>환영합니다! 로그인 되었습니다.</p>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}

      {loggedIn && <p>(로그인 상태에서만 보이는 문구입니다)</p>}
    </section>
  );
}

export default Conditional;
