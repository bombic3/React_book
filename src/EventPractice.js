import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  // 함수를 미리 준비하여 전달(성능 비슷, 가독성 높음)
  // 현재 constructor 함수에서 함수를 바인딩하는 작업이 이뤄지고 있음

  // constructor (props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // 함수 호출 시 this는 호출부에 따라 결정
  // 클래스 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this 관계 끊김
  // 메서드를 this와 바인딩(binding)하는 .bind(this); 작업필요
  // 안그럼 this가 undefined 됨
  // 메서드 이름은 자유지만 handle~ 로 암묵적 규칙

  // handleChange (e) {
  //   this.setState({
  //     message: e.target.value
  //   });
  // }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  // handleClick () {
  //   alert(this.state.message);
  //   this.setState({
  //     message: ''
  //   });
  // }

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <h2>이벤트 연습 - 임의의 메서드 만들기</h2>
        <h2>binding 편하게 하기 - Property Initializer Syntax를 사용한 메서드 작성</h2>
        <p>transform-class-properties 문법사용하여 화살표 함수 형태로 메서드 정의</p>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        {/* 입력한 값 state에 넣기 */}
        <button onClick={this.handleClick}>확인</button>
        {/* state에 넣은 값 띄우기 */}
      </div>
    );
  }
}

export default EventPractice;