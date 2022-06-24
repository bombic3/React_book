### 2.4 JSX 문법

```jsx
import logo from './logo.svg';
import './App.css';

function App () {
  const name = '리액트';
  return (
    <>
      {name === '리액트' ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </>
  );
}
// 리엑트에서 사용하는 코드 = JSX
// JSX란 자바스크립트의 확장문법(XML과 비슷)

**// 반환되는 return안에서 두개의 요소이상은 div로 묶기
// (리액트v16이상)<Fragment> or <> 사용**

export default App;
```

---

Fragment 사용시 import해주기

```jsx
import { Fragment } from "react";

function App() {
  const name = "리액트";
  return (
    <Fragment>
      {name === "리액트" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </Fragment>
  );
}

export default App;
```

---

연산자 &&를 사용한 조건부 렌더링

```jsx
import './App.css';

function App () {
  const name = '뤼액트';
  return (
    <div>
      {name === '리엑트' && <h1>리액트 입니다.</h1> : null}
    </div>
  );
}
// 리엑트에서 사용하는 코드 = JSX
// JSX란 자바스크립트의 확장문법(XML과 비슷)
// 반환되는 return안에서 두개의 요소이상은 div로 묶기
// (리액트v16이상)<Fragment> or <> 사용
// {} 안에 자바스크립트 문법 사용가능 if 안됨 조건부연산자(삼항연산자) 됨
// () 괄호는 주로 JSX를 여러줄로 작성할 때 괄호로 감싸고, 한 줄로 표현할 수 있는 건 감싸지 않는다. 필수사항 아님.

export default App;
```

---

undefined → {} 안에서 렌더링하는 것은 가능

```jsx
import "./App.css";

function App() {
  const name = undefined;
  return (
    <div>
      {/* name || '값이 undefined입니다.'   실행 안 됨 */}
      {name || "리액트"}
    </div>
  );
}

// undefined → {} 안에서 렌더링하는 것은 가능

export default App;
```

---

인라인 스타일링 - style객체 미리 선언 후 style 값으로 지정

```jsx
import "./App.css";

function App() {
  const name = "리액트";
  const style = {
    // background-color는 backgroundColor와 같이 카멜표기법으로 작성
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16, // 단위 생략하면 px로 지정
  };
  return <div style={style}>{name}</div>;
}
// style객체 미리 선언 후 style 값으로 지정

export default App;
```

---

인라인 스타일링 - 바로 style 값 지정하기

```jsx
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <div
      style={{
        // background-color는 backgroundColor와 같이 카멜표기법으로 작성
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16, // 단위 생략하면 px로 지정
      }}
    >
      {name}
    </div>
  );
}
// 바로 style 값 지정하기

export default App;
```

---

클래스는 className으로 사용

```jsx
import "./App.css";

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}
// 클래스는 className으로 사용

export default App;
```

모든태그 닫아주기

---

# 3장 컴포넌트

### 3.1 클래스형 컴포넌트

- **리액트 공식 매뉴얼에서는 함수 컴포넌트와 Hooks를 사용하도록 권장**

클래스형 컴포넌트

```jsx
**// 클래스형 컴포넌트 사용시 import해줘야 함**
import React, { Component } from 'react';
import './App.css'

**// 클래스형 컴포넌트 render(){} 함수 필수**
class App extends Component {
  render () {
    const name = 'react';
    return <div className='react'>{name}</div>
  }
}

// 함수 컴포넌트
// function App () {
//   const name = '리액트';
//   return (
//     <div className="react">
//       {name}
//     </div>
//   );
// }

export default App;
```

---

### 3.2 첫 컴포넌트 생성

MyComponent.js

```jsx
const MyComponent = () => {
  return <div>나의 첫번째 컴포넌트!</div>;
};
// function대신 화살표(arrow)함수 사용하여 간략하게 작성
// 화살표 함수는 값을 연산하여 바로 반환해야 할 때 사용

// 확장자 Reactjs Code Snippet 설치하면 rsc 엔터!
// 클래스형은 rcc 엔터

export default MyComponent;
```

App.js

```jsx
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default App;
```

---

### 3.3 props

- props : properties의 줄임말로 컴포넌트 속성을 결정할 때 사용
- 부모 컴포넌트(App)에서 설정

MyComponent.js

```jsx
const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};
// props 사용

export default MyComponent;
```

App.js

```jsx
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <div>
      <MyComponent name="React" />
    </div>
  );
};
// props 렌더링

export default App;
```

---

- props 값을 지정하지 않았을 때 보여주는 기본값 defaultProps

MyComponent.js

```jsx
const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
  name: "기본 이름",
};
// props 사용
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps

export default MyComponent;
```

App.js

```jsx
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};
// props 렌더링
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps

export default App;
```

---

- props.children 값

MyComponent.js

```jsx
const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다.
      <br />
      children 값은 {props.children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};
// props 사용
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps
// props.children

export default MyComponent;
```

App.js

```jsx
import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <div>
      <MyComponent>리액트</MyComponent>
    </div>
  );
};
// props 렌더링
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps
// props.children

export default App;
```

> 안녕하세요, 제 이름은 기본 이름입니다.
>
> children 값은 리액트 입니다.

---

- 비구조화 할당 문법으로 props 추출하기(props. 키워드 붙이지 않고 바로 내부값 추출)
- 함수 컴포넌트에서 props를 사용할 때 파라미터 부분에서 비구조화 할당 문법을 사용

```jsx
const MyComponent = (props) => {
  **const { name, children } = props;**
  return (
    <div>
      {/* 안녕하세요, 제 이름은 {props.name}입니다.<br /> */}
      {/* children 값은 {props.children} 입니다. */}
      안녕하세요, 제 이름은 {name}입니다.<br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름'
};
// props 사용
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps
// props.children
**// 비구조화 할당 문법으로 props 추출하기(props. 키워드 붙이지 않고 바로 내부값 추출)
// 함수 컴포넌트에서 props를 사용할 때 파라미터 부분에서 비구조화 할당 문법을 사용**

export default MyComponent;
```

