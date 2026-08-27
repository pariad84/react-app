// Lesson 1: Props
// 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법을 연습합니다.
// props는 함수의 매개변수처럼 "읽기 전용" 값입니다. 자식은 props를 직접 수정할 수 없습니다.

function Greeting({ name, role }) {
  return (
    <li>
      안녕하세요, <strong>{name}</strong>님! ({role})
    </li>
  );
}

function Props() {
  const members = [
    { id: 1, name: '지민', role: '프론트엔드' },
    { id: 2, name: '서연', role: '백엔드' },
  ];

  return (
    <section>
      <h2>1. Props</h2>
      <p>부모가 자식 컴포넌트로 값을 전달합니다. (name, role)</p>
      <ul>
        {members.map((m) => (
          <Greeting key={m.id} name={m.name} role={m.role} />
        ))}
      </ul>
    </section>
  );
}

export default Props;
