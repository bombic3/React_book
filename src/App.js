import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import LifeCycleSample from './LifeCycleSample';

// 랜덤 색상 생성
function getRandomColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
// 16777215 => hex 로 ffffff이므로 해당 코드는 000000부터 ffffff 값 반환

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  // 버튼을 렌더링하고 누를 때마다 handleClick 메서드 호출되게 이벤트 설정
  // 불러온 LifeCycleSample 컴포넌트에 color 값을 props로 설정

  // 에러가 발생하면 componentDidCatch 메서드가 호출되며,
  // 이 메서드는 this.state.error 값을 true로 업데이트해 줌
  // render 함수는 this.state.error 값이 ture면 문구 보여줌
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        {/* <LifeCycleSample color={this.state.color} /> */}
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;