→ 더 간략히

```jsx
const MyComponent = **({name,children})** => {
  // const { name, children } = props;
  return (
    <div>
      {/* 안녕하세요, 제 이름은 {props.name}입니다.<br /> */}
      {/* children 값은 {props.children} 입니다. */}
      안녕하세요, 제 이름은 {name}입니다.<br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름'
};
// props 사용
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps
// props.children
**// 비구조화 할당 문법으로 props 추출하기(props. 키워드 붙이지 않고 바로 내부값 추출)
// 함수 컴포넌트에서 props를 사용할 때 파라미터 부분에서 비구조화 할당 문법을 사용**

export default MyComponent;
```

---

- propTypes : props의 타입 지정

MyComponent.js

```jsx
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.<br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름'
};
// props 사용
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps
// props.children
// 비구조화 할당 문법으로 props 추출하기(props. 키워드 붙이지 않고 바로 내부값 추출)
// 함수 컴포넌트에서 props를 사용할 때 파라미터 부분에서 비구조화 할당 문법을 사용

**MyComponent.propTypes = {
  name: PropTypes.string
};
// propTypes : props의 타입 지정**

export default MyComponent;
```

App.js

```jsx
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent **name="문자로"**>리액트</MyComponent>
    </div>
  );
};
// props 렌더링
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps
// props.children
// 비구조화 할당 문법으로 props 추출하기(props. 키워드 붙이지 않고 바로 내부값 추출)
// 함수 컴포넌트에서 props를 사용할 때 파라미터 부분에서 비구조화 할당 문법을 사용

**// propTypes : props의 타입 지정**

export default App;
```

> 안녕하세요, 제 이름은 문자로입니다.
>
> children 값은 리액트 입니다.

---

- isRequired : 필수 propTypes 설정(App.js에서 꼭 값 적기)

MyComponent.js

```jsx
import PropTypes from 'prop-types';

const MyComponent = ({ name, **favoriteNumber**, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.<br />
      children 값은 {children} 입니다.<br />
      필수! 제가 좋아하는 숫자는 {**favoriteNumber**}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름'
};
// props 사용
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps
// props.children
// 비구조화 할당 문법으로 props 추출하기(props. 키워드 붙이지 않고 바로 내부값 추출)
// 함수 컴포넌트에서 props를 사용할 때 파라미터 부분에서 비구조화 할당 문법을 사용

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: **PropTypes.number.isRequired**
};
// propTypes : props의 타입 지정
**// isRequired : 필수 propTypes 설정(App.js에서 꼭 값 적기)**

export default MyComponent;
```

App.js

```jsx
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent name="김봄비" **favoriteNumber={3}**>리액트</MyComponent>
    </div>
  );
};
// props 렌더링
// props 값을 따로 지정하지 않았을 때 보여 줄 기본값 defaultProps
// props.children
// 비구조화 할당 문법으로 props 추출하기(props. 키워드 붙이지 않고 바로 내부값 추출)
// 함수 컴포넌트에서 props를 사용할 때 파라미터 부분에서 비구조화 할당 문법을 사용

// propTypes : props의 타입 지정
**// isRequired : 필수 propTypes 설정(App.js에서 꼭 값 적기)**

export default App;
```

> 안녕하세요, 제 이름은 김봄비입니다.
>
> children 값은 리액트 입니다.
>
> 필수! 제가 좋아하는 숫자는 3입니다.

---

- 클래스형 컴포넌트에서 props 사용하기
- 클래스형 컴포넌트에서 props 사용 : render 함수에서 this.props 비구조화 할당

MyComponent.js

```jsx
**import React, {Component} from 'react';**
import PropTypes from 'prop-types';

**// 클래스형 컴포넌트에서 props 사용 : render 함수에서 this.props 비구조화 할당**
class MyComponent extends Component {
  **render** () {
    **const { name, favoriteNumber, children } = this.props; // 비구조화 할당**
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.<br />
        children 값은 {children} 입니다.<br />
        필수! 제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: '기본 이름'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
```

---

- 또는 class 내부에서 지정하는 방법

MyComponent.js

```jsx
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트에서 props 사용 : render 함수에서 this.props 비구조화 할당
**// or class 내부에서 지정하는 방법**
class MyComponent extends Component {

  **static defaultProps = {
    name: '기본 이름'
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };**

  render () {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.<br />
        children 값은 {children} 입니다.<br />
        필수! 제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '기본 이름'
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

export default MyComponent;
```

---

### 3.4 state

- state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
- props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값
- 컴포넌트 자신은 해당 props를 읽기만 가능
- props 수정은 부모 컴포넌트에서 가능
- 클래스형 컴포넌트의 state
- 함수 컴포넌트의 useState 함수를 통한 state

- 클래스형 컴포넌트의 state

Counter.js

```jsx
import React, { Component } from "react";

// 클래스형 컴포넌트의 state
class Counter extends Component {
  // constructor메서드(컴포넌트의 생성자 메서드) : 컴포넌트에 state 설정
  constructor(props) {
    super(props);
    // state의 초기값 설정
    this.state = {
      number: 0,
    };
  }
  render() {
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
```

App.js

```jsx
import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
```

---

- state객체 안에 여러 값이 있을 때

Counter.js

```jsx
import React, { Component } from 'react';

// 클래스형 컴포넌트의 state
class Counter extends Component {
  // constructor메서드(컴포넌트의 생성자 메서드) : 컴포넌트에 state 설정
  constructor (props) {
    super(props);
    // state의 초기값 설정
    this.state = {
      number: 0,
      **fixedNumber: 0**
    };
  }
  render () {
    const { number, **fixedNumber** } = this.state; // state를 조회할 때는 this.state 로 조회
    return (
      <div>
        <h1>{number}</h1>
        **<h2>바뀌지 않는 값: { fixedNumber }</h2>**
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
**// state 안에 fixedNumber라는 또 다른 값 추가**

export default Counter;
```

