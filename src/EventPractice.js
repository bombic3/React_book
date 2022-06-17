import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트 이벤트 연습 - state에 input값 담아 띄우기</h1>
        <p>생성자 메서드인 constructor에서 state 초깃값을 설정하고</p>
        <p>이벤트 핸들링 함수 내부에서 this.setState 메서드를 호출하여 state를 업데이트 해보기</p>
        <p>그 다음 input의 value 값을 state에 있는 값으로 설정</p>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={
            (e) => {
              this.setState({
                message: e.target.value
              })
            }
          }
        />
        {/* 입력한 값 state에 넣기 */}
        <button onClick={
          () => {
            alert(this.state.message);
            this.setState({
              message: ''
            });
          }
        }>확인</button>
        {/* state에 넣은 값 띄우기 */}
      </div>
    );
  }
}

export default EventPractice;