import React, { Component } from 'react';

class ScrollBox extends Component {
// - 컴포넌트에 스크롤바 맨 아래쪽으로 내리는 메서드 만들기
// - 자바스크립트로 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값들을 사용한다.
// - scrollTop : 세로 스크롤바 위치(0~350)
// - scrollHehight : 스크롤이 있는 박스 안의 div 높이(650)
// - clientHeight : 스크롤이 있는 박스의 높이(300)
  
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // 앞 코드에는 비구조화 할당 문법을 사용했음
    //  다음 코드와 같은 의미
    //     const scrollHeight = this.box.scrollHeight;
    //     const clientHeight = this.box.clientHeight;
    this.box.scrollTop = scrollHeight - clientHeight;
  }
  // -> 이렇게 만든 메서드 부모 컴포넌트(App)에서 ScrollBox에 ref를 달면 사용할 수 있음

  render () {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }

    return (
      <div
        style={style}
        ref={(ref) => { this.box = ref }}>
        <div style={innerStyle}/>
      </div>
    );
  }
}

export default ScrollBox;