App.js

```jsx
import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
```

---

- state를 constructor에서 꺼내기

Counter.js

```jsx
import React, { Component } from 'react';

// 클래스형 컴포넌트의 state
**// state를 constructor에서 꺼내기**
class Counter extends Component {
  // state의 초기값 설정
  **state = {
      number: 0,
      fixedNumber: 0
  }**
  render () {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state 로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: { fixedNumber }</h2>
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

export default Counter;
```

App.js

```jsx
import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
```

---

- this.setState 에 객체 대신 함수 인자 전달하기
  this.setState 를 사용하여 state 값 업데이트할 때는 상태가 비동기적으로 업데이트 됨.
  onClick에 설정한 함수 내부에서 this.setState 두 번 호출시 state 값이 바로 바뀌지 않음
  따라서 this.setState 사용할 때 객체 대신에 함수를 인자로 넣어줌

Counter.js

```jsx
import React, { Component } from 'react';

// 클래스형 컴포넌트의 state
// state를 constructor에서 꺼내기
// this.setState 에 객체 대신 함수 인자 전달하기
**// this.setState 를 사용하여 state 값 업데이트할 때는 상태가 비동기적으로 업데이트 됨.
// onClick에 설정한 함수 내부에서 this.setState 두 번 호출시 state 값이 바로 바뀌지 않음
// 따라서 this.setState 사용할 때 객체 대신에 함수를 인자로 넣어줌**
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
          onClick={() => {
            // this.setState를 사용해 state에 새로운 값 넣기
            // this.setState(prevState => {
              //   return {
              //     number: prevState.number + 1
              //   };
              // });

            **// 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미**
              this.setState(prevState => ({
                  number: prevState.number + 1
              }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

App.js

```jsx
import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
```

---

- this.setState 가 끝난 후 특정 작업 실행하기
  -> setState의 두 번재 파라미터로 콜백함수 등록하여 작업 처리

Counter.js

```jsx
import React, { Component } from 'react';

