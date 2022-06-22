import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

// ref달고 버튼 만들어 버튼 클릭시 scrollTobBottom 메서드 실행
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
        맨 밑으로
        </button>
      </div>
    );
  }
}
// onClick = {() => this.scrollBox.scrollToBottom()}
// 문법상 onClick = {this.scrollBox.scrollToBottom} 같은 형식 괜찮을 거임
// 하지만 컴포넌트가 처음 렌더링 될 때 this.scrollBox 값이 undefined 이므로
// this.scrollBox.scrollToBottom 값 읽어 오는 과정에서 오류 생김
// 화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 메서드 실행하면
// 버튼 누를 때(이미 한 번 렌더링을 해서 this.scrollBox를 설정한 시점)
// this.scrollBox.scrollToBottom 값을 읽어와 실행하므로 오류 안 남

export default App;

// ### ref 사용시 주의할 점

// 1. ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 반드시 고려한 후 활용
// 2. 컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용
// 3. 서로 다른 컴포넌트끼릴 데이터를 교류할 때 ref를 사용한다면 잘못된 것
//     앱 규모가 커지면 구조가 꼬여 유지보수 불가능
//     컴포넌트끼리 데이터 교류할 때는 반드시 부모 ↔ 자식 흐름으로 교류해야 함
// 나중에 리덕스 혹은 Context API를 사용하여 효율적으로 교류