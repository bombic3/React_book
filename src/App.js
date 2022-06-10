import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent name="김봄비" favoriteNumber={3}>리액트</MyComponent>
    </div>
  );
};
// props 렌더링
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps
// props.children
// 비구조화 할당 문법으로 props 추출하기(props. 키워드 붙이지 않고 바로 내부값 추출)
// 함수 컴포넌트에서 props를 사용할 때 파라미터 부분에서 비구조화 할당 문법을 사용

// propTypes : props의 타입 지정
// isRequired : 필수 propTypes 설정(App.js에서 꼭 값 적기)

export default App;