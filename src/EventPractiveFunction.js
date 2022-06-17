import React, { useState } from 'react';

// useState를 통해 사용하는 상태에 문자열이 아닌 객체 넣어보기
// 각각 input에 e.target.name을 활용하려면
// useState를 쓸 때 인풋 값들이 들어 있는 form 객체 사용

// 각각 input에 e.target.name을 활용하지 않고 onChange 관련 함수 두 개를 따로 만듦
// input이 많으면 e.target.name을 활용
const EventPractiveFunction = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form, // 스프레드 연산자(spread) 기존의 form 내용을 이자리에 복사한 뒤
      [e.target.name]: e.target.value // 원하는 값 덮어 씌우기
    };
    setForm(nextForm);
  }

  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ': ' + message);
    // setUsername('');
    // setMessage('');
    setForm({
      username: '',
      message: ''
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>함수 컴포넌트 이벤트 연습 - useState 사용하여 상태에 문자열 아닌 객체 넣어보기</h1>
      <input
          type="text"
          name="username"
          placeholder="사용자명 입력"
          value={username}
          onChange={onChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractiveFunction;