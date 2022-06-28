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

  // (구. componentWillMount)
  // getDerivedStateFromProps : 부모에게서 받은 color 값을 state 에 동기화하고 있음
  // - 리액트 v16.3 이후 새로운 라이프사이클 메서드
  // - props로 받아 온 값을 state에 동기화 시키는 용도로 사용
  // - 컴포넌트가 마운트될 때와 업데이트 될 때 호출
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // - 컴포넌트 생성 후 첫 렌더링을 다 마친 후 실행
  // - 이 안에서 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나
  // 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리
  componentDidMount () {
    console.log('componentDidMount');
  }

  // shouldComponentUpdate : state.number 값의 마지막 자리수가 4면 리렌더링 취소
  // - props 또는 state 또는 둘 다 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드
  // - 반드시 true/false 값 반환
  // - 따로 생성 안할 시 기본적으로 언제나 true 값 반환
  // - false 반환 시 업데이트 과정 중지
  // - 이 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근
  // - 새로 설정될 props 또는 state는 nextProps와 nextState로 접근
  // - 프로젝트 성능 최적화할 때, 상황에 맞는 알고리즘 작성하여 리렌더링 방지할 때는 false 값 반환
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  // - 컴포넌트를 DOM에서 제거할 때 실행
  // - componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM 이 있다면
  //    여기서 제거 작업 해야 함
  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  // (구. componentWillUpdate)
  // getSnapshotBeforeUpdate : DOM에 변화가 일어나기 직전의 색상 속성 snapshot 값으로 반환하여
  // 이것을 componentDidUpdate에서 조회할 수 있게 해줌
  // - 리액트 v16.3 이후 만든 메서드
  // - render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
  // - 이 메서드에서 반환하는 값은 componentDidUpdate 에서
  // 세 번째 파라미터인 snapshot 값으로 전달 받을 수 있음
  // (주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용. ex) 스크롤바 위치 유지)
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // - 리렌더링 완료 후 실행
  // - 업데이트 끝난 직후이므로 DOM 관련 처리해도 무방
  // - prevProps 또는 prevState 사용해 컴포넌트가 이전에 가졌던 데이터에 접근 가능
  // - getSnapshotBeforeUpdate에서 반환한 값이 있을 시 여기서 snapshot 값 전달받을 수 있음
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('없데이트되기 직전 생상: ', snapshot);
    }
  }


  // - 컴포넌트 모양새를 정의
  // - 라이프사이클 메서드 중 유일한 필수 메서드
  // - 메서드 안에서 this.props와 this.state에 접근 가능
  // - 리액트 요소(따로 선언한 컴포넌트나 div태그 등..) 반환
  // - 아무것도 보여 주고 싶지 않다면 null or false 값 반환
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



// ----------새로고침------------
// constructor
// constructor
// getDerivedStateFromProps
// getDerivedStateFromProps
// render
// render
// componentDidMount
// componentWillUnmount
// componentDidMount
// ----------더하기 버튼 클릭------------
// getDerivedStateFromProps
// getDerivedStateFromProps
// shouldComponentUpdate {color: '#000000'} {number: 1, color: '#000000'}
// shouldComponentUpdate {color: '#000000'} {number: 1, color: '#000000'}
// render
// render
// getSnapshotBeforeUpdate
// componentDidUpdate {color: '#000000'} {number: 0, color: '#000000'}
// ----------랜덤 색상 클릭------------
// getDerivedStateFromProps
// getDerivedStateFromProps
// shouldComponentUpdate {color: '#8b75d0'} {number: 1, color: '#8b75d0'}
// shouldComponentUpdate {color: '#8b75d0'} {number: 1, color: '#8b75d0'}
// render
// render
// getSnapshotBeforeUpdate
// componentDidUpdate {color: '#000000'} {number: 1, color: '#000000'}
// 없데이트되기 직전 생상:  rgb(0, 0, 0)
// ----------더하기 버튼 클릭------------
// getDerivedStateFromProps
// getDerivedStateFromProps
// shouldComponentUpdate {color: '#8b75d0'} {number: 2, color: '#8b75d0'}
// shouldComponentUpdate {color: '#8b75d0'} {number: 2, color: '#8b75d0'}
// render
// render
// getSnapshotBeforeUpdate
// componentDidUpdate {color: '#8b75d0'} {number: 1, color: '#8b75d0'}