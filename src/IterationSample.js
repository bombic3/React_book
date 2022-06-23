import React, { useState } from 'react';

// map() 함수 고유한 key 값 index 대신 name.id 값으로 지정
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id
  // const names = ['눈사람', '얼음', '눈', '바람'];

  const onChange = e => setInputText(e.target.value);

  // - 버튼 클릭시 호출할 onClick 함수 선언하여 button onClick 이벤트 설정
  // - onClick 함수에서는 배열의 내장 함수 concat 사용하여 새로운 항목을 추가한 배열 만들고
  // - setNames통해 상태 업데이트
  // - concat : 새로운 배열을 만듦 ( ≠ push : 기존 배열 변경)
  // - button이 클릭될 때 기존의 input 내용을 비우는 것도 구현
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해준다
    setNames(nextNames); // names 값을 업데이트 한다.
    setInputText(''); // inputText를 비운다.
  }

  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const nameList = names.map( name => <li key={name.id}>{name.text}</li>);
  
  // ul 상단에 input, button 렌더링 후 input의 상태 관리하기
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;