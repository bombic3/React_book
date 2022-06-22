import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "1234"
    });
    this.input.focus();
    // button을 눌렀을 때 포커스가 input으로 자동 넘어가도록 작성하기
  }

  render() {
    return (
      <div>
        <input
          ref={(ref) => this.input=ref}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

// input에서는 onChange 이벤트가 발생하면 handleChange 를 호출하여 state의
// password 값을 업데이트

// button에서는 onClick 이벤트가 발생하면 handleButtonClick을 호출하여
// clicked 값 결과에 다라 success 또는 failure 값 설정
// 그리고 이 값에 따라 input 색상이 초록색,빨간색으로 나타남

export default ValidationSample;