// 클래스형 컴포넌트의 state
// state를 constructor에서 꺼내기
// this.setState 에 객체 대신 함수 인자 전달하기
// this.setState 를 사용하여 state 값 업데이트할 때는 상태가 비동기적으로 업데이트 됨.
// onClick에 설정한 함수 내부에서 this.setState 두 번 호출시 state 값이 바로 바뀌지 않음
// 따라서 this.setState 사용할 때 객체 대신에 함수를 인자로 넣어줌
**// this.setState 가 끝난 후 특정 작업 실행하기 -> setState의 두 번재 파라미터로 콜백함수 등록하여 작업 처리**
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
        **<button**
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
          **onClick={() => {
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
        >**
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```

App.js

```jsx
import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
```

---

### 함수 컴포넌트에서 useState 사용하기

- Hooks 사용하여 useState 사용
- 배열 비구조화 할당(객체 비구조화 할당과 비슷)
  : 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해주는 문법
- 배열 비구조화 할당

```jsx
// 배열 비구조화 할당
const array = [1, 2];
const one = array[0];
const two = array[1];
// 위 코드를 배열 비구조화 할당을 사용하여 표현
const array1 = [1, 2];
const [one1, two2] = array1;
```

Say.js

```jsx
import React, { useState } from "react";

const Say = () => {
  // useState 함수 인자에 상태의 초깃값 넣어줌(객체가 아니어도 상관없음, 숫자,문자열 객체, 배열 다 됨)
  const [message, setMessage] = useState("");
  // 함수를 호출하면 배열이 반환 됨
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");
  // 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꿔 주는 함수(이 함수를 세터Setter 함수라고 부름)
  // 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 정해 줄 수 있음
  // (message,setMessage 말고 text,setText 라고 해도 됨)

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
```

App.js

```jsx
import React from "react";
import Say from "./Say";

const App = () => {
  return (
    <div>
      <Say />
    </div>
  );
};

export default App;
```

---

- 한 컴포넌트에서 useState 여러 번 사용하기

Say.js

```jsx
import React, { useState } from 'react';

**// 한 컴포넌트에서 useState 여러 번 사용하기**
const Say = () => {
  // useState 함수 인자에 상태의 초깃값 넣어줌(객체가 아니어도 상관없음, 숫자,문자열 객체, 배열 다 됨)
  const [message, setMessage] = useState('');
  // 함수를 호출하면 배열이 반환 됨
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  // 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꿔 주는 함수(이 함수를 세터Setter 함수라고 부름)
  // 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 정해 줄 수 있음
  // (message, setMessage 말고 text, setText 라고 해도 됨)

  **const [color, setColor] = useState('black');**

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 **style={{ color }}**>{message}</h1>
      **<button style={{color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
      <button style={{color: 'green'}} onClick={() => setColor('green')}>초록색</button>
      <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파란색</button>**
    </div>
  );
};

// 클래스형이든 함수형 컴포넌트든 state 사용할 때 주의사항
// state 값 바꿔야 할 때 setState 혹은 useState 를 통해 전달받은 세터 함수를 사용해야 한다.

export default Say;
```

App.js

```jsx
import React from "react";
import Say from "./Say";

const App = () => {
  return (
    <div>
      <Say />
    </div>
  );
};

export default App;
```

---

### 3.5 state 사용시 주의사항

- 클래스형이든 함수형 컴포넌트든 **state 사용할 때 주의사항**
- state 값 바꿔야 할 때 setState 혹은 useState 를 통해 전달받은 세터 함수를 사용해야 한다.
- 배열이나 객체 업데이트해야 할 때는 **스프레드(spread) 연산자** 사용하여 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트 한 후 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 한다.

```jsx
// 클래스형이든 함수형 컴포넌트든 state 사용할 때 주의사항
// state 값 바꿔야 할 때 setState 혹은 useState 를 통해 전달받은 세터 함수를 사용해야 한다.
// 배열이나 객체 업데이트해야 할 때는 스프레드(spread) 연산자 사용하여
// 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트 한 후
// 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 한다.

// 객체 다루기
const object = { a: 1, b: 2, c: 3 };
const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b값만 덮어 쓰기

// 배열 다루기
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: false },
];
let nextArray = array.concat({ id: 4 }); // 새 항목 추가
nextArray.filter((item) => item.id !== 2); // id 가 2인 항목 제거
nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item));
// id 가 1인 항목의 value 를 false 로 설정
```

---

### 3.6 정리

- props와 state는 둘 다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있다.
- props 는 부모 컴포넌트가 설정
  - props를 사용한다고 해서 값이 무조건 고정적이 것 아님
  - 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용 가능
- state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값 업데이트
- 앞으로 만들 일정 관리 애플리케이션 프로젝트에서 사용할 구조
  ![download.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d18d7fdf-ca3d-45ba-8706-398c909297a8/download.png)

---

# 4장 이벤트 핸들링

## 4.1 리액트의 이벤트 시스템

### 4.1.1 이벤트 사용시 주의 사항

1. 카멜 표기법으로 작성
2. 이벤트에 실행할 (자바스크립트) 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
3. DOM 요소에만 이벤트를 설정 할 수 있음

   div, button, input, form, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만

   직접 만든 컴포넌트에는 이벤트 자체적으로 설정 할 수 없음

   ```jsx
   <MyComponent onClick={doSomething} />
   // 그냥 이름이 onClick인 props를 MyComponent에게 전달하는 것일 뿐
   ```

   ex) MyComponent 에 onClick 값을 설정한다면 그냥 이름이 onClick인 props를 MyComponent에게 전달하는 것일 뿐

   → 컴포넌트에 자체적으로 이벤트를 설정 할 순 없지만 전달받은 props를 컴포넌트 낸부의 DOM 이벤트로 설정할 수는 있음

   ```jsx
   <div onClick={this.props.onClick}>{/* (...) */}</div>
   // 컴포넌트에 자체적으로 이벤트를 설정 할 순 없지만 전달받은 props를 컴포넌트 낸부의 DOM 이벤트로 설정할 수는 있음
   ```

---

### 4.1.2 리엑트 이벤트 종류

[https://reactjs.org/docs/events.html](https://reactjs.org/docs/events.html)

- [Clipboard Events](https://reactjs.org/docs/events.html#clipboard-events)
- [Composition Events](https://reactjs.org/docs/events.html#composition-events)
- [Keyboard Events](https://reactjs.org/docs/events.html#keyboard-events)
- [Focus Events](https://reactjs.org/docs/events.html#focus-events)
- [Form Events](https://reactjs.org/docs/events.html#form-events)
- [Generic Events](https://reactjs.org/docs/events.html#generic-events)
- [Mouse Events](https://reactjs.org/docs/events.html#mouse-events)
- [Pointer Events](https://reactjs.org/docs/events.html#pointer-events)
- [Selection Events](https://reactjs.org/docs/events.html#selection-events)
- [Touch Events](https://reactjs.org/docs/events.html#touch-events)
- [UI Events](https://reactjs.org/docs/events.html#ui-events)
- [Wheel Events](https://reactjs.org/docs/events.html#wheel-events)
- [Media Events](https://reactjs.org/docs/events.html#media-events)
- [Image Events](https://reactjs.org/docs/events.html#image-events)
- [Animation Events](https://reactjs.org/docs/events.html#animation-events)
- [Transition Events](https://reactjs.org/docs/events.html#transition-events)
- [Other Events](https://reactjs.org/docs/events.html#other-events)

---

## 4.2 예제로 이벤트 핸들링 익히기(클래스형 컴포넌트)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/37dcfcfb-919f-40e7-bc81-0f98058dc63f/Untitled.png)

### 4.2.2 onChange 이벤트 핸들링하기-\***\*합성 이벤트(SyntheticEvent),NativeEvent (고유 이벤트)\*\***

EventPractice.js

```jsx
import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          **onChange={
            (e) => {
              console.log(e);
							// console.log(e.target.value);
            }**
          }
        />
      </div>
    );
  }
}

export default EventPractice;
```

→ 콘솔에 기록되는 e 객체는 SyntheticEvent(합성이벤트)로
웹 브라우저의 네이티브 이벤트를 감싸는 객체이다.
네이티브 이벤트와 인터페이스가 같으므로
순수 자바스크립트에서 HTML 이벤트를 다룰 때와 똑같이 사용하면 됩니다.
SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면
이벤트가 초기화 되므로 정보를 참조 할 수 없다.
ex) 0.5초 뒤에 e객체를 참조하면 e객체 내부의 모든 값이 비워짐
만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해야 함

• persist() : React **v16까지 비동기 콜백함수에서 합성 이벤트 활용을 위해 사용된 메서드**이다. **v17부터는 풀링 최적화로 불필요**해짐.

---

\***\*합성 이벤트(SyntheticEvent)\*\***

[https://ko.reactjs.org/docs/events.html](https://ko.reactjs.org/docs/events.html)

_SyntheticEvent는 객체로 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 Wrapper 객체이다. 대부분의 인터페이스는 브라우저 고유 이벤트와 같다._

- 소프트웨어에서 래핑(Wrapping) 이란, 기본기능을 감싸는 새로운 기능을 만드는 것을 의미한다.

[https://abangpa1ace.tistory.com/129](https://abangpa1ace.tistory.com/129)

---

**NativeEvent (고유 이벤트)**

브라우저의 고유 이벤트를 확인하려고 한다면, **event.nativeEvent** attribute 를 사용하면 된다.

다만, SyntheticEvent가 브라우저의 NativeEvent와 **완벽하게 대응되는 것은 아니다.**

- 예를 들어, onMouseLeave 의 event.nativeEvent 는 mouseout 이벤트를 가리킨다.
- [https://abangpa1ace.tistory.com/129](https://abangpa1ace.tistory.com/129)
  **Form 이벤트 : <form> 태그의 주요 기능들에 대한 이벤트 리스너**
  - onChange
  - onInput
  - onInvalid
  - onReset
  - onSubmit

App.js

```jsx
import React from "react";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <div>
      <EventPractice />
    </div>
  );
};

