import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          onChange={
            (e) => {
              console.log(e);
            }
            // 콘솔에 기록되는 e 객체는 SyntheticEvent 로
            // 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다.
          }
        />
      </div>
    );
  }
}

export default EventPractice;