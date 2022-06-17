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
              // console.log(e);
              console.log(e.target.value);
            }
            // 콘솔에 기록되는 e 객체는 SyntheticEvent(합성이벤트)로
            // 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다.
            // 네이티브 이벤트와 인터페이스가 같으므로
            // 순수 자바스크립트에서 HTML 이벤트를 다룰 때와 똑같이 사용하면 됩니다.
            // SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면
            // 이벤트가 초기화 되므로 정보를 참조 할 수 없다.
            //  ex) 0.5초 뒤에 e객체를 참조하면 e객체 내부의 모든 값이 비워짐
            // 만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해야 함
          }
        />
      </div>
    );
  }
}

export default EventPractice;