import React, { Component } from 'react';
// 각 라이프사이클 메서드 실행할 때마다 콘솔 디버거에 기록
// 부모 컴포넌트에서 props로 색상을 받아 버튼 누르면 state.number 값 1씩 더함
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null; // ref를 설정할 부분

  constructor (props) {
    super(props);
    console.log('constructor');
  }

  // getDerivedStateFromProps : 부모에게서 받은 color 값을 state 에 동기화하고 있음
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  // shouldComponentUpdate : state.number 값의 마지막 자리수가 4면 리렌더링 취소
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  // getSnapshotBeforeUpdate : DOM에 변화가 일어나기 직전의 색상 속성 snapshot 값으로 반환하여
  // 이것을 componentDidUpdate에서 조회할 수 있게 해줌
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('없데이트되기 직전 생상: ', snapshot);
    }
  }

  render () {
    console.log('render');

    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 style={style} ref={ref => this.myRef=ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>
          더하기
        </button>
      </div>
    );

    // 의도적으로 에러 발생시키기 - 존재하지 않는 props인 missing객체의 value 조회해서 렌더링
    // return (
    //   <div>
    //     {this.props.missing.value}
    //     <h1 style={style} ref={ref => (this.myRef = ref)}>
    //       {this.state.number}
    //     </h1>
    //     <p>color: {this.state.color}</p>
    //     <button onClick={this.handleClick}>더하기</button>
    //   </div>
    // )
  }
}
// React.StrictMode가 적용돼 있으면 일부 라이브사이클 두 번씩 호출 됨
// 개발 환경에서만 두 번씩 호출 되는 것, 프로덕션 환경에서는 정상 호출 됨
export default LifeCycleSample;