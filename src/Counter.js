import React, { Component } from 'react';

// 클래스형 컴포넌트의 state
class Counter extends Component {
  // constructor메서드(컴포넌트의 생성자 메서드) : 컴포넌트에 state 설정
  constructor (props) {
    super(props);
    // state의 초기값 설정
    this.state = {
      number: 0
    };
  }
  render () {
    const { number } = this.state; // state를 조회할 때는 this.state 로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 토어해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용해 state에 새로운 값 넣기
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

// state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
// props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값
// 컴포넌트 자신은 해당 props를 읽기만 가능
// props 수정은 부모 컴포넌트에서 가능
// 클래스형 컴포넌트의 state 와 함수 컴포넌트의 useState 함수를 통한 state

export default Counter;