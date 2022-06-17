import React, { useState } from 'react';

// 각각 input에 e.target.name을 활용하지 않고 onChange 관련 함수 두 개를 따로 만듦
// input이 많으면 e.target.name을 활용
const EventPractiveFunction = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>함수 컴포넌트 이벤트 연습</h1>
      <input
          type="text"
          name="username"
          placeholder="사용자명 입력"
          value={username}
          onChange={onChangeUsername}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={message}
          onChange={onChangeMessage}
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractiveFunction;