import React, { Component } from 'react';

// 클래스형 컴포넌트의 state
// state를 constructor에서 꺼내기
// this.setState 에 객체 대신 함수 인자 전달하기
// this.setState 를 사용하여 state 값 업데이트할 때는 상태가 비동기적으로 업데이트 됨.
// onClick에 설정한 함수 내부에서 this.setState 두 번 호출시 state 값이 바로 바뀌지 않음
// 따라서 this.setState 사용할 때 객체 대신에 함수를 인자로 넣어줌
// this.setState 가 끝난 후 특정 작업 실행하기 -> setState의 두 번재 파라미터로 콜백함수 등록하여 작업 처리
class Counter extends Component {
  // state의 초기값 설정
  state = {
      number: 0,
      fixedNumber: 0
  }
  render () {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state 로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: { fixedNumber }</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          // onClick={() => {
            // this.setState를 사용해 state에 새로운 값 넣기
            // this.setState(prevState => {
              //   return {
                //     number: prevState.number + 1
                //   };
                // });
                
                // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                // 아래 코드는 함수에서 바로 객체를 반환한다는 의미
                // this.setState(prevState => ({
                  //     number: prevState.number + 1
                  // }));
          onClick={() => {
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                // 방금 setState가 호출되었습니다.
                console.log(this.state);
                // {number: 1, fixedNumber: 0}
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;