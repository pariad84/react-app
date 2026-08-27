// Lesson 2: useState
// 컴포넌트가 스스로 기억하는 값(상태)을 다루는 방법을 연습합니다.
// setCount를 호출하면 React가 컴포넌트를 다시 렌더링해서 화면을 최신 상태로 맞춰줍니다.

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>2. useState (카운터)</h2>
      <p>현재 값: {count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </section>
  );
}

export default Counter;