export default App;
```

---

- 클래스형 컴포넌트 이벤트 연습 - state에 input값 담아 띄우기
  - 생성자 메서드인 constructor에서 state 초깃값을
  - 이벤트 핸들링 함수 내부에서 this.setState 메서드를 호출하여 state를 업데이트 해보기
  - 그 다음 input의 value 값을 state에 있는 값으로 설정

```jsx
import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트 이벤트 연습 - state에 input값 담아 띄우기</h1>
        <p>생성자 메서드인 constructor에서 state 초깃값을 설정하고</p>
        <p>
          이벤트 핸들링 함수 내부에서 this.setState 메서드를 호출하여 state를
          업데이트 해보기
        </p>
        <p>그 다음 input의 value 값을 state에 있는 값으로 설정</p>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        **{/* 입력한 값 state에 넣기 */}**
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          확인
        </button>
        **{/* state에 넣은 값 띄우기 */}**
      </div>
    );
  }
}

export default EventPractice;
```

App.js

```jsx
import React from "react";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <div>
      <EventPractice />
    </div>
  );
};

export default App;
```

---

### 4.2.3 임의 메서드 만들기

- (state 주의사항에서)이벤트에 실행 코드를 전달하는 것 아니라, 함수 형태의 값을 전달
- 따라서 이벤트 처리 시 렌더링 동시에 함수 만들어 전달함
- 다른 방법으로 함수를 미리 준비하여 전달(성능 비슷, 가독성 높음)
- 상황에 따라 렌더링 메서드 내부에서 함수를 만드는 것이 편할 때도 있음

- 이벤트 연습 - 임의의 메서드 만들기

EventPractice.js

```jsx
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  **// 함수를 미리 준비하여 전달(성능 비슷, 가독성 높음)**
  // 현재 constructor 함수에서 함수를 바인딩하는 작업이 이뤄지고 있음
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // 함수 호출 시 this는 호출부에 따라 결정
  // 클래스 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this 관계 끊김
  **// 메서드를 this와 바인딩(binding)하는 .bind(this); 작업필요**
  // 안그럼 this가 undefined 됨
  **// 메서드 이름은 자유지만 handle~ 로 암묵적 규칙**

  handleChange (e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick () {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습 - 임의의 메서드 만들기</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        {/* 입력한 값 state에 넣기 */}
        <button onClick={this.handleClick}>확인</button>
        {/* state에 넣은 값 띄우기 */}
      </div>
    );
  }
}

export default EventPractice;
```

App.js

```jsx
import React from "react";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <div>
      <EventPractice />
    </div>
  );
};

export default App;
```

---

- binding 편하게 하기 - Property Initializer Syntax를 사용한 메서드 작성
  - 화살표함수사용 - transform-class-properties 문법사용하여 화살표 함수 형태로 메서드 정의

EventPractice.js

```jsx
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  // constructor (props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleChange (e) {
  //   this.setState({
  //     message: e.target.value
  //   });
  // }

  **handleChange = (e) => {**
    this.setState({
      message: e.target.value
    });
  }

  // handleClick () {
  //   alert(this.state.message);
  //   this.setState({
  //     message: ''
  //   });
  // }

  **handleClick = () => {**
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <h2>이벤트 연습 - 임의의 메서드 만들기</h2>
        <h2>**binding 편하게 하기** - Property Initializer Syntax를 사용한 메서드 작성</h2>
        <p>transform-class-properties 문법사용하여 **화살표 함수 형태로 메서드 정의**</p>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        {/* 입력한 값 state에 넣기 */}
        <button onClick={this.handleClick}>확인</button>
        {/* state에 넣은 값 띄우기 */}
      </div>
    );
  }
}

export default EventPractice;
```

App.js

```jsx
import React from "react";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <div>
      <EventPractice />
    </div>
  );
};

export default App;
```

---

### 4.2.4 input 여러 개 다루기

- event 객체 활용 → [e.target.name](http://e.target.name) 값 사용
- 객체 안에서 key를 [ ] 로 감싸면 그 안에 넣은 래퍼런스가 가리키는 실제 값이 key 값으로 사용됨

EventPractice.js

```jsx
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    **username: '',**
    message: ''
  }

	// 객체 안에서 key를 [ ] 로 감싸면
  // 그 안에 넣은 래퍼런스가 가리키는 실제 값이 key 값으로 사용됨
  handleChange = (e) => {
    this.setState({
      **[e.target.name]: e.target.value**
    });
  }

  handleClick = () => {
    **alert(this.state.username + ': ' + this.state.message);**
    this.setState({
      **username: '',**
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습 - input 여러 개 다루기</h1>
        <p>**event 객체 활용 → e.target.name 값 사용**</p>
        <input
          type="text"
          name="username"
          placeholder="사용자명 입력"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        {/* 입력한 값 state에 넣기 */}
        <button onClick={this.handleClick}>확인</button>
        {/* state에 넣은 값 띄우기 */}
      </div>
    );
  }
}

export default EventPractice;
```

App.js

```jsx
import React from "react";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <div>
      <EventPractice />
    </div>
  );
};

