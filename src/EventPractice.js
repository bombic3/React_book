import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }

  // 객체 안에서 key를 [ ] 로 감싸면
  // 그 안에 넣은 래퍼런스가 가리키는 실제 값이 key 값으로 사용됨
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  // 임의 메서드 handleKeyPress 추가, 화살표 함수로 this binding함
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습 - input 여러 개 다루기</h1>
        <p>event 객체 활용 → e.target.name 값 사용</p>
        <h2>Enter눌러서 버튼 클릭하기 - onKeyPress 이벤트 핸들링</h2>
        <input
          type="text"
          name="username"
          placeholder="사용자명 입력"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        {/* onKeyPress={this.handleKeyPress} 이벤트 실행 */}
        {/* 입력한 값 state에 넣기 */}
        <button onClick={this.handleClick}>확인</button>
        {/* state에 넣은 값 띄우기 */}
      </div>
    );
  }
}

export default EventPractice;