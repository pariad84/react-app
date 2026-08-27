// Lesson 4: 리스트 렌더링 + 폼(제어 컴포넌트) + 상태 업데이트
// - 배열을 map으로 렌더링할 때는 각 항목에 고유한 key가 필요합니다.
// - input의 value를 state와 연결하면 "제어 컴포넌트(controlled component)"가 됩니다.
// - 배열/객체 state는 직접 수정하지 않고 새 배열/객체를 만들어 교체합니다(불변성).

import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 기초 익히기', done: false },
  ]);
  const [text, setText] = useState('');

  function addTodo(e) {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    if (!text.trim()) return;

    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText('');
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <section>
      <h2>4. 리스트 &amp; 폼 (할 일 목록)</h2>
      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </label>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
