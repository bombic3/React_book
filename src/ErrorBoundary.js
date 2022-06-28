import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false
  };

  // - 리액트 v16에서 도입
  // - 컴포넌트 렌더링 도중에 에러 발생 시 애플리케이션 먹통되지 않고 오류 UI를 보여 줄 수 있게 해줌
  // - error : 파라미터에 어떤 에러가 발생했는지 알려줌
  // - info : 오류 코드 위치 정보 알려줌
  // - 실제 사용 시 console.log 말고 서버 API 호출하여 따로 수집가능
  // - 컴포넌트 자신에게 발생하는 에러는 못 찾음
  // - 자신의 this.props.children 으로 전달되는 컴포넌트에서 발생하는 에러만 찾음
  componentDidCatch (error, info) {
    this.setState({
      error: true
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>에러가 발생했습니다..</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;