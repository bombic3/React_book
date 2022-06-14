// 함수 컴포넌트에서 useState 사용하기
// Hooks 사용하여 useState 사용
// 배열 비구조화 할당(객체 비구조화 할당과 비슷) : 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해주는 문법

// 배열 비구조화 할당
// const array = [1, 2];
// const one = array[0];
// const two = array[1];
// 위 코드를 배열 비구조화 할당을 사용하여 표현
// const array1 = [1, 2];
// const [one1, two2] = array1;

import React, { useState } from 'react';

const Say = () => {
  // useState 함수 인자에 상태의 초깃값 넣어줌(객체가 아니어도 상관없음, 숫자,문자열 객체, 배열 다 됨)
  const [message, setMessage] = useState('');
  // 함수를 호출하면 배열이 반환 됨
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  // 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꿔 주는 함수(이 함수를 세터Setter 함수라고 부름)
  // 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 정해 줄 수 있음
  // (message, setMessage 말고 text, setText 라고 해도 됨)

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{ message }</h1>
    </div>
  );
};

export default Say;