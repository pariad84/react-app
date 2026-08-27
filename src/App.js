import { useState } from 'react';
import './App.css';
import Props from './lessons/01_Props';
import Counter from './lessons/02_Counter';
import EffectClock from './lessons/03_EffectClock';
import TodoList from './lessons/04_TodoList';
import Conditional from './lessons/05_Conditional';

const lessons = [
  { id: 'props', label: '1. Props', Component: Props },
  { id: 'state', label: '2. useState', Component: Counter },
  { id: 'effect', label: '3. useEffect', Component: EffectClock },
  { id: 'list', label: '4. 리스트 & 폼', Component: TodoList },
  { id: 'conditional', label: '5. 조건부 렌더링', Component: Conditional },
];

function App() {
  const [activeId, setActiveId] = useState(lessons[0].id);
  const active = lessons.find((l) => l.id === activeId);
  const ActiveLesson = active.Component;

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', padding: '2rem' }}>
        <h1>React 스터디</h1>
        <nav style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {lessons.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveId(l.id)}
              style={{ fontWeight: l.id === activeId ? 'bold' : 'normal' }}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <ActiveLesson />
      </header>
    </div>
  );
}

export default App;