export default App;
```

---

- **Enter눌러서 버튼 클릭하기 - onKeyPress 이벤트 핸들링**

EventPractice.js

```jsx
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }

  // 객체 안에서 key를 [ ] 로 감싸면
  // 그 안에 넣은 래퍼런스가 가리키는 실제 값이 key 값으로 사용됨
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  **// 임의 메서드 handleKeyPress 추가, 화살표 함수로 this binding함
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }**

  render() {
    return (
      <div>
        <h1>이벤트 연습 - input 여러 개 다루기</h1>
        <p>event 객체 활용 → e.target.name 값 사용</p>
        **<h2>Enter눌러서 버튼 클릭하기 - onKeyPress 이벤트 핸들링</h2>**
        <input
          type="text"
          name="username"
          placeholder="사용자명 입력"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          **onKeyPress={this.handleKeyPress}**
        />
        **{/* onKeyPress={this.handleKeyPress} 이벤트 실행 */}**
        {/* 입력한 값 state에 넣기 */}
        <button onClick={this.handleClick}>확인</button>
        {/* state에 넣은 값 띄우기 */}
      </div>
    );
  }
}

export default EventPractice;
```

App.js

```jsx
import React from "react";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <div>
      <EventPractice />
    </div>
  );
};

export default App;
```

---

## 4.3 함수 컴포넌트로 구현

EventPractiveFunction.js

```jsx
import React, { useState } from 'react';

**// 각각 input에 e.target.name을 활용하지 않고 onChange 관련 함수 두 개를 따로 만듦
// input이 많으면 e.target.name을 활용**
const EventPractiveFunction = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  **const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);**
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>함수 컴포넌트 이벤트 연습</h1>
      <input
          type="text"
          name="username"
          placeholder="사용자명 입력"
          value={username}
          onChange={onChangeUsername}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={message}
          onChange={onChangeMessage}
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractiveFunction;
```

App.js

```jsx
import React from "react";
import EventPractiveFunction from "./EventPractiveFunction";

const App = () => {
  return (
    <div>
      <EventPractiveFunction />
    </div>
  );
};

export default App;
```

---

- useState를 통해 사용하는 상태에 문자열이 아닌 객체 넣어보기

```jsx
import React, { useState } from 'react';

**// useState를 통해 사용하는 상태에 문자열이 아닌 객체 넣어보기
// 각각 input에 e.target.name을 활용하려면
// useState를 쓸 때 인풋 값들이 들어 있는 form 객체 사용**

