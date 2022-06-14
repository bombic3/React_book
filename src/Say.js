import React, { useState } from 'react';

// 한 컴포넌트에서 useState 여러 번 사용하기
const Say = () => {
  // useState 함수 인자에 상태의 초깃값 넣어줌(객체가 아니어도 상관없음, 숫자,문자열 객체, 배열 다 됨)
  const [message, setMessage] = useState('');
  // 함수를 호출하면 배열이 반환 됨
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  // 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꿔 주는 함수(이 함수를 세터Setter 함수라고 부름)
  // 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 정해 줄 수 있음
  // (message, setMessage 말고 text, setText 라고 해도 됨)

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
      <button style={{color: 'green'}} onClick={() => setColor('green')}>초록색</button>
      <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파란색</button>
    </div>
  );
};

// 클래스형이든 함수형 컴포넌트든 state 사용할 때 주의사항
// state 값 바꿔야 할 때 setState 혹은 useState 를 통해 전달받은 세터 함수를 사용해야 한다.

export default Say;