import './App.css';

function App () {
  const name = '리액트';
  return (
    <div className="react">
      {name}
    </div>
  );
}
// 리엑트에서 사용하는 코드 = JSX
// JSX란 자바스크립트의 확장문법(XML과 비슷)
// 반환되는 return안에서 두개의 요소이상은 div로 묶기
// (리액트v16이상)<Fragment> or <> 사용
// {} 안에 자바스크립트 문법 사용가능 if 안됨 조건부연산자(삼항연산자) 됨
// () 괄호는 주로 JSX를 여러줄로 작성할 때 괄호로 감싸고, 한 줄로 표현할 수 있는 건 감싸지 않는다. 필수사항 아님.
// undefined → {} 안에서 렌더링하는 것은 가능
// style객체 미리 선언 후 style 값으로 지정
// 바로 style 값 지정하기


export default App;
