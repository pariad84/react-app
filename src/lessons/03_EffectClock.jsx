// Lesson 3: useEffect
// 렌더링 이후에 실행되는 "부수 효과"(타이머, 구독, API 호출 등)를 다루는 방법을 연습합니다.
// setInterval처럼 정리(clean-up)가 필요한 작업은 useEffect가 반환하는 함수에서 정리해야 메모리 누수를 막을 수 있습니다.

import { useEffect, useState } from 'react';

function EffectClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);

    // 컴포넌트가 사라지거나 effect가 다시 실행되기 전에 반드시 정리한다.
    return () => clearInterval(timerId);
  }, []); // 빈 배열: 최초 마운트 시 한 번만 실행

  return (
    <section>
      <h2>3. useEffect (시계)</h2>
      <p>현재 시각: {time.toLocaleTimeString()}</p>
    </section>
  );
}

export default EffectClock;