const EventPractiveFunction = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;
  **const onChange = e => {
    const nextForm = {
      ...form, // 스프레드 연산자(spread) 기존의 form 내용을 이자리에 복사한 뒤
      [e.target.name]: e.target.value // 원하는 값 덮어 씌우기
    };
    setForm(nextForm);
  }**

  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ': ' + message);
    // setUsername('');
    // setMessage('');
    setForm({
      username: '',
      message: ''
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>함수 컴포넌트 이벤트 연습 - useState 사용하여 상태에 문자열 아닌 객체 넣어보기</h1>
      <input
          type="text"
          name="username"
          placeholder="사용자명 입력"
          value={username}
          **onChange={onChange}**
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={message}
          **onChange={onChange}**
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractiveFunction;
```

App.js

```jsx
import React from "react";
import EventPractiveFunction from "./EventPractiveFunction";

const App = () => {
  return (
    <div>
      <EventPractiveFunction />
    </div>
  );
};

export default App;
```

---

# 5장 ref: DOM에 이름달기

- ref : DOM을 꼭 직접적으로 건드려야 할 때 사용

비밀번호 입력 시 input 색상 변화

- nput에서는 onChange 이벤트가 발생하면 handleChange 를 호출하여 state의 password 값을 업데이트
- button에서는 onClick 이벤트가 발생하면 handleButtonClick을 호출하여 clicked 값 결과에 다라 success 또는 failure 값 설정
- 그리고 이 값에 따라 input 색상이 초록색,빨간색으로 나타남

ValidationSample.css

```css
.success {
  background-color: lightgreen;
}
.failure {
  background-color: lightcoral;
}
```

ValidationSample.js

```jsx
import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
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
```

App.js

```jsx
import React from "react";
import ValidationSample from "./ValidationSample";

const App = () => {
  return (
    <div>
      <ValidationSample />
    </div>
  );
};

export default App;
```

---

### 5.1.3 DOM을 꼭 사용해야 하는 상황

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

→ ref 사용하여 DOM에 직접적으로 접근하여 기능 구현

---

## 5.2 ref 사용

- ref 사용방법 두 가지

1. 콜백함수를 통한 ref 설정

   → 가장 기본적인 방법

   → ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달

   → 이 콜백 함수는 ref 값을 파라미터로 전달 받음

   → 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌의 멤버 변수로 설정

   ```jsx
   <input
     ref={(ref) => {
       this.태그요소이름지정 = ref;
     }}
   />
   ```

2. createRef를 통한 ref 설정

   → 리액트에 내장돼 있는 createRef 함수 사용

   → 짧은 코드

   → 리액트 v16.3부터 도입, 작동

   → 컴포넌트 내부에서 멤버 변수로 React.createeRef() 담아주기

   → 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주면 ref 설정 완료

   → 나중에 ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회하면 됨

   → 콜백함수를 사용할 때와 다른 점 : 뒷부분에 .current 넣는 점

   ```jsx
   import React, { Component } from "react";

   class RefSample extends Component {
     input = React.createRef();

     handleFocus = () => {
       this.input.current.focus();
     };

     render() {
       return (
         <div>
           <input ref={this.input} />
         </div>
       );
     }
   }

   export default RefSample;
   ```

---

### 5.2.3 적용 - input에 ref 달기

- button을 눌렀을 때 포커스가 input으로 자동 넘어가도록 작성하기

ValidationSample.js

```jsx
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
    **this.input.focus();
    // button을 눌렀을 때 포커스가 input으로 자동 넘어가도록 작성하기**
  }

  render() {
    return (
      <div>
        <input
          **ref={(ref) => this.input=ref}**
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
```

---

---

## 5.3 컴포넌트에 ref 달기

### 5.3.1 사용법

```jsx
<MyComponent
  ref={(ref) => {
    this.myComponent = ref;
  }}
/>
```

### 5.3.2 컴포넌트 초기 설정 - 스크롤박스 만들기

ScrollBox.js

```jsx
import React, { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
```

App.js

```jsx
import React from "react";
import ScrollBox from "./ScrollBox";

const App = () => {
  return (
    <div>
      <ScrollBox />
    </div>
  );
};

export default App;
```

---

### 5.3.3 컴포넌트에 메서드 생성

- 컴포넌트에 스크롤바 맨 아래쪽으로 내리는 메서드 만들기
- 자바스크립트로 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값들을 사용한다.
  - scrollTop : 세로 스크롤바 위치(0~350)
  - scrollHehight : 스크롤이 있는 박스 안의 div 높이(650)
  - clientHeight : 스크롤이 있는 박스의 높이(300)

```jsx
import React, { Component } from 'react';

class ScrollBox extends Component {
**// - 컴포넌트에 스크롤바 맨 아래쪽으로 내리는 메서드 만들기
// - 자바스크립트로 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값들을 사용한다.
// - scrollTop : 세로 스크롤바 위치(0~350)
// - scrollHehight : 스크롤이 있는 박스 안의 div 높이(650)
// - clientHeight : 스크롤이 있는 박스의 높이(300)

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 앞 코드에는 비구조화 할당 문법을 사용했음
        다음 코드와 같은 의미
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  }
  // -> 이렇게 만든 메서드 부모 컴포넌트(App)에서 ScrollBox에 ref를 달면 사용할 수 있음**

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
```

### 5.3.4 컴포넌트에 ref달고 내부 메서드 사용

App.js

```jsx
import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

// ref달고 버튼 만들어 버튼 클릭시 scrollTobBottom 메서드 실행
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
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
```

- onClick = {() => this.scrollBox.scrollToBottom()}
  - 문법상 onClick = {this.scrollBox.scrollToBottom} 같은 형식 괜찮을 거임
    하지만 컴포넌트가 처음 렌더링 될 때 this.scrollBox 값이 undefined 이므로
    this.scrollBox.scrollToBottom 값 읽어 오는 과정에서 오류 생김
  - 화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 메서드 실행하면
    버튼 누를 때(이미 한 번 렌더링을 해서 this.scrollBox를 설정한 시점)
    this.scrollBox.scrollToBottom 값을 읽어와 실행하므로 오류 안 남

---

### ref 사용시 주의할 점

1. ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 반드시 고려한 후 활용
2. 컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용
3. 서로 다른 컴포넌트끼릴 데이터를 교류할 때 ref를 사용한다면 잘못된 것

   앱 규모가 커지면 구조가 꼬여 유지보수 불가능

   컴포넌트끼리 데이터 교류할 때는 반드시 부모 ↔ 자식 흐름으로 교류해야 함

나중에 리덕스 혹은 Context API를 사용하여 효율적으로 교류

---

# 6장 컴포넌트 반복

## 6.1 반복되는 컴포넌트 - 자바스크립트 배열의 map() 함수

### 6.1.1 map() 문법

- arr.map(callback, [ thisArg ]) : 기존 배열로 새로운 배열을 만듦
  이 함수의 파라미터
  - callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지
    - currentValue : 현재 처리하고 있는 요소
    - index : 현재 처리하고 있는 요소의 index 값
    - array : 현재 처리하고 있는 원본 배열
  - thisArg(선택항목) : callback 함수 내부에서 사용할 this 레퍼런스

---

### 6.1.2 예제 - map 함수 사용

- map 함수 사용하여 배열 [1,2,3,4,5] 의 각 요소 제곱하여 새로운 배열 생성

```jsx
var number = [1, 2, 3, 4, 5];
var processed = number.map(function (num) {
  return num * num;
});
console.log(processed);

// (5) [1, 4, 9, 16, 25]
```

```jsx
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);
console.log(result);

// (5) [1, 4, 9, 16, 25]
```

---

## 6.2 데이터 배열을 컴포넌트 배열로 변환하기

IterationSample.js

```jsx
import React from 'react';

**// map() 사용했지만 key 값이 없다며 에러 뜸**
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map(name => <li>{name}</li>);
  return <ul>{nameList}</ul>;

  // return (
  //   <div>
  //     <ul>
  //       <li>눈사람</li>
  //       <li>얼음</li>
  //       <li>눈</li>
  //       <li>바람</li>
  //     </ul>
  //   </div>
  // );
};

export default IterationSample;
```

App.js

```jsx
import React, { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample />
      </div>
    );
  }
}

export default App;
```

---

## 6.3 key 사용 이유

- 리액트에서 key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용

### 6.3.1 key 설정

- key 값 설정 시 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정
- key 값은 언제나 유일한 값(고유값)으로 설정
- 고유 번호가 없을 때는 map 함수에 전달되는 콜백 함수의 인수인 index 값을 사용
- 고유값 없을 때만 index 사용. index를 key로 사용하면 배열이 변경될 때 효울적으로 리렌더링하지 못 함

IterationSample.js

```jsx
import React from 'react';

// map() 사용했지만 key 값이 없다며 에러 뜸
**// key 고유값 없을 때만 index 넣어주기
// index를 key로 사용하면 배열이 변경될 때 효울적으로 리렌더링하지 못 함**
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, **index**) => <li **key={index}**>{name}</li>);
  return <ul>{nameList}</ul>;

export default IterationSample;
```

App.js

```jsx
import React, { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample />
      </div>
    );
  }
}

export default App;
```

---

## 6.4 map() 과 key값 응용

### 6.4.1 초기 상태 설정하기(id로 고유값 부여)

- map() 함수 고유한 key 값 index 대신 [name.id](http://name.id/) 값으로 지정

```jsx
import React, { useState } from 'react';

**// map() 함수 고유한 key 값 index 대신 name.id 값으로 지정**
const IterationSample = () => {
  **const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);**
  **const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id**

  // const names = ['눈사람', '얼음', '눈', '바람'];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const nameList = names.map( name => <li key={name.id}>{name.text}</li>);

  return <ul>{nameList}</ul>;

};

export default IterationSample;
```

### 6.4.2 데이터 추가 기능 구현 - 새로운 list 등록 기능 + button 클릭 시 기존 input 내용 비우기 기능 구현

- ul 상단에 input, button 렌더링 후 input의 상태 관리하기

IterationSample.js

```jsx
import React, { useState } from 'react';

// map() 함수 고유한 key 값 index 대신 name.id 값으로 지정
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id
  // const names = ['눈사람', '얼음', '눈', '바람'];

  **const onChange = e => setInputText(e.target.value);**

  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const nameList = names.map( name => <li key={name.id}>{name.text}</li>);

  **// ul 상단에 input, button 렌더링 후 input의 상태 관리하기**
  return (
    <>
      **<input value={inputText} onChange={onChange} />
      <button>추가</button>**
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```

---

- 버튼 클릭시 호출할 onClick 함수 선언하여 button onClick 이벤트 설정
- onClick 함수에서는 배열의 내장 함수 concat 사용하여 새로운 항목을 추가한 배열 만들고
- setNames통해 상태 업데이트
- concat : 새로운 배열을 만듦 ( ≠ push : 기존 배열 변경)
- button이 클릭될 때 기존의 input 내용을 비우는 것도 구현

IterationSample.js

```jsx
import React, { useState } from 'react';

// map() 함수 고유한 key 값 index 대신 name.id 값으로 지정
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id
  // const names = ['눈사람', '얼음', '눈', '바람'];

  const onChange = e => setInputText(e.target.value);

  **// - 버튼 클릭시 호출할 onClick 함수 선언하여 button onClick 이벤트 설정
  // - onClick 함수에서는 배열의 내장 함수 concat 사용하여 새로운 항목을 추가한 배열 만들고
  // - setNames통해 상태 업데이트
  // - concat : 새로운 배열을 만듦 ( ≠ push : 기존 배열 변경)
  // - button이 클릭될 때 기존의 input 내용을 비우는 것도 구현
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해준다
    setNames(nextNames); // names 값을 업데이트 한다.
    setInputText(''); // inputText를 비운다.
  }**

  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const nameList = names.map( name => <li key={name.id}>{name.text}</li>);

  // ul 상단에 input, button 렌더링 후 input의 상태 관리하기
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button **onClick={onClick}**>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```

- 리액트에서 상태를 업데이트 할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 함
  → 불변성 유지 : 나중에 리액트 컴포넌트의 성능을 최적화할 수 있음

---

### 6.4.3 데이터 제거 기능 구현하기

- 각 항목을 더블 클릭 했을 때 해당 항목 제거 기능
- 불변성 유지하며 업데이트 해주기 → 새로운 배열 생성, 특정 항목 지울 때 사용
  - 배열 내장 함수 filter() : 배열에서 특정 조건을 만족하는 원소들만 쉽게 분류

IterationSample.js

```jsx
import React, { useState } from 'react';

// map() 함수 고유한 key 값 index 대신 name.id 값으로 지정
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id
  // const names = ['눈사람', '얼음', '눈', '바람'];

  const onChange = e => setInputText(e.target.value);

  // - 버튼 클릭시 호출할 onClick 함수 선언하여 button onClick 이벤트 설정
  // - onClick 함수에서는 배열의 내장 함수 concat 사용하여 새로운 항목을 추가한 배열 만들고
  // - setNames통해 상태 업데이트
  // - concat : 새로운 배열을 만듦 ( ≠ push : 기존 배열 변경)
  // - button이 클릭될 때 기존의 input 내용을 비우는 것도 구현
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해준다
    setNames(nextNames); // names 값을 업데이트 한다.
    setInputText(''); // inputText를 비운다.
  };

**//   ### 데이터 제거 기능 구현하기
// - 각 항목을 더블 클릭 했을 때 해당 항목 제거 기능
// - 불변성 유지하며 업데이트 해주기 → 새로운 배열 생성, 특정 항목 지울 때 사용
// - 배열 내장 함수 filter() : 배열에서 특정 조건을 만족하는 원소들만 쉽게 분류
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };**

  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const nameList = names.map(name => (
    <li key={name.id} **onDoubleClick={() => onRemove(name.id)}**>
      {name.text}
    </li>
  ));

  // ul 상단에 input, button 렌더링 후 input의 상태 관리하기
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```

---

# ⭐️⭐️⭐️정리(배열 렌더링 map(), key값 사용, 배열 직접 접근x concat, filter 사용⭐️⭐️⭐️

- 반복되는 데이터 렌더링 → 유동적인 배열 다룰 시 컴포넌트 배열 렌더링 할 때 key 값 설정!! 고유값으로
- key 값 설정 시 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정
- key 값은 언제나 유일한 값(고유값)으로 설정(중복X)
- 고유 번호가 없을 때는 map 함수에 전달되는 콜백 함수의 인수인 index 값을 사용(최후의 방법)
- 고유값 없을 때만 index 사용. index를 key로 사용하면 배열이 변경될 때 효울적으로 리렌더링하지 못 함
- 상태 안에서 배열 변형 시 배여러에 직접 접근하지X
- concat, filter 등의 배열 내장 함수 사용 → 새로운 배열 생성 후 이를 새로운 상태로 설정

---
