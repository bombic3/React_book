---
# [ย ๐ย ๋ฆฌ์กํธ๋ฅผ ๋ค๋ฃจ๋ ๊ธฐ์  ]

# 1์ฅ ๋ฆฌ์กํธ ์์
---

# 2์ฅ JSX

## 2.1 ์ฝ๋ ์ดํดํ๊ธฐ

- import๋ก ํ์ผ ๋ถ๋ฌ์ค๊ธฐ(Node.js์์๋ require ๊ตฌ๋ฌธ์ผ๋ก ํจํค์ง ๋ถ๋ฌ์ด)
- ์ด๋ฌํ ๊ธฐ๋ฅ ๋ธ๋ผ์ฐ์ ์์ ์ฌ์ฉํ๊ธฐ ์ํด ๋ฒ๋ค๋ฌ(bundler)์ฌ์ฉ(ํ์ผ์ ๋ฌถ๋ฏ์ด ์ฐ๊ฒฐํด ์ค)
  - ๋ฒ๋ค(bundle) : ๋ฌถ์
    ๊ธ์ ๊ทธ๋๋ก '๋ฌถ์'์ด๋ผ๋ ๋ป์ผ๋ก, ์ฌ๋ฌ ๊ฐ์ ์ ํ์ ๋ฌถ์ด ํ๋์ ๊พธ๋ฌ๋ฏธ(ํจํค์ง)๋ก ๋ง๋ค์ด์ง ์ ํ์ ๊ฐ๋ฆฌํจ๋ค. **๋ฒ๋ค** ์ํํธ์จ์ด๋ฅผ ๋ปํ๋ค.

## 2.2 JSX๋?

- JSX๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ํ์ฅ ๋ฌธ๋ฒ (XML๊ณผ ๋น์ทํ๊ฒ ์๊น)
- ์ด๋ฐ ํ์์ผ๋ก ์์ฑํ ์ฝ๋๋ ๋ธ๋ผ์ฐ์ ์์ ์คํ๋๊ธฐ ์ ์ ์ฝ๋๊ฐ ๋ฒ๋ค๋ง๋๋ ๊ณผ์ ์์ ๋ฐ๋ฒจ์ ์ฌ์ฉํ์ฌ ์ผ๋ฐ ์๋ฐ์คํฌ๋ฆฝํธ ํํ์ ์ฝ๋๋ก ๋ณํ ๋จ
- JSX๋ ๊ณต์์ ์ธ ์๋ฐ์คํฌ๋ฆฝํธ ๋ฌธ๋ฒ์ด ์๋(๋ฆฌ์กํธ๋ก ํ๋ก์ ํธ๋ฅผ ๊ฐ๋ฐํ  ๋ ์ฌ์ฉ, ๋ฐ๋ฒจ์ ํตํด(preset, plugin ์ค์ ) ๊ฐ๋ฐ์๋ค์ด ์์๋ก ๋ง๋  ๋ฌธ๋ฒ, ํน์ ์ฐจ๊ธฐ ์๋ฐ์คํฌ๋ฆฝํธ์ ๋ฌธ๋ฒ๋ค์ ์ฌ์ฉํ  ์ ์์

## 2.3 JSX์ ์ฅ์ 

## 2.4 JSX ๋ฌธ๋ฒ

```jsx
import logo from './logo.svg';
import './App.css';

function App () {
  const name = '๋ฆฌ์กํธ';
  return (
    <>
      {name === '๋ฆฌ์กํธ' ? (
        <h1>๋ฆฌ์กํธ ์๋๋ค.</h1>
      ) : (
        <h2>๋ฆฌ์กํธ๊ฐ ์๋๋๋ค.</h2>
      )}
    </>
  );
}
// ๋ฆฌ์ํธ์์ ์ฌ์ฉํ๋ ์ฝ๋ = JSX
// JSX๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ํ์ฅ๋ฌธ๋ฒ(XML๊ณผ ๋น์ท)

**// ๋ฐํ๋๋ return์์์ ๋๊ฐ์ ์์์ด์์ div๋ก ๋ฌถ๊ธฐ
// (๋ฆฌ์กํธv16์ด์)<Fragment> or <> ์ฌ์ฉ**

export default App;
```

---

Fragment ์ฌ์ฉ์ importํด์ฃผ๊ธฐ

```jsx
import { Fragment } from "react";

function App() {
  const name = "๋ฆฌ์กํธ";
  return (
    <Fragment>
      {name === "๋ฆฌ์กํธ" ? (
        <h1>๋ฆฌ์กํธ ์๋๋ค.</h1>
      ) : (
        <h2>๋ฆฌ์กํธ๊ฐ ์๋๋๋ค.</h2>
      )}
    </Fragment>
  );
}

export default App;
```

---

์ฐ์ฐ์ &&๋ฅผ ์ฌ์ฉํ ์กฐ๊ฑด๋ถ ๋ ๋๋ง

```jsx
import './App.css';

function App () {
  const name = '๋คผ์กํธ';
  return (
    <div>
      {name === '๋ฆฌ์ํธ' && <h1>๋ฆฌ์กํธ ์๋๋ค.</h1> : null}
    </div>
  );
}
// ๋ฆฌ์ํธ์์ ์ฌ์ฉํ๋ ์ฝ๋ = JSX
// JSX๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ํ์ฅ๋ฌธ๋ฒ(XML๊ณผ ๋น์ท)
// ๋ฐํ๋๋ return์์์ ๋๊ฐ์ ์์์ด์์ div๋ก ๋ฌถ๊ธฐ
// (๋ฆฌ์กํธv16์ด์)<Fragment> or <> ์ฌ์ฉ
// {} ์์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ฌธ๋ฒ ์ฌ์ฉ๊ฐ๋ฅ if ์๋จ ์กฐ๊ฑด๋ถ์ฐ์ฐ์(์ผํญ์ฐ์ฐ์) ๋จ
// () ๊ดํธ๋ ์ฃผ๋ก JSX๋ฅผ ์ฌ๋ฌ์ค๋ก ์์ฑํ  ๋ ๊ดํธ๋ก ๊ฐ์ธ๊ณ , ํ ์ค๋ก ํํํ  ์ ์๋ ๊ฑด ๊ฐ์ธ์ง ์๋๋ค. ํ์์ฌํญ ์๋.

export default App;
```

---

undefined โ {} ์์์ ๋ ๋๋งํ๋ ๊ฒ์ ๊ฐ๋ฅ

```jsx
import "./App.css";

function App() {
  const name = undefined;
  return (
    <div>
      {/* name || '๊ฐ์ด undefined์๋๋ค.'   ์คํ ์ ๋จ */}
      {name || "๋ฆฌ์กํธ"}
    </div>
  );
}

// undefined โ {} ์์์ ๋ ๋๋งํ๋ ๊ฒ์ ๊ฐ๋ฅ

export default App;
```

---

์ธ๋ผ์ธ ์คํ์ผ๋ง - style๊ฐ์ฒด ๋ฏธ๋ฆฌ ์ ์ธ ํ style ๊ฐ์ผ๋ก ์ง์ 

```jsx
import "./App.css";

function App() {
  const name = "๋ฆฌ์กํธ";
  const style = {
    // background-color๋ backgroundColor์ ๊ฐ์ด ์นด๋ฉํ๊ธฐ๋ฒ์ผ๋ก ์์ฑ
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16, // ๋จ์ ์๋ตํ๋ฉด px๋ก ์ง์ 
  };
  return <div style={style}>{name}</div>;
}
// style๊ฐ์ฒด ๋ฏธ๋ฆฌ ์ ์ธ ํ style ๊ฐ์ผ๋ก ์ง์ 

export default App;
```

---

์ธ๋ผ์ธ ์คํ์ผ๋ง - ๋ฐ๋ก style ๊ฐ ์ง์ ํ๊ธฐ

```jsx
import "./App.css";

function App() {
  const name = "๋ฆฌ์กํธ";
  return (
    <div
      style={{
        // background-color๋ backgroundColor์ ๊ฐ์ด ์นด๋ฉํ๊ธฐ๋ฒ์ผ๋ก ์์ฑ
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16, // ๋จ์ ์๋ตํ๋ฉด px๋ก ์ง์ 
      }}
    >
      {name}
    </div>
  );
}
// ๋ฐ๋ก style ๊ฐ ์ง์ ํ๊ธฐ

export default App;
```

---

ํด๋์ค๋ className์ผ๋ก ์ฌ์ฉ

```jsx
import "./App.css";

function App() {
  const name = "๋ฆฌ์กํธ";
  return <div className="react">{name}</div>;
}
// ํด๋์ค๋ className์ผ๋ก ์ฌ์ฉ

export default App;
```

๋ชจ๋ ํ๊ทธ ๋ซ์์ฃผ๊ธฐ

---

# 3์ฅ ์ปดํฌ๋ํธ

### 3.1 ํด๋์คํ ์ปดํฌ๋ํธ

- **๋ฆฌ์กํธ ๊ณต์ ๋งค๋ด์ผ์์๋ ํจ์ ์ปดํฌ๋ํธ์ Hooks๋ฅผ ์ฌ์ฉํ๋๋ก ๊ถ์ฅ**

ํด๋์คํ ์ปดํฌ๋ํธ

```jsx
**// ํด๋์คํ ์ปดํฌ๋ํธ ์ฌ์ฉ์ importํด์ค์ผ ํจ**
import React, { Component } from 'react';
import './App.css'

**// ํด๋์คํ ์ปดํฌ๋ํธ render(){} ํจ์ ํ์**
class App extends Component {
  render () {
    const name = 'react';
    return <div className='react'>{name}</div>
  }
}

// ํจ์ ์ปดํฌ๋ํธ
// function App () {
//   const name = '๋ฆฌ์กํธ';
//   return (
//     <div className="react">
//       {name}
//     </div>
//   );
// }

export default App;
```

---

### 3.2 ์ฒซ ์ปดํฌ๋ํธ ์์ฑ

MyComponent.js

```jsx
const MyComponent = () => {
  return <div>๋์ ์ฒซ๋ฒ์งธ ์ปดํฌ๋ํธ!</div>;
};
// function๋์  ํ์ดํ(arrow)ํจ์ ์ฌ์ฉํ์ฌ ๊ฐ๋ตํ๊ฒ ์์ฑ
// ํ์ดํ ํจ์๋ ๊ฐ์ ์ฐ์ฐํ์ฌ ๋ฐ๋ก ๋ฐํํด์ผ ํ  ๋ ์ฌ์ฉ

// ํ์ฅ์ Reactjs Code Snippet ์ค์นํ๋ฉด rsc ์ํฐ!
// ํด๋์คํ์ rcc ์ํฐ

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

- props : properties์ ์ค์๋ง๋ก ์ปดํฌ๋ํธ ์์ฑ์ ๊ฒฐ์ ํ  ๋ ์ฌ์ฉ
- ๋ถ๋ชจ ์ปดํฌ๋ํธ(App)์์ ์ค์ 

MyComponent.js

```jsx
const MyComponent = (props) => {
  return <div>์๋ํ์ธ์, ์  ์ด๋ฆ์ {props.name}์๋๋ค.</div>;
};
// props ์ฌ์ฉ

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
// props ๋ ๋๋ง

export default App;
```

---

- props ๊ฐ์ ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ์ฃผ๋ ๊ธฐ๋ณธ๊ฐ defaultProps

MyComponent.js

```jsx
const MyComponent = (props) => {
  return <div>์๋ํ์ธ์, ์  ์ด๋ฆ์ {props.name}์๋๋ค.</div>;
};

MyComponent.defaultProps = {
  name: "๊ธฐ๋ณธ ์ด๋ฆ",
};
// props ์ฌ์ฉ
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps

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
// props ๋ ๋๋ง
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps

export default App;
```

---

- props.children ๊ฐ

MyComponent.js

```jsx
const MyComponent = (props) => {
  return (
    <div>
      ์๋ํ์ธ์, ์  ์ด๋ฆ์ {props.name}์๋๋ค.
      <br />
      children ๊ฐ์ {props.children} ์๋๋ค.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "๊ธฐ๋ณธ ์ด๋ฆ",
};
// props ์ฌ์ฉ
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps
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
      <MyComponent>๋ฆฌ์กํธ</MyComponent>
    </div>
  );
};
// props ๋ ๋๋ง
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps
// props.children

export default App;
```

> ์๋ํ์ธ์, ์  ์ด๋ฆ์ย ๊ธฐ๋ณธ ์ด๋ฆ์๋๋ค.
>
> children ๊ฐ์ย ๋ฆฌ์กํธย ์๋๋ค.

---

- ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ผ๋ก props ์ถ์ถํ๊ธฐ(props. ํค์๋ ๋ถ์ด์ง ์๊ณ  ๋ฐ๋ก ๋ด๋ถ๊ฐ ์ถ์ถ)
- ํจ์ ์ปดํฌ๋ํธ์์ props๋ฅผ ์ฌ์ฉํ  ๋ ํ๋ผ๋ฏธํฐ ๋ถ๋ถ์์ ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ ์ฌ์ฉ

```jsx
const MyComponent = (props) => {
  **const { name, children } = props;**
  return (
    <div>
      {/* ์๋ํ์ธ์, ์  ์ด๋ฆ์ {props.name}์๋๋ค.<br /> */}
      {/* children ๊ฐ์ {props.children} ์๋๋ค. */}
      ์๋ํ์ธ์, ์  ์ด๋ฆ์ {name}์๋๋ค.<br />
      children ๊ฐ์ {children} ์๋๋ค.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '๊ธฐ๋ณธ ์ด๋ฆ'
};
// props ์ฌ์ฉ
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps
// props.children
**// ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ผ๋ก props ์ถ์ถํ๊ธฐ(props. ํค์๋ ๋ถ์ด์ง ์๊ณ  ๋ฐ๋ก ๋ด๋ถ๊ฐ ์ถ์ถ)
// ํจ์ ์ปดํฌ๋ํธ์์ props๋ฅผ ์ฌ์ฉํ  ๋ ํ๋ผ๋ฏธํฐ ๋ถ๋ถ์์ ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ ์ฌ์ฉ**

export default MyComponent;
```

โ ๋ ๊ฐ๋ตํ

```jsx
const MyComponent = **({name,children})** => {
  // const { name, children } = props;
  return (
    <div>
      {/* ์๋ํ์ธ์, ์  ์ด๋ฆ์ {props.name}์๋๋ค.<br /> */}
      {/* children ๊ฐ์ {props.children} ์๋๋ค. */}
      ์๋ํ์ธ์, ์  ์ด๋ฆ์ {name}์๋๋ค.<br />
      children ๊ฐ์ {children} ์๋๋ค.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '๊ธฐ๋ณธ ์ด๋ฆ'
};
// props ์ฌ์ฉ
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps
// props.children
**// ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ผ๋ก props ์ถ์ถํ๊ธฐ(props. ํค์๋ ๋ถ์ด์ง ์๊ณ  ๋ฐ๋ก ๋ด๋ถ๊ฐ ์ถ์ถ)
// ํจ์ ์ปดํฌ๋ํธ์์ props๋ฅผ ์ฌ์ฉํ  ๋ ํ๋ผ๋ฏธํฐ ๋ถ๋ถ์์ ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ ์ฌ์ฉ**

export default MyComponent;
```

---

- propTypes : props์ ํ์ ์ง์ 

MyComponent.js

```jsx
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      ์๋ํ์ธ์, ์  ์ด๋ฆ์ {name}์๋๋ค.<br />
      children ๊ฐ์ {children} ์๋๋ค.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '๊ธฐ๋ณธ ์ด๋ฆ'
};
// props ์ฌ์ฉ
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps
// props.children
// ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ผ๋ก props ์ถ์ถํ๊ธฐ(props. ํค์๋ ๋ถ์ด์ง ์๊ณ  ๋ฐ๋ก ๋ด๋ถ๊ฐ ์ถ์ถ)
// ํจ์ ์ปดํฌ๋ํธ์์ props๋ฅผ ์ฌ์ฉํ  ๋ ํ๋ผ๋ฏธํฐ ๋ถ๋ถ์์ ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ ์ฌ์ฉ

**MyComponent.propTypes = {
  name: PropTypes.string
};
// propTypes : props์ ํ์ ์ง์ **

export default MyComponent;
```

App.js

```jsx
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent **name="๋ฌธ์๋ก"**>๋ฆฌ์กํธ</MyComponent>
    </div>
  );
};
// props ๋ ๋๋ง
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps
// props.children
// ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ผ๋ก props ์ถ์ถํ๊ธฐ(props. ํค์๋ ๋ถ์ด์ง ์๊ณ  ๋ฐ๋ก ๋ด๋ถ๊ฐ ์ถ์ถ)
// ํจ์ ์ปดํฌ๋ํธ์์ props๋ฅผ ์ฌ์ฉํ  ๋ ํ๋ผ๋ฏธํฐ ๋ถ๋ถ์์ ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ ์ฌ์ฉ

**// propTypes : props์ ํ์ ์ง์ **

export default App;
```

> ์๋ํ์ธ์, ์  ์ด๋ฆ์ย ๋ฌธ์๋ก์๋๋ค.
>
> children ๊ฐ์ย ๋ฆฌ์กํธย ์๋๋ค.

---

- isRequired : ํ์ propTypes ์ค์ (App.js์์ ๊ผญ ๊ฐ ์ ๊ธฐ)

MyComponent.js

```jsx
import PropTypes from 'prop-types';

const MyComponent = ({ name, **favoriteNumber**, children }) => {
  return (
    <div>
      ์๋ํ์ธ์, ์  ์ด๋ฆ์ {name}์๋๋ค.<br />
      children ๊ฐ์ {children} ์๋๋ค.<br />
      ํ์! ์ ๊ฐ ์ข์ํ๋ ์ซ์๋ {**favoriteNumber**}์๋๋ค.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '๊ธฐ๋ณธ ์ด๋ฆ'
};
// props ์ฌ์ฉ
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps
// props.children
// ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ผ๋ก props ์ถ์ถํ๊ธฐ(props. ํค์๋ ๋ถ์ด์ง ์๊ณ  ๋ฐ๋ก ๋ด๋ถ๊ฐ ์ถ์ถ)
// ํจ์ ์ปดํฌ๋ํธ์์ props๋ฅผ ์ฌ์ฉํ  ๋ ํ๋ผ๋ฏธํฐ ๋ถ๋ถ์์ ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ ์ฌ์ฉ

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: **PropTypes.number.isRequired**
};
// propTypes : props์ ํ์ ์ง์ 
**// isRequired : ํ์ propTypes ์ค์ (App.js์์ ๊ผญ ๊ฐ ์ ๊ธฐ)**

export default MyComponent;
```

App.js

```jsx
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent name="๊น๋ด๋น" **favoriteNumber={3}**>๋ฆฌ์กํธ</MyComponent>
    </div>
  );
};
// props ๋ ๋๋ง
// props ๊ฐ์ ๋ฐ๋ก ์ง์ ํ์ง ์์์ ๋ ๋ณด์ฌ ์ค ๊ธฐ๋ณธ๊ฐ defaultProps
// props.children
// ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ผ๋ก props ์ถ์ถํ๊ธฐ(props. ํค์๋ ๋ถ์ด์ง ์๊ณ  ๋ฐ๋ก ๋ด๋ถ๊ฐ ์ถ์ถ)
// ํจ์ ์ปดํฌ๋ํธ์์ props๋ฅผ ์ฌ์ฉํ  ๋ ํ๋ผ๋ฏธํฐ ๋ถ๋ถ์์ ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ ์ฌ์ฉ

// propTypes : props์ ํ์ ์ง์ 
**// isRequired : ํ์ propTypes ์ค์ (App.js์์ ๊ผญ ๊ฐ ์ ๊ธฐ)**

export default App;
```

> ์๋ํ์ธ์, ์  ์ด๋ฆ์ย ๊น๋ด๋น์๋๋ค.
>
> children ๊ฐ์ย ๋ฆฌ์กํธย ์๋๋ค.
>
> ํ์! ์ ๊ฐ ์ข์ํ๋ ์ซ์๋ย 3์๋๋ค.

---

- ํด๋์คํ ์ปดํฌ๋ํธ์์ props ์ฌ์ฉํ๊ธฐ
- ํด๋์คํ ์ปดํฌ๋ํธ์์ props ์ฌ์ฉ : render ํจ์์์ this.props ๋น๊ตฌ์กฐํ ํ ๋น

MyComponent.js

```jsx
**import React, {Component} from 'react';**
import PropTypes from 'prop-types';

**// ํด๋์คํ ์ปดํฌ๋ํธ์์ props ์ฌ์ฉ : render ํจ์์์ this.props ๋น๊ตฌ์กฐํ ํ ๋น**
class MyComponent extends Component {
  **render** () {
    **const { name, favoriteNumber, children } = this.props; // ๋น๊ตฌ์กฐํ ํ ๋น**
    return (
      <div>
        ์๋ํ์ธ์, ์  ์ด๋ฆ์ {name}์๋๋ค.<br />
        children ๊ฐ์ {children} ์๋๋ค.<br />
        ํ์! ์ ๊ฐ ์ข์ํ๋ ์ซ์๋ {favoriteNumber}์๋๋ค.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: '๊ธฐ๋ณธ ์ด๋ฆ'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
```

---

- ๋๋ class ๋ด๋ถ์์ ์ง์ ํ๋ ๋ฐฉ๋ฒ

MyComponent.js

```jsx
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// ํด๋์คํ ์ปดํฌ๋ํธ์์ props ์ฌ์ฉ : render ํจ์์์ this.props ๋น๊ตฌ์กฐํ ํ ๋น
**// or class ๋ด๋ถ์์ ์ง์ ํ๋ ๋ฐฉ๋ฒ**
class MyComponent extends Component {

  **static defaultProps = {
    name: '๊ธฐ๋ณธ ์ด๋ฆ'
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };**

  render () {
    const { name, favoriteNumber, children } = this.props; // ๋น๊ตฌ์กฐํ ํ ๋น
    return (
      <div>
        ์๋ํ์ธ์, ์  ์ด๋ฆ์ {name}์๋๋ค.<br />
        children ๊ฐ์ {children} ์๋๋ค.<br />
        ํ์! ์ ๊ฐ ์ข์ํ๋ ์ซ์๋ {favoriteNumber}์๋๋ค.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '๊ธฐ๋ณธ ์ด๋ฆ'
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

export default MyComponent;
```

---

### 3.4 state

- state๋ ์ปดํฌ๋ํธ ๋ด๋ถ์์ ๋ฐ๋ ์ ์๋ ๊ฐ์ ์๋ฏธ
- props๋ ์ปดํฌ๋ํธ๊ฐ ์ฌ์ฉ๋๋ ๊ณผ์ ์์ ๋ถ๋ชจ ์ปดํฌ๋ํธ๊ฐ ์ค์ ํ๋ ๊ฐ
- ์ปดํฌ๋ํธ ์์ ์ ํด๋น props๋ฅผ ์ฝ๊ธฐ๋ง ๊ฐ๋ฅ
- props ์์ ์ ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ ๊ฐ๋ฅ
- ํด๋์คํ ์ปดํฌ๋ํธ์ state
- ํจ์ ์ปดํฌ๋ํธ์ useState ํจ์๋ฅผ ํตํ state

- ํด๋์คํ ์ปดํฌ๋ํธ์ state

Counter.js

```jsx
import React, { Component } from "react";

// ํด๋์คํ ์ปดํฌ๋ํธ์ state
class Counter extends Component {
  // constructor๋ฉ์๋(์ปดํฌ๋ํธ์ ์์ฑ์ ๋ฉ์๋) : ์ปดํฌ๋ํธ์ state ์ค์ 
  constructor(props) {
    super(props);
    // state์ ์ด๊ธฐ๊ฐ ์ค์ 
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state; // state๋ฅผ ์กฐํํ  ๋๋ this.state ๋ก ์กฐํ
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick์ ํ ์ดํด ๋ฒํผ์ด ํด๋ฆญ๋์์ ๋ ํธ์ถํ  ํจ์๋ฅผ ์ง์ 
          onClick={() => {
            // this.setState๋ฅผ ์ฌ์ฉํด state์ ์๋ก์ด ๊ฐ ๋ฃ๊ธฐ
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

// state๋ ์ปดํฌ๋ํธ ๋ด๋ถ์์ ๋ฐ๋ ์ ์๋ ๊ฐ์ ์๋ฏธ
// props๋ ์ปดํฌ๋ํธ๊ฐ ์ฌ์ฉ๋๋ ๊ณผ์ ์์ ๋ถ๋ชจ ์ปดํฌ๋ํธ๊ฐ ์ค์ ํ๋ ๊ฐ
// ์ปดํฌ๋ํธ ์์ ์ ํด๋น props๋ฅผ ์ฝ๊ธฐ๋ง ๊ฐ๋ฅ
// props ์์ ์ ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ ๊ฐ๋ฅ
// ํด๋์คํ ์ปดํฌ๋ํธ์ state ์ ํจ์ ์ปดํฌ๋ํธ์ useState ํจ์๋ฅผ ํตํ state

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

- state๊ฐ์ฒด ์์ ์ฌ๋ฌ ๊ฐ์ด ์์ ๋

Counter.js

```jsx
import React, { Component } from 'react';

// ํด๋์คํ ์ปดํฌ๋ํธ์ state
class Counter extends Component {
  // constructor๋ฉ์๋(์ปดํฌ๋ํธ์ ์์ฑ์ ๋ฉ์๋) : ์ปดํฌ๋ํธ์ state ์ค์ 
  constructor (props) {
    super(props);
    // state์ ์ด๊ธฐ๊ฐ ์ค์ 
    this.state = {
      number: 0,
      **fixedNumber: 0**
    };
  }
  render () {
    const { number, **fixedNumber** } = this.state; // state๋ฅผ ์กฐํํ  ๋๋ this.state ๋ก ์กฐํ
    return (
      <div>
        <h1>{number}</h1>
        **<h2>๋ฐ๋์ง ์๋ ๊ฐ: { fixedNumber }</h2>**
        <button
          // onClick์ ํ ์ดํด ๋ฒํผ์ด ํด๋ฆญ๋์์ ๋ ํธ์ถํ  ํจ์๋ฅผ ์ง์ 
          onClick={() => {
            // this.setState๋ฅผ ์ฌ์ฉํด state์ ์๋ก์ด ๊ฐ ๋ฃ๊ธฐ
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

// state๋ ์ปดํฌ๋ํธ ๋ด๋ถ์์ ๋ฐ๋ ์ ์๋ ๊ฐ์ ์๋ฏธ
// props๋ ์ปดํฌ๋ํธ๊ฐ ์ฌ์ฉ๋๋ ๊ณผ์ ์์ ๋ถ๋ชจ ์ปดํฌ๋ํธ๊ฐ ์ค์ ํ๋ ๊ฐ
// ์ปดํฌ๋ํธ ์์ ์ ํด๋น props๋ฅผ ์ฝ๊ธฐ๋ง ๊ฐ๋ฅ
// props ์์ ์ ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ ๊ฐ๋ฅ
// ํด๋์คํ ์ปดํฌ๋ํธ์ state ์ ํจ์ ์ปดํฌ๋ํธ์ useState ํจ์๋ฅผ ํตํ state
**// state ์์ fixedNumber๋ผ๋ ๋ ๋ค๋ฅธ ๊ฐ ์ถ๊ฐ**

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

- state๋ฅผ constructor์์ ๊บผ๋ด๊ธฐ

Counter.js

```jsx
import React, { Component } from 'react';

// ํด๋์คํ ์ปดํฌ๋ํธ์ state
**// state๋ฅผ constructor์์ ๊บผ๋ด๊ธฐ**
class Counter extends Component {
  // state์ ์ด๊ธฐ๊ฐ ์ค์ 
  **state = {
      number: 0,
      fixedNumber: 0
  }**
  render () {
    const { number, fixedNumber } = this.state; // state๋ฅผ ์กฐํํ  ๋๋ this.state ๋ก ์กฐํ
    return (
      <div>
        <h1>{number}</h1>
        <h2>๋ฐ๋์ง ์๋ ๊ฐ: { fixedNumber }</h2>
        <button
          // onClick์ ํ ์ดํด ๋ฒํผ์ด ํด๋ฆญ๋์์ ๋ ํธ์ถํ  ํจ์๋ฅผ ์ง์ 
          onClick={() => {
            // this.setState๋ฅผ ์ฌ์ฉํด state์ ์๋ก์ด ๊ฐ ๋ฃ๊ธฐ
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

- this.setState ์ ๊ฐ์ฒด ๋์  ํจ์ ์ธ์ ์ ๋ฌํ๊ธฐ
  this.setState ๋ฅผ ์ฌ์ฉํ์ฌ state ๊ฐ ์๋ฐ์ดํธํ  ๋๋ ์ํ๊ฐ ๋น๋๊ธฐ์ ์ผ๋ก ์๋ฐ์ดํธ ๋จ.
  onClick์ ์ค์ ํ ํจ์ ๋ด๋ถ์์ this.setState ๋ ๋ฒ ํธ์ถ์ state ๊ฐ์ด ๋ฐ๋ก ๋ฐ๋์ง ์์
  ๋ฐ๋ผ์ this.setState ์ฌ์ฉํ  ๋ ๊ฐ์ฒด ๋์ ์ ํจ์๋ฅผ ์ธ์๋ก ๋ฃ์ด์ค

Counter.js

```jsx
import React, { Component } from 'react';

// ํด๋์คํ ์ปดํฌ๋ํธ์ state
// state๋ฅผ constructor์์ ๊บผ๋ด๊ธฐ
// this.setState ์ ๊ฐ์ฒด ๋์  ํจ์ ์ธ์ ์ ๋ฌํ๊ธฐ
**// this.setState ๋ฅผ ์ฌ์ฉํ์ฌ state ๊ฐ ์๋ฐ์ดํธํ  ๋๋ ์ํ๊ฐ ๋น๋๊ธฐ์ ์ผ๋ก ์๋ฐ์ดํธ ๋จ.
// onClick์ ์ค์ ํ ํจ์ ๋ด๋ถ์์ this.setState ๋ ๋ฒ ํธ์ถ์ state ๊ฐ์ด ๋ฐ๋ก ๋ฐ๋์ง ์์
// ๋ฐ๋ผ์ this.setState ์ฌ์ฉํ  ๋ ๊ฐ์ฒด ๋์ ์ ํจ์๋ฅผ ์ธ์๋ก ๋ฃ์ด์ค**
class Counter extends Component {
  // state์ ์ด๊ธฐ๊ฐ ์ค์ 
  state = {
      number: 0,
      fixedNumber: 0
  }
  render () {
    const { number, fixedNumber } = this.state; // state๋ฅผ ์กฐํํ  ๋๋ this.state ๋ก ์กฐํ
    return (
      <div>
        <h1>{number}</h1>
        <h2>๋ฐ๋์ง ์๋ ๊ฐ: { fixedNumber }</h2>
        <button
          // onClick์ ํตํด ๋ฒํผ์ด ํด๋ฆญ๋์์ ๋ ํธ์ถํ  ํจ์๋ฅผ ์ง์ 
          onClick={() => {
            // this.setState๋ฅผ ์ฌ์ฉํด state์ ์๋ก์ด ๊ฐ ๋ฃ๊ธฐ
            // this.setState(prevState => {
              //   return {
              //     number: prevState.number + 1
              //   };
              // });

            **// ์ ์ฝ๋์ ์๋ ์ฝ๋๋ ์์ ํ ๋๊ฐ์ ๊ธฐ๋ฅ์ ํฉ๋๋ค.
            // ์๋ ์ฝ๋๋ ํจ์์์ ๋ฐ๋ก ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค๋ ์๋ฏธ**
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

- this.setState ๊ฐ ๋๋ ํ ํน์  ์์ ์คํํ๊ธฐ
  -> setState์ ๋ ๋ฒ์ฌ ํ๋ผ๋ฏธํฐ๋ก ์ฝ๋ฐฑํจ์ ๋ฑ๋กํ์ฌ ์์ ์ฒ๋ฆฌ

Counter.js

```jsx
import React, { Component } from 'react';

// ํด๋์คํ ์ปดํฌ๋ํธ์ state
// state๋ฅผ constructor์์ ๊บผ๋ด๊ธฐ
// this.setState ์ ๊ฐ์ฒด ๋์  ํจ์ ์ธ์ ์ ๋ฌํ๊ธฐ
// this.setState ๋ฅผ ์ฌ์ฉํ์ฌ state ๊ฐ ์๋ฐ์ดํธํ  ๋๋ ์ํ๊ฐ ๋น๋๊ธฐ์ ์ผ๋ก ์๋ฐ์ดํธ ๋จ.
// onClick์ ์ค์ ํ ํจ์ ๋ด๋ถ์์ this.setState ๋ ๋ฒ ํธ์ถ์ state ๊ฐ์ด ๋ฐ๋ก ๋ฐ๋์ง ์์
// ๋ฐ๋ผ์ this.setState ์ฌ์ฉํ  ๋ ๊ฐ์ฒด ๋์ ์ ํจ์๋ฅผ ์ธ์๋ก ๋ฃ์ด์ค
**// this.setState ๊ฐ ๋๋ ํ ํน์  ์์ ์คํํ๊ธฐ -> setState์ ๋ ๋ฒ์ฌ ํ๋ผ๋ฏธํฐ๋ก ์ฝ๋ฐฑํจ์ ๋ฑ๋กํ์ฌ ์์ ์ฒ๋ฆฌ**
class Counter extends Component {
  // state์ ์ด๊ธฐ๊ฐ ์ค์ 
  state = {
      number: 0,
      fixedNumber: 0
  }
  render () {
    const { number, fixedNumber } = this.state; // state๋ฅผ ์กฐํํ  ๋๋ this.state ๋ก ์กฐํ
    return (
      <div>
        <h1>{number}</h1>
        <h2>๋ฐ๋์ง ์๋ ๊ฐ: { fixedNumber }</h2>
        **<button**
          // onClick์ ํตํด ๋ฒํผ์ด ํด๋ฆญ๋์์ ๋ ํธ์ถํ  ํจ์๋ฅผ ์ง์ 
          // onClick={() => {
            // this.setState๋ฅผ ์ฌ์ฉํด state์ ์๋ก์ด ๊ฐ ๋ฃ๊ธฐ
            // this.setState(prevState => {
              //   return {
                //     number: prevState.number + 1
                //   };
                // });

                // ์ ์ฝ๋์ ์๋ ์ฝ๋๋ ์์ ํ ๋๊ฐ์ ๊ธฐ๋ฅ์ ํฉ๋๋ค.
                // ์๋ ์ฝ๋๋ ํจ์์์ ๋ฐ๋ก ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค๋ ์๋ฏธ
                // this.setState(prevState => ({
                  //     number: prevState.number + 1
                  // }));
          **onClick={() => {
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log('๋ฐฉ๊ธ setState๊ฐ ํธ์ถ๋์์ต๋๋ค.');
                // ๋ฐฉ๊ธ setState๊ฐ ํธ์ถ๋์์ต๋๋ค.
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

### ํจ์ ์ปดํฌ๋ํธ์์ useState ์ฌ์ฉํ๊ธฐ

- Hooks ์ฌ์ฉํ์ฌ useState ์ฌ์ฉ
- ๋ฐฐ์ด ๋น๊ตฌ์กฐํ ํ ๋น(๊ฐ์ฒด ๋น๊ตฌ์กฐํ ํ ๋น๊ณผ ๋น์ท)
  : ๋ฐฐ์ด ์์ ๋ค์ด ์๋ ๊ฐ์ ์ฝ๊ฒ ์ถ์ถํ  ์ ์๋๋ก ํด์ฃผ๋ ๋ฌธ๋ฒ
- ๋ฐฐ์ด ๋น๊ตฌ์กฐํ ํ ๋น

```jsx
// ๋ฐฐ์ด ๋น๊ตฌ์กฐํ ํ ๋น
const array = [1, 2];
const one = array[0];
const two = array[1];
// ์ ์ฝ๋๋ฅผ ๋ฐฐ์ด ๋น๊ตฌ์กฐํ ํ ๋น์ ์ฌ์ฉํ์ฌ ํํ
const array1 = [1, 2];
const [one1, two2] = array1;
```

Say.js

```jsx
import React, { useState } from "react";

const Say = () => {
  // useState ํจ์ ์ธ์์ ์ํ์ ์ด๊น๊ฐ ๋ฃ์ด์ค(๊ฐ์ฒด๊ฐ ์๋์ด๋ ์๊ด์์, ์ซ์,๋ฌธ์์ด ๊ฐ์ฒด, ๋ฐฐ์ด ๋ค ๋จ)
  const [message, setMessage] = useState("");
  // ํจ์๋ฅผ ํธ์ถํ๋ฉด ๋ฐฐ์ด์ด ๋ฐํ ๋จ
  const onClickEnter = () => setMessage("์๋ํ์ธ์!");
  const onClickLeave = () => setMessage("์๋ํ ๊ฐ์ธ์!");
  // ๋ฐฐ์ด์ ์ฒซ ๋ฒ์งธ ์์๋ ํ์ฌ ์ํ์ด๊ณ , ๋ ๋ฒ์งธ ์์๋ ์ํ๋ฅผ ๋ฐ๊ฟ ์ฃผ๋ ํจ์(์ด ํจ์๋ฅผ ์ธํฐSetter ํจ์๋ผ๊ณ  ๋ถ๋ฆ)
  // ๊ทธ๋ฆฌ๊ณ  ๋ฐฐ์ด ๋น๊ตฌ์กฐํ ํ ๋น์ ํตํด ์ด๋ฆ์ ์์ ๋กญ๊ฒ ์ ํด ์ค ์ ์์
  // (message,setMessage ๋ง๊ณ  text,setText ๋ผ๊ณ  ํด๋ ๋จ)

  return (
    <div>
      <button onClick={onClickEnter}>์์ฅ</button>
      <button onClick={onClickLeave}>ํด์ฅ</button>
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

- ํ ์ปดํฌ๋ํธ์์ useState ์ฌ๋ฌ ๋ฒ ์ฌ์ฉํ๊ธฐ

Say.js

```jsx
import React, { useState } from 'react';

**// ํ ์ปดํฌ๋ํธ์์ useState ์ฌ๋ฌ ๋ฒ ์ฌ์ฉํ๊ธฐ**
const Say = () => {
  // useState ํจ์ ์ธ์์ ์ํ์ ์ด๊น๊ฐ ๋ฃ์ด์ค(๊ฐ์ฒด๊ฐ ์๋์ด๋ ์๊ด์์, ์ซ์,๋ฌธ์์ด ๊ฐ์ฒด, ๋ฐฐ์ด ๋ค ๋จ)
  const [message, setMessage] = useState('');
  // ํจ์๋ฅผ ํธ์ถํ๋ฉด ๋ฐฐ์ด์ด ๋ฐํ ๋จ
  const onClickEnter = () => setMessage('์๋ํ์ธ์!');
  const onClickLeave = () => setMessage('์๋ํ ๊ฐ์ธ์!');
  // ๋ฐฐ์ด์ ์ฒซ ๋ฒ์งธ ์์๋ ํ์ฌ ์ํ์ด๊ณ , ๋ ๋ฒ์งธ ์์๋ ์ํ๋ฅผ ๋ฐ๊ฟ ์ฃผ๋ ํจ์(์ด ํจ์๋ฅผ ์ธํฐSetter ํจ์๋ผ๊ณ  ๋ถ๋ฆ)
  // ๊ทธ๋ฆฌ๊ณ  ๋ฐฐ์ด ๋น๊ตฌ์กฐํ ํ ๋น์ ํตํด ์ด๋ฆ์ ์์ ๋กญ๊ฒ ์ ํด ์ค ์ ์์
  // (message, setMessage ๋ง๊ณ  text, setText ๋ผ๊ณ  ํด๋ ๋จ)

  **const [color, setColor] = useState('black');**

  return (
    <div>
      <button onClick={onClickEnter}>์์ฅ</button>
      <button onClick={onClickLeave}>ํด์ฅ</button>
      <h1 **style={{ color }}**>{message}</h1>
      **<button style={{color: 'red'}} onClick={() => setColor('red')}>๋นจ๊ฐ์</button>
      <button style={{color: 'green'}} onClick={() => setColor('green')}>์ด๋ก์</button>
      <button style={{color: 'blue'}} onClick={() => setColor('blue')}>ํ๋์</button>**
    </div>
  );
};

// ํด๋์คํ์ด๋  ํจ์ํ ์ปดํฌ๋ํธ๋  state ์ฌ์ฉํ  ๋ ์ฃผ์์ฌํญ
// state ๊ฐ ๋ฐ๊ฟ์ผ ํ  ๋ setState ํน์ useState ๋ฅผ ํตํด ์ ๋ฌ๋ฐ์ ์ธํฐ ํจ์๋ฅผ ์ฌ์ฉํด์ผ ํ๋ค.

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

### 3.5 state ์ฌ์ฉ์ ์ฃผ์์ฌํญ

- ํด๋์คํ์ด๋  ํจ์ํ ์ปดํฌ๋ํธ๋  **state ์ฌ์ฉํ  ๋ ์ฃผ์์ฌํญ**
- state ๊ฐ ๋ฐ๊ฟ์ผ ํ  ๋ setState ํน์ useState ๋ฅผ ํตํด ์ ๋ฌ๋ฐ์ ์ธํฐ ํจ์๋ฅผ ์ฌ์ฉํด์ผ ํ๋ค.
- ๋ฐฐ์ด์ด๋ ๊ฐ์ฒด ์๋ฐ์ดํธํด์ผ ํ  ๋๋ **์คํ๋ ๋(spread) ์ฐ์ฐ์** ์ฌ์ฉํ์ฌ ๋ฐฐ์ด์ด๋ ๊ฐ์ฒด ์ฌ๋ณธ์ ๋ง๋ค๊ณ  ๊ทธ ์ฌ๋ณธ์ ๊ฐ์ ์๋ฐ์ดํธ ํ ํ ๊ทธ ์ฌ๋ณธ์ ์ํ๋ฅผ setState ํน์ ์ธํฐ ํจ์๋ฅผ ํตํด ์๋ฐ์ดํธ ํ๋ค.

```jsx
// ํด๋์คํ์ด๋  ํจ์ํ ์ปดํฌ๋ํธ๋  state ์ฌ์ฉํ  ๋ ์ฃผ์์ฌํญ
// state ๊ฐ ๋ฐ๊ฟ์ผ ํ  ๋ setState ํน์ useState ๋ฅผ ํตํด ์ ๋ฌ๋ฐ์ ์ธํฐ ํจ์๋ฅผ ์ฌ์ฉํด์ผ ํ๋ค.
// ๋ฐฐ์ด์ด๋ ๊ฐ์ฒด ์๋ฐ์ดํธํด์ผ ํ  ๋๋ ์คํ๋ ๋(spread) ์ฐ์ฐ์ ์ฌ์ฉํ์ฌ
// ๋ฐฐ์ด์ด๋ ๊ฐ์ฒด ์ฌ๋ณธ์ ๋ง๋ค๊ณ  ๊ทธ ์ฌ๋ณธ์ ๊ฐ์ ์๋ฐ์ดํธ ํ ํ
// ๊ทธ ์ฌ๋ณธ์ ์ํ๋ฅผ setState ํน์ ์ธํฐ ํจ์๋ฅผ ํตํด ์๋ฐ์ดํธ ํ๋ค.

// ๊ฐ์ฒด ๋ค๋ฃจ๊ธฐ
const object = { a: 1, b: 2, c: 3 };
const nextObject = { ...object, b: 2 }; // ์ฌ๋ณธ์ ๋ง๋ค์ด์ b๊ฐ๋ง ๋ฎ์ด ์ฐ๊ธฐ

// ๋ฐฐ์ด ๋ค๋ฃจ๊ธฐ
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: false },
];
let nextArray = array.concat({ id: 4 }); // ์ ํญ๋ชฉ ์ถ๊ฐ
nextArray.filter((item) => item.id !== 2); // id ๊ฐ 2์ธ ํญ๋ชฉ ์ ๊ฑฐ
nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item));
// id ๊ฐ 1์ธ ํญ๋ชฉ์ value ๋ฅผ false ๋ก ์ค์ 
```

---

### 3.6 ์ ๋ฆฌ

- props์ state๋ ๋ ๋ค ์ปดํฌ๋ํธ์์ ์ฌ์ฉํ๊ฑฐ๋ ๋ ๋๋งํ  ๋ฐ์ดํฐ๋ฅผ ๋ด๊ณ  ์๋ค.
- props ๋ ๋ถ๋ชจ ์ปดํฌ๋ํธ๊ฐ ์ค์ 
  - props๋ฅผ ์ฌ์ฉํ๋ค๊ณ  ํด์ ๊ฐ์ด ๋ฌด์กฐ๊ฑด ๊ณ ์ ์ ์ด ๊ฒ ์๋
  - ๋ถ๋ชจ ์ปดํฌ๋ํธ์ state๋ฅผ ์์ ์ปดํฌ๋ํธ์ props๋ก ์ ๋ฌํ๊ณ  ์์ ์ปดํฌ๋ํธ์์ ํน์  ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ  ๋ ๋ถ๋ชจ ์ปดํฌ๋ํธ์ ๋ฉ์๋๋ฅผ ํธ์ถํ๋ฉด props๋ ์ ๋์ ์ผ๋ก ์ฌ์ฉ ๊ฐ๋ฅ
- state๋ ์ปดํฌ๋ํธ ์์ฒด์ ์ผ๋ก ์ง๋ ๊ฐ์ผ๋ก ์ปดํฌ๋ํธ ๋ด๋ถ์์ ๊ฐ ์๋ฐ์ดํธ
- ์์ผ๋ก ๋ง๋ค ์ผ์  ๊ด๋ฆฌ ์ ํ๋ฆฌ์ผ์ด์ ํ๋ก์ ํธ์์ ์ฌ์ฉํ  ๊ตฌ์กฐ
  ![download.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d18d7fdf-ca3d-45ba-8706-398c909297a8/download.png)

---

# 4์ฅ ์ด๋ฒคํธ ํธ๋ค๋ง

## 4.1 ๋ฆฌ์กํธ์ ์ด๋ฒคํธ ์์คํ

### 4.1.1 ์ด๋ฒคํธ ์ฌ์ฉ์ ์ฃผ์ ์ฌํญ

1. ์นด๋ฉ ํ๊ธฐ๋ฒ์ผ๋ก ์์ฑ
2. ์ด๋ฒคํธ์ ์คํํ  (์๋ฐ์คํฌ๋ฆฝํธ) ์ฝ๋๋ฅผ ์ ๋ฌํ๋ ๊ฒ์ด ์๋๋ผ, ํจ์ ํํ์ ๊ฐ์ ์ ๋ฌ
3. DOM ์์์๋ง ์ด๋ฒคํธ๋ฅผ ์ค์  ํ  ์ ์์

   div, button, input, form, span ๋ฑ์ DOM ์์์๋ ์ด๋ฒคํธ๋ฅผ ์ค์ ํ  ์ ์์ง๋ง

   ์ง์  ๋ง๋  ์ปดํฌ๋ํธ์๋ ์ด๋ฒคํธ ์์ฒด์ ์ผ๋ก ์ค์  ํ  ์ ์์

   ```jsx
   <MyComponent onClick={doSomething} />
   // ๊ทธ๋ฅ ์ด๋ฆ์ด onClick์ธ props๋ฅผ MyComponent์๊ฒ ์ ๋ฌํ๋ ๊ฒ์ผ ๋ฟ
   ```

   ex) MyComponent ์ onClick ๊ฐ์ ์ค์ ํ๋ค๋ฉด ๊ทธ๋ฅ ์ด๋ฆ์ด onClick์ธ props๋ฅผ MyComponent์๊ฒ ์ ๋ฌํ๋ ๊ฒ์ผ ๋ฟ

   โ ์ปดํฌ๋ํธ์ ์์ฒด์ ์ผ๋ก ์ด๋ฒคํธ๋ฅผ ์ค์  ํ  ์ ์์ง๋ง ์ ๋ฌ๋ฐ์ props๋ฅผ ์ปดํฌ๋ํธ ๋ธ๋ถ์ DOM ์ด๋ฒคํธ๋ก ์ค์ ํ  ์๋ ์์

   ```jsx
   <div onClick={this.props.onClick}>{/* (...) */}</div>
   // ์ปดํฌ๋ํธ์ ์์ฒด์ ์ผ๋ก ์ด๋ฒคํธ๋ฅผ ์ค์  ํ  ์ ์์ง๋ง ์ ๋ฌ๋ฐ์ props๋ฅผ ์ปดํฌ๋ํธ ๋ธ๋ถ์ DOM ์ด๋ฒคํธ๋ก ์ค์ ํ  ์๋ ์์
   ```

---

### 4.1.2 ๋ฆฌ์ํธ ์ด๋ฒคํธ ์ข๋ฅ

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

## 4.2 ์์ ๋ก ์ด๋ฒคํธ ํธ๋ค๋ง ์ตํ๊ธฐ(ํด๋์คํ ์ปดํฌ๋ํธ)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/37dcfcfb-919f-40e7-bc81-0f98058dc63f/Untitled.png)

### 4.2.2 onChange ์ด๋ฒคํธ ํธ๋ค๋งํ๊ธฐ-\***\*ํฉ์ฑ ์ด๋ฒคํธ(SyntheticEvent),NativeEvent (๊ณ ์  ์ด๋ฒคํธ)\*\***

EventPractice.js

```jsx
import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>์ด๋ฒคํธ ์ฐ์ต</h1>
        <input
          type="text"
          name="message"
          placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํ์ธ์"
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

โ ์ฝ์์ ๊ธฐ๋ก๋๋ e ๊ฐ์ฒด๋ SyntheticEvent(ํฉ์ฑ์ด๋ฒคํธ)๋ก
์น ๋ธ๋ผ์ฐ์ ์ ๋ค์ดํฐ๋ธ ์ด๋ฒคํธ๋ฅผ ๊ฐ์ธ๋ ๊ฐ์ฒด์ด๋ค.
๋ค์ดํฐ๋ธ ์ด๋ฒคํธ์ ์ธํฐํ์ด์ค๊ฐ ๊ฐ์ผ๋ฏ๋ก
์์ ์๋ฐ์คํฌ๋ฆฝํธ์์ HTML ์ด๋ฒคํธ๋ฅผ ๋ค๋ฃฐ ๋์ ๋๊ฐ์ด ์ฌ์ฉํ๋ฉด ๋ฉ๋๋ค.
SyntheticEvent๋ ๋ค์ดํฐ๋ธ ์ด๋ฒคํธ์ ๋ฌ๋ฆฌ ์ด๋ฒคํธ๊ฐ ๋๋๊ณ  ๋๋ฉด
์ด๋ฒคํธ๊ฐ ์ด๊ธฐํ ๋๋ฏ๋ก ์ ๋ณด๋ฅผ ์ฐธ์กฐ ํ  ์ ์๋ค.
ex) 0.5์ด ๋ค์ e๊ฐ์ฒด๋ฅผ ์ฐธ์กฐํ๋ฉด e๊ฐ์ฒด ๋ด๋ถ์ ๋ชจ๋  ๊ฐ์ด ๋น์์ง
๋ง์ฝ ๋น๋๊ธฐ์ ์ผ๋ก ์ด๋ฒคํธ ๊ฐ์ฒด๋ฅผ ์ฐธ์กฐํ  ์ผ์ด ์๋ค๋ฉด e.persist() ํจ์๋ฅผ ํธ์ถํด์ผ ํจ

โข persist() : Reactย **v16๊น์ง ๋น๋๊ธฐ ์ฝ๋ฐฑํจ์์์ ํฉ์ฑ ์ด๋ฒคํธ ํ์ฉ์ ์ํด ์ฌ์ฉ๋ ๋ฉ์๋**์ด๋ค.ย **v17๋ถํฐ๋ ํ๋ง ์ต์ ํ๋ก ๋ถํ์**ํด์ง.

---

\***\*ํฉ์ฑ ์ด๋ฒคํธ(SyntheticEvent)\*\***

[https://ko.reactjs.org/docs/events.html](https://ko.reactjs.org/docs/events.html)

_SyntheticEvent๋ ๊ฐ์ฒด๋ก ๋ชจ๋  ๋ธ๋ผ์ฐ์ ์์ ์ด๋ฒคํธ๋ฅผ ๋์ผํ๊ฒ ์ฒ๋ฆฌํ๊ธฐ ์ํ Wrapper ๊ฐ์ฒด์ด๋ค. ๋๋ถ๋ถ์ ์ธํฐํ์ด์ค๋ ๋ธ๋ผ์ฐ์  ๊ณ ์  ์ด๋ฒคํธ์ ๊ฐ๋ค._

- ์ํํธ์จ์ด์์ ๋ํ(Wrapping) ์ด๋, ๊ธฐ๋ณธ๊ธฐ๋ฅ์ ๊ฐ์ธ๋ ์๋ก์ด ๊ธฐ๋ฅ์ ๋ง๋๋ ๊ฒ์ ์๋ฏธํ๋ค.

[https://abangpa1ace.tistory.com/129](https://abangpa1ace.tistory.com/129)

---

**NativeEvent (๊ณ ์  ์ด๋ฒคํธ)**

๋ธ๋ผ์ฐ์ ์ ๊ณ ์  ์ด๋ฒคํธ๋ฅผ ํ์ธํ๋ ค๊ณ  ํ๋ค๋ฉด,ย **event.nativeEvent**ย attribute ๋ฅผ ์ฌ์ฉํ๋ฉด ๋๋ค.

๋ค๋ง, SyntheticEvent๊ฐ ๋ธ๋ผ์ฐ์ ์ NativeEvent์ย **์๋ฒฝํ๊ฒ ๋์๋๋ ๊ฒ์ ์๋๋ค.**

- ์๋ฅผ ๋ค์ด, onMouseLeave ์ event.nativeEvent ๋ mouseout ์ด๋ฒคํธ๋ฅผ ๊ฐ๋ฆฌํจ๋ค.
- [https://abangpa1ace.tistory.com/129](https://abangpa1ace.tistory.com/129)
  **Form ์ด๋ฒคํธ : <form> ํ๊ทธ์ ์ฃผ์ ๊ธฐ๋ฅ๋ค์ ๋ํ ์ด๋ฒคํธ ๋ฆฌ์ค๋**
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

- ํด๋์คํ ์ปดํฌ๋ํธ ์ด๋ฒคํธ ์ฐ์ต - state์ input๊ฐ ๋ด์ ๋์ฐ๊ธฐ
  - ์์ฑ์ ๋ฉ์๋์ธ constructor์์ state ์ด๊น๊ฐ์
  - ์ด๋ฒคํธ ํธ๋ค๋ง ํจ์ ๋ด๋ถ์์ this.setState ๋ฉ์๋๋ฅผ ํธ์ถํ์ฌ state๋ฅผ ์๋ฐ์ดํธ ํด๋ณด๊ธฐ
  - ๊ทธ ๋ค์ input์ value ๊ฐ์ state์ ์๋ ๊ฐ์ผ๋ก ์ค์ 

```jsx
import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <div>
        <h1>ํด๋์คํ ์ปดํฌ๋ํธ ์ด๋ฒคํธ ์ฐ์ต - state์ input๊ฐ ๋ด์ ๋์ฐ๊ธฐ</h1>
        <p>์์ฑ์ ๋ฉ์๋์ธ constructor์์ state ์ด๊น๊ฐ์ ์ค์ ํ๊ณ </p>
        <p>
          ์ด๋ฒคํธ ํธ๋ค๋ง ํจ์ ๋ด๋ถ์์ this.setState ๋ฉ์๋๋ฅผ ํธ์ถํ์ฌ state๋ฅผ
          ์๋ฐ์ดํธ ํด๋ณด๊ธฐ
        </p>
        <p>๊ทธ ๋ค์ input์ value ๊ฐ์ state์ ์๋ ๊ฐ์ผ๋ก ์ค์ </p>
        <input
          type="text"
          name="message"
          placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํ์ธ์"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        **{/* ์๋ ฅํ ๊ฐ state์ ๋ฃ๊ธฐ */}**
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          ํ์ธ
        </button>
        **{/* state์ ๋ฃ์ ๊ฐ ๋์ฐ๊ธฐ */}**
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

### 4.2.3 ์์ ๋ฉ์๋ ๋ง๋ค๊ธฐ

- (state ์ฃผ์์ฌํญ์์)์ด๋ฒคํธ์ ์คํ ์ฝ๋๋ฅผ ์ ๋ฌํ๋ ๊ฒ ์๋๋ผ, ํจ์ ํํ์ ๊ฐ์ ์ ๋ฌ
- ๋ฐ๋ผ์ ์ด๋ฒคํธ ์ฒ๋ฆฌ ์ ๋ ๋๋ง ๋์์ ํจ์ ๋ง๋ค์ด ์ ๋ฌํจ
- ๋ค๋ฅธ ๋ฐฉ๋ฒ์ผ๋ก ํจ์๋ฅผ ๋ฏธ๋ฆฌ ์ค๋นํ์ฌ ์ ๋ฌ(์ฑ๋ฅ ๋น์ท, ๊ฐ๋์ฑ ๋์)
- ์ํฉ์ ๋ฐ๋ผ ๋ ๋๋ง ๋ฉ์๋ ๋ด๋ถ์์ ํจ์๋ฅผ ๋ง๋๋ ๊ฒ์ด ํธํ  ๋๋ ์์

- ์ด๋ฒคํธ ์ฐ์ต - ์์์ ๋ฉ์๋ ๋ง๋ค๊ธฐ

EventPractice.js

```jsx
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  **// ํจ์๋ฅผ ๋ฏธ๋ฆฌ ์ค๋นํ์ฌ ์ ๋ฌ(์ฑ๋ฅ ๋น์ท, ๊ฐ๋์ฑ ๋์)**
  // ํ์ฌ constructor ํจ์์์ ํจ์๋ฅผ ๋ฐ์ธ๋ฉํ๋ ์์์ด ์ด๋ค์ง๊ณ  ์์
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // ํจ์ ํธ์ถ ์ this๋ ํธ์ถ๋ถ์ ๋ฐ๋ผ ๊ฒฐ์ 
  // ํด๋์ค ์์ ๋ฉ์๋๊ฐ ํน์  HTML ์์์ ์ด๋ฒคํธ๋ก ๋ฑ๋ก๋๋ ๊ณผ์ ์์ ๋ฉ์๋์ this ๊ด๊ณ ๋๊น
  **// ๋ฉ์๋๋ฅผ this์ ๋ฐ์ธ๋ฉ(binding)ํ๋ .bind(this); ์์ํ์**
  // ์๊ทธ๋ผ this๊ฐ undefined ๋จ
  **// ๋ฉ์๋ ์ด๋ฆ์ ์์ ์ง๋ง handle~ ๋ก ์๋ฌต์  ๊ท์น**

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
        <h1>์ด๋ฒคํธ ์ฐ์ต - ์์์ ๋ฉ์๋ ๋ง๋ค๊ธฐ</h1>
        <input
          type="text"
          name="message"
          placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํ์ธ์"
          value={this.state.message}
          onChange={this.handleChange}
        />
        {/* ์๋ ฅํ ๊ฐ state์ ๋ฃ๊ธฐ */}
        <button onClick={this.handleClick}>ํ์ธ</button>
        {/* state์ ๋ฃ์ ๊ฐ ๋์ฐ๊ธฐ */}
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

- binding ํธํ๊ฒ ํ๊ธฐ - Property Initializer Syntax๋ฅผ ์ฌ์ฉํ ๋ฉ์๋ ์์ฑ
  - ํ์ดํํจ์์ฌ์ฉ - transform-class-properties ๋ฌธ๋ฒ์ฌ์ฉํ์ฌ ํ์ดํ ํจ์ ํํ๋ก ๋ฉ์๋ ์ ์

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
        <h1>์ด๋ฒคํธ ์ฐ์ต</h1>
        <h2>์ด๋ฒคํธ ์ฐ์ต - ์์์ ๋ฉ์๋ ๋ง๋ค๊ธฐ</h2>
        <h2>**binding ํธํ๊ฒ ํ๊ธฐ** - Property Initializer Syntax๋ฅผ ์ฌ์ฉํ ๋ฉ์๋ ์์ฑ</h2>
        <p>transform-class-properties ๋ฌธ๋ฒ์ฌ์ฉํ์ฌ **ํ์ดํ ํจ์ ํํ๋ก ๋ฉ์๋ ์ ์**</p>
        <input
          type="text"
          name="message"
          placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํ์ธ์"
          value={this.state.message}
          onChange={this.handleChange}
        />
        {/* ์๋ ฅํ ๊ฐ state์ ๋ฃ๊ธฐ */}
        <button onClick={this.handleClick}>ํ์ธ</button>
        {/* state์ ๋ฃ์ ๊ฐ ๋์ฐ๊ธฐ */}
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

### 4.2.4 input ์ฌ๋ฌ ๊ฐ ๋ค๋ฃจ๊ธฐ

- event ๊ฐ์ฒด ํ์ฉ โ [e.target.name](http://e.target.name) ๊ฐ ์ฌ์ฉ
- ๊ฐ์ฒด ์์์ key๋ฅผ [ ] ๋ก ๊ฐ์ธ๋ฉด ๊ทธ ์์ ๋ฃ์ ๋ํผ๋ฐ์ค๊ฐ ๊ฐ๋ฆฌํค๋ ์ค์  ๊ฐ์ด key ๊ฐ์ผ๋ก ์ฌ์ฉ๋จ

EventPractice.js

```jsx
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    **username: '',**
    message: ''
  }

	// ๊ฐ์ฒด ์์์ key๋ฅผ [ ] ๋ก ๊ฐ์ธ๋ฉด
  // ๊ทธ ์์ ๋ฃ์ ๋ํผ๋ฐ์ค๊ฐ ๊ฐ๋ฆฌํค๋ ์ค์  ๊ฐ์ด key ๊ฐ์ผ๋ก ์ฌ์ฉ๋จ
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
        <h1>์ด๋ฒคํธ ์ฐ์ต - input ์ฌ๋ฌ ๊ฐ ๋ค๋ฃจ๊ธฐ</h1>
        <p>**event ๊ฐ์ฒด ํ์ฉ โ e.target.name ๊ฐ ์ฌ์ฉ**</p>
        <input
          type="text"
          name="username"
          placeholder="์ฌ์ฉ์๋ช ์๋ ฅ"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํ์ธ์"
          value={this.state.message}
          onChange={this.handleChange}
        />
        {/* ์๋ ฅํ ๊ฐ state์ ๋ฃ๊ธฐ */}
        <button onClick={this.handleClick}>ํ์ธ</button>
        {/* state์ ๋ฃ์ ๊ฐ ๋์ฐ๊ธฐ */}
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

- **Enter๋๋ฌ์ ๋ฒํผ ํด๋ฆญํ๊ธฐ - onKeyPress ์ด๋ฒคํธ ํธ๋ค๋ง**

EventPractice.js

```jsx
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }

  // ๊ฐ์ฒด ์์์ key๋ฅผ [ ] ๋ก ๊ฐ์ธ๋ฉด
  // ๊ทธ ์์ ๋ฃ์ ๋ํผ๋ฐ์ค๊ฐ ๊ฐ๋ฆฌํค๋ ์ค์  ๊ฐ์ด key ๊ฐ์ผ๋ก ์ฌ์ฉ๋จ
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

  **// ์์ ๋ฉ์๋ handleKeyPress ์ถ๊ฐ, ํ์ดํ ํจ์๋ก this bindingํจ
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }**

  render() {
    return (
      <div>
        <h1>์ด๋ฒคํธ ์ฐ์ต - input ์ฌ๋ฌ ๊ฐ ๋ค๋ฃจ๊ธฐ</h1>
        <p>event ๊ฐ์ฒด ํ์ฉ โ e.target.name ๊ฐ ์ฌ์ฉ</p>
        **<h2>Enter๋๋ฌ์ ๋ฒํผ ํด๋ฆญํ๊ธฐ - onKeyPress ์ด๋ฒคํธ ํธ๋ค๋ง</h2>**
        <input
          type="text"
          name="username"
          placeholder="์ฌ์ฉ์๋ช ์๋ ฅ"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํ์ธ์"
          value={this.state.message}
          onChange={this.handleChange}
          **onKeyPress={this.handleKeyPress}**
        />
        **{/* onKeyPress={this.handleKeyPress} ์ด๋ฒคํธ ์คํ */}**
        {/* ์๋ ฅํ ๊ฐ state์ ๋ฃ๊ธฐ */}
        <button onClick={this.handleClick}>ํ์ธ</button>
        {/* state์ ๋ฃ์ ๊ฐ ๋์ฐ๊ธฐ */}
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

## 4.3 ํจ์ ์ปดํฌ๋ํธ๋ก ๊ตฌํ

EventPractiveFunction.js

```jsx
import React, { useState } from 'react';

**// ๊ฐ๊ฐ input์ e.target.name์ ํ์ฉํ์ง ์๊ณ  onChange ๊ด๋ จ ํจ์ ๋ ๊ฐ๋ฅผ ๋ฐ๋ก ๋ง๋ฆ
// input์ด ๋ง์ผ๋ฉด e.target.name์ ํ์ฉ**
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
      <h1>ํจ์ ์ปดํฌ๋ํธ ์ด๋ฒคํธ ์ฐ์ต</h1>
      <input
          type="text"
          name="username"
          placeholder="์ฌ์ฉ์๋ช ์๋ ฅ"
          value={username}
          onChange={onChangeUsername}
        />
        <input
          type="text"
          name="message"
          placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํ์ธ์"
          value={message}
          onChange={onChangeMessage}
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>ํ์ธ</button>
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

- useState๋ฅผ ํตํด ์ฌ์ฉํ๋ ์ํ์ ๋ฌธ์์ด์ด ์๋ ๊ฐ์ฒด ๋ฃ์ด๋ณด๊ธฐ

```jsx
import React, { useState } from 'react';

**// useState๋ฅผ ํตํด ์ฌ์ฉํ๋ ์ํ์ ๋ฌธ์์ด์ด ์๋ ๊ฐ์ฒด ๋ฃ์ด๋ณด๊ธฐ
// ๊ฐ๊ฐ input์ e.target.name์ ํ์ฉํ๋ ค๋ฉด
// useState๋ฅผ ์ธ ๋ ์ธํ ๊ฐ๋ค์ด ๋ค์ด ์๋ form ๊ฐ์ฒด ์ฌ์ฉ**

const EventPractiveFunction = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;
  **const onChange = e => {
    const nextForm = {
      ...form, // ์คํ๋ ๋ ์ฐ์ฐ์(spread) ๊ธฐ์กด์ form ๋ด์ฉ์ ์ด์๋ฆฌ์ ๋ณต์ฌํ ๋ค
      [e.target.name]: e.target.value // ์ํ๋ ๊ฐ ๋ฎ์ด ์์ฐ๊ธฐ
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
      <h1>ํจ์ ์ปดํฌ๋ํธ ์ด๋ฒคํธ ์ฐ์ต - useState ์ฌ์ฉํ์ฌ ์ํ์ ๋ฌธ์์ด ์๋ ๊ฐ์ฒด ๋ฃ์ด๋ณด๊ธฐ</h1>
      <input
          type="text"
          name="username"
          placeholder="์ฌ์ฉ์๋ช ์๋ ฅ"
          value={username}
          **onChange={onChange}**
        />
        <input
          type="text"
          name="message"
          placeholder="์๋ฌด๊ฑฐ๋ ์๋ ฅํ์ธ์"
          value={message}
          **onChange={onChange}**
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>ํ์ธ</button>
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

# 5์ฅ ref: DOM์ ์ด๋ฆ๋ฌ๊ธฐ

- ref : DOM์ ๊ผญ ์ง์ ์ ์ผ๋ก ๊ฑด๋๋ ค์ผ ํ  ๋ ์ฌ์ฉ

๋น๋ฐ๋ฒํธ ์๋ ฅ ์ input ์์ ๋ณํ

- nput์์๋ onChange ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด handleChange ๋ฅผ ํธ์ถํ์ฌ state์ password ๊ฐ์ ์๋ฐ์ดํธ
- button์์๋ onClick ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด handleButtonClick์ ํธ์ถํ์ฌ clicked ๊ฐ ๊ฒฐ๊ณผ์ ๋ค๋ผ success ๋๋ failure ๊ฐ ์ค์ 
- ๊ทธ๋ฆฌ๊ณ  ์ด ๊ฐ์ ๋ฐ๋ผ input ์์์ด ์ด๋ก์,๋นจ๊ฐ์์ผ๋ก ๋ํ๋จ

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
        <button onClick={this.handleButtonClick}>๊ฒ์ฆํ๊ธฐ</button>
      </div>
    );
  }
}
// input์์๋ onChange ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด handleChange ๋ฅผ ํธ์ถํ์ฌ state์
// password ๊ฐ์ ์๋ฐ์ดํธ

// button์์๋ onClick ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด handleButtonClick์ ํธ์ถํ์ฌ
// clicked ๊ฐ ๊ฒฐ๊ณผ์ ๋ค๋ผ success ๋๋ failure ๊ฐ ์ค์ 
// ๊ทธ๋ฆฌ๊ณ  ์ด ๊ฐ์ ๋ฐ๋ผ input ์์์ด ์ด๋ก์,๋นจ๊ฐ์์ผ๋ก ๋ํ๋จ
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

### 5.1.3 DOM์ ๊ผญ ์ฌ์ฉํด์ผ ํ๋ ์ํฉ

- ํน์  input์ ํฌ์ปค์ค ์ฃผ๊ธฐ
- ์คํฌ๋กค ๋ฐ์ค ์กฐ์ํ๊ธฐ
- Canvas ์์์ ๊ทธ๋ฆผ ๊ทธ๋ฆฌ๊ธฐ ๋ฑ

โ ref ์ฌ์ฉํ์ฌ DOM์ ์ง์ ์ ์ผ๋ก ์ ๊ทผํ์ฌ ๊ธฐ๋ฅ ๊ตฌํ

---

## 5.2 ref ์ฌ์ฉ

- ref ์ฌ์ฉ๋ฐฉ๋ฒ ๋ ๊ฐ์ง

1. ์ฝ๋ฐฑํจ์๋ฅผ ํตํ ref ์ค์ 

   โ ๊ฐ์ฅ ๊ธฐ๋ณธ์ ์ธ ๋ฐฉ๋ฒ

   โ ref๋ฅผ ๋ฌ๊ณ ์ ํ๋ ์์์ ref๋ผ๋ ์ฝ๋ฐฑ ํจ์๋ฅผ props๋ก ์ ๋ฌ

   โ ์ด ์ฝ๋ฐฑ ํจ์๋ ref ๊ฐ์ ํ๋ผ๋ฏธํฐ๋ก ์ ๋ฌ ๋ฐ์

   โ ๊ทธ๋ฆฌ๊ณ  ํจ์ ๋ด๋ถ์์ ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์ ref๋ฅผ ์ปดํฌ๋์ ๋ฉค๋ฒ ๋ณ์๋ก ์ค์ 

   ```jsx
   <input
     ref={(ref) => {
       this.ํ๊ทธ์์์ด๋ฆ์ง์  = ref;
     }}
   />
   ```

2. createRef๋ฅผ ํตํ ref ์ค์ 

   โ ๋ฆฌ์กํธ์ ๋ด์ฅ๋ผ ์๋ createRef ํจ์ ์ฌ์ฉ

   โ ์งง์ ์ฝ๋

   โ ๋ฆฌ์กํธ v16.3๋ถํฐ ๋์, ์๋

   โ ์ปดํฌ๋ํธ ๋ด๋ถ์์ ๋ฉค๋ฒ ๋ณ์๋ก React.createeRef() ๋ด์์ฃผ๊ธฐ

   โ ํด๋น ๋ฉค๋ฒ ๋ณ์๋ฅผ ref๋ฅผ ๋ฌ๊ณ ์ ํ๋ ์์์ ref props๋ก ๋ฃ์ด์ฃผ๋ฉด ref ์ค์  ์๋ฃ

   โ ๋์ค์ ref๋ฅผ ์ค์ ํด ์ค DOM์ ์ ๊ทผํ๋ ค๋ฉด this.input.current๋ฅผ ์กฐํํ๋ฉด ๋จ

   โ ์ฝ๋ฐฑํจ์๋ฅผ ์ฌ์ฉํ  ๋์ ๋ค๋ฅธ ์  : ๋ท๋ถ๋ถ์ .current ๋ฃ๋ ์ 

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

### 5.2.3 ์ ์ฉ - input์ ref ๋ฌ๊ธฐ

- button์ ๋๋ ์ ๋ ํฌ์ปค์ค๊ฐ input์ผ๋ก ์๋ ๋์ด๊ฐ๋๋ก ์์ฑํ๊ธฐ

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
    // button์ ๋๋ ์ ๋ ํฌ์ปค์ค๊ฐ input์ผ๋ก ์๋ ๋์ด๊ฐ๋๋ก ์์ฑํ๊ธฐ**
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
        <button onClick={this.handleButtonClick}>๊ฒ์ฆํ๊ธฐ</button>
      </div>
    );
  }
}

// input์์๋ onChange ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด handleChange ๋ฅผ ํธ์ถํ์ฌ state์
// password ๊ฐ์ ์๋ฐ์ดํธ

// button์์๋ onClick ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด handleButtonClick์ ํธ์ถํ์ฌ
// clicked ๊ฐ ๊ฒฐ๊ณผ์ ๋ค๋ผ success ๋๋ failure ๊ฐ ์ค์ 
// ๊ทธ๋ฆฌ๊ณ  ์ด ๊ฐ์ ๋ฐ๋ผ input ์์์ด ์ด๋ก์,๋นจ๊ฐ์์ผ๋ก ๋ํ๋จ

export default ValidationSample;
```

---

---

## 5.3 ์ปดํฌ๋ํธ์ ref ๋ฌ๊ธฐ

### 5.3.1 ์ฌ์ฉ๋ฒ

```jsx
<MyComponent
  ref={(ref) => {
    this.myComponent = ref;
  }}
/>
```

### 5.3.2 ์ปดํฌ๋ํธ ์ด๊ธฐ ์ค์  - ์คํฌ๋กค๋ฐ์ค ๋ง๋ค๊ธฐ

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

### 5.3.3 ์ปดํฌ๋ํธ์ ๋ฉ์๋ ์์ฑ

- ์ปดํฌ๋ํธ์ ์คํฌ๋กค๋ฐ ๋งจ ์๋์ชฝ์ผ๋ก ๋ด๋ฆฌ๋ ๋ฉ์๋ ๋ง๋ค๊ธฐ
- ์๋ฐ์คํฌ๋ฆฝํธ๋ก ์คํฌ๋กค๋ฐ๋ฅผ ๋ด๋ฆด ๋๋ DOM ๋ธ๋๊ฐ ๊ฐ์ง ๋ค์ ๊ฐ๋ค์ ์ฌ์ฉํ๋ค.
  - scrollTop : ์ธ๋ก ์คํฌ๋กค๋ฐ ์์น(0~350)
  - scrollHehight : ์คํฌ๋กค์ด ์๋ ๋ฐ์ค ์์ div ๋์ด(650)
  - clientHeight : ์คํฌ๋กค์ด ์๋ ๋ฐ์ค์ ๋์ด(300)

```jsx
import React, { Component } from 'react';

class ScrollBox extends Component {
**// - ์ปดํฌ๋ํธ์ ์คํฌ๋กค๋ฐ ๋งจ ์๋์ชฝ์ผ๋ก ๋ด๋ฆฌ๋ ๋ฉ์๋ ๋ง๋ค๊ธฐ
// - ์๋ฐ์คํฌ๋ฆฝํธ๋ก ์คํฌ๋กค๋ฐ๋ฅผ ๋ด๋ฆด ๋๋ DOM ๋ธ๋๊ฐ ๊ฐ์ง ๋ค์ ๊ฐ๋ค์ ์ฌ์ฉํ๋ค.
// - scrollTop : ์ธ๋ก ์คํฌ๋กค๋ฐ ์์น(0~350)
// - scrollHehight : ์คํฌ๋กค์ด ์๋ ๋ฐ์ค ์์ div ๋์ด(650)
// - clientHeight : ์คํฌ๋กค์ด ์๋ ๋ฐ์ค์ ๋์ด(300)

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* ์ ์ฝ๋์๋ ๋น๊ตฌ์กฐํ ํ ๋น ๋ฌธ๋ฒ์ ์ฌ์ฉํ์
        ๋ค์ ์ฝ๋์ ๊ฐ์ ์๋ฏธ
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  }
  // -> ์ด๋ ๊ฒ ๋ง๋  ๋ฉ์๋ ๋ถ๋ชจ ์ปดํฌ๋ํธ(App)์์ ScrollBox์ ref๋ฅผ ๋ฌ๋ฉด ์ฌ์ฉํ  ์ ์์**

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

### 5.3.4 ์ปดํฌ๋ํธ์ ref๋ฌ๊ณ  ๋ด๋ถ ๋ฉ์๋ ์ฌ์ฉ

App.js

```jsx
import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

// ref๋ฌ๊ณ  ๋ฒํผ ๋ง๋ค์ด ๋ฒํผ ํด๋ฆญ์ scrollTobBottom ๋ฉ์๋ ์คํ
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          ๋งจ ๋ฐ์ผ๋ก
        </button>
      </div>
    );
  }
}
// onClick = {() => this.scrollBox.scrollToBottom()}
// ๋ฌธ๋ฒ์ onClick = {this.scrollBox.scrollToBottom} ๊ฐ์ ํ์ ๊ด์ฐฎ์ ๊ฑฐ์
// ํ์ง๋ง ์ปดํฌ๋ํธ๊ฐ ์ฒ์ ๋ ๋๋ง ๋  ๋ this.scrollBox ๊ฐ์ด undefined ์ด๋ฏ๋ก
// this.scrollBox.scrollToBottom ๊ฐ ์ฝ์ด ์ค๋ ๊ณผ์ ์์ ์ค๋ฅ ์๊น
// ํ์ดํ ํจ์ ๋ฌธ๋ฒ์ ์ฌ์ฉํ์ฌ ์์ ์๋ก์ด ํจ์๋ฅผ ๋ง๋ค๊ณ  ๊ทธ ๋ด๋ถ์์ ๋ฉ์๋ ์คํํ๋ฉด
// ๋ฒํผ ๋๋ฅผ ๋(์ด๋ฏธ ํ ๋ฒ ๋ ๋๋ง์ ํด์ this.scrollBox๋ฅผ ์ค์ ํ ์์ )
// this.scrollBox.scrollToBottom ๊ฐ์ ์ฝ์ด์ ์คํํ๋ฏ๋ก ์ค๋ฅ ์ ๋จ

export default App;
```

- onClick = {() => this.scrollBox.scrollToBottom()}
  - ๋ฌธ๋ฒ์ onClick = {this.scrollBox.scrollToBottom} ๊ฐ์ ํ์ ๊ด์ฐฎ์ ๊ฑฐ์
    ํ์ง๋ง ์ปดํฌ๋ํธ๊ฐ ์ฒ์ ๋ ๋๋ง ๋  ๋ this.scrollBox ๊ฐ์ด undefined ์ด๋ฏ๋ก
    this.scrollBox.scrollToBottom ๊ฐ ์ฝ์ด ์ค๋ ๊ณผ์ ์์ ์ค๋ฅ ์๊น
  - ํ์ดํ ํจ์ ๋ฌธ๋ฒ์ ์ฌ์ฉํ์ฌ ์์ ์๋ก์ด ํจ์๋ฅผ ๋ง๋ค๊ณ  ๊ทธ ๋ด๋ถ์์ ๋ฉ์๋ ์คํํ๋ฉด
    ๋ฒํผ ๋๋ฅผ ๋(์ด๋ฏธ ํ ๋ฒ ๋ ๋๋ง์ ํด์ this.scrollBox๋ฅผ ์ค์ ํ ์์ )
    this.scrollBox.scrollToBottom ๊ฐ์ ์ฝ์ด์ ์คํํ๋ฏ๋ก ์ค๋ฅ ์ ๋จ

---

### ref ์ฌ์ฉ์ ์ฃผ์ํ  ์ 

1. ref๋ฅผ ์ฌ์ฉํ์ง ์๊ณ ๋ ์ํ๋ ๊ธฐ๋ฅ์ ๊ตฌํํ  ์ ์๋์ง ๋ฐ๋์ ๊ณ ๋ คํ ํ ํ์ฉ
2. ์ปดํฌ๋ํธ ๋ด๋ถ์์ DOM์ ์ง์  ์ ๊ทผํด์ผ ํ  ๋๋ ref๋ฅผ ์ฌ์ฉ
3. ์๋ก ๋ค๋ฅธ ์ปดํฌ๋ํธ๋ผ๋ฆด ๋ฐ์ดํฐ๋ฅผ ๊ต๋ฅํ  ๋ ref๋ฅผ ์ฌ์ฉํ๋ค๋ฉด ์๋ชป๋ ๊ฒ

   ์ฑ ๊ท๋ชจ๊ฐ ์ปค์ง๋ฉด ๊ตฌ์กฐ๊ฐ ๊ผฌ์ฌ ์ ์ง๋ณด์ ๋ถ๊ฐ๋ฅ

   ์ปดํฌ๋ํธ๋ผ๋ฆฌ ๋ฐ์ดํฐ ๊ต๋ฅํ  ๋๋ ๋ฐ๋์ ๋ถ๋ชจ โย ์์ ํ๋ฆ์ผ๋ก ๊ต๋ฅํด์ผ ํจ

๋์ค์ ๋ฆฌ๋์ค ํน์ Context API๋ฅผ ์ฌ์ฉํ์ฌ ํจ์จ์ ์ผ๋ก ๊ต๋ฅ

---

# 6์ฅ ์ปดํฌ๋ํธ ๋ฐ๋ณต

## 6.1 ๋ฐ๋ณต๋๋ ์ปดํฌ๋ํธ - ์๋ฐ์คํฌ๋ฆฝํธ ๋ฐฐ์ด์ map() ํจ์

### 6.1.1 map() ๋ฌธ๋ฒ

- arr.map(callback, [ thisArg ]) : ๊ธฐ์กด ๋ฐฐ์ด๋ก ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ฆ
  ์ด ํจ์์ ํ๋ผ๋ฏธํฐ
  - callback : ์๋ก์ด ๋ฐฐ์ด์ ์์๋ฅผ ์์ฑํ๋ ํจ์๋ก ํ๋ผ๋ฏธํฐ๋ ๋ค์ ์ธ ๊ฐ์ง
    - currentValue : ํ์ฌ ์ฒ๋ฆฌํ๊ณ  ์๋ ์์
    - index : ํ์ฌ ์ฒ๋ฆฌํ๊ณ  ์๋ ์์์ index ๊ฐ
    - array : ํ์ฌ ์ฒ๋ฆฌํ๊ณ  ์๋ ์๋ณธ ๋ฐฐ์ด
  - thisArg(์ ํํญ๋ชฉ) : callback ํจ์ ๋ด๋ถ์์ ์ฌ์ฉํ  this ๋ ํผ๋ฐ์ค

---

### 6.1.2 ์์  - map ํจ์ ์ฌ์ฉ

- map ํจ์ ์ฌ์ฉํ์ฌ ๋ฐฐ์ด [1,2,3,4,5] ์ ๊ฐ ์์ ์ ๊ณฑํ์ฌ ์๋ก์ด ๋ฐฐ์ด ์์ฑ

```jsx
var number = [1, 2, 3, 4, 5];
var processed = number.map(function (num) {
  return num * num;
});
console.log(processed);

// (5)ย [1, 4, 9, 16, 25]
```

```jsx
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);
console.log(result);

// (5)ย [1, 4, 9, 16, 25]
```

---

## 6.2 ๋ฐ์ดํฐ ๋ฐฐ์ด์ ์ปดํฌ๋ํธ ๋ฐฐ์ด๋ก ๋ณํํ๊ธฐ

IterationSample.js

```jsx
import React from 'react';

**// map() ์ฌ์ฉํ์ง๋ง key ๊ฐ์ด ์๋ค๋ฉฐ ์๋ฌ ๋ธ**
const IterationSample = () => {
  const names = ['๋์ฌ๋', '์ผ์', '๋', '๋ฐ๋'];
  const nameList = names.map(name => <li>{name}</li>);
  return <ul>{nameList}</ul>;

  // return (
  //   <div>
  //     <ul>
  //       <li>๋์ฌ๋</li>
  //       <li>์ผ์</li>
  //       <li>๋</li>
  //       <li>๋ฐ๋</li>
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

## 6.3 key ์ฌ์ฉ ์ด์ 

- ๋ฆฌ์กํธ์์ key๋ ์ปดํฌ๋ํธ ๋ฐฐ์ด์ ๋ ๋๋งํ์ ๋ ์ด๋ค ์์์ ๋ณ๋์ด ์์๋์ง ์์๋ด๋ ค๊ณ  ์ฌ์ฉ

### 6.3.1 key ์ค์ 

- key ๊ฐ ์ค์  ์ map ํจ์์ ์ธ์๋ก ์ ๋ฌ๋๋ ํจ์ ๋ด๋ถ์์ ์ปดํฌ๋ํธ props๋ฅผ ์ค์ ํ๋ฏ์ด ์ค์ 
- key ๊ฐ์ ์ธ์ ๋ ์ ์ผํ ๊ฐ(๊ณ ์ ๊ฐ)์ผ๋ก ์ค์ 
- ๊ณ ์  ๋ฒํธ๊ฐ ์์ ๋๋ map ํจ์์ ์ ๋ฌ๋๋ ์ฝ๋ฐฑ ํจ์์ ์ธ์์ธ index ๊ฐ์ ์ฌ์ฉ
- ๊ณ ์ ๊ฐ ์์ ๋๋ง index ์ฌ์ฉ. index๋ฅผ key๋ก ์ฌ์ฉํ๋ฉด ๋ฐฐ์ด์ด ๋ณ๊ฒฝ๋  ๋ ํจ์ธ์ ์ผ๋ก ๋ฆฌ๋ ๋๋งํ์ง ๋ชป ํจ

IterationSample.js

```jsx
import React from 'react';

// map() ์ฌ์ฉํ์ง๋ง key ๊ฐ์ด ์๋ค๋ฉฐ ์๋ฌ ๋ธ
**// key ๊ณ ์ ๊ฐ ์์ ๋๋ง index ๋ฃ์ด์ฃผ๊ธฐ
// index๋ฅผ key๋ก ์ฌ์ฉํ๋ฉด ๋ฐฐ์ด์ด ๋ณ๊ฒฝ๋  ๋ ํจ์ธ์ ์ผ๋ก ๋ฆฌ๋ ๋๋งํ์ง ๋ชป ํจ**
const IterationSample = () => {
  const names = ['๋์ฌ๋', '์ผ์', '๋', '๋ฐ๋'];
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

## 6.4 map() ๊ณผ key๊ฐ ์์ฉ

### 6.4.1 ์ด๊ธฐ ์ํ ์ค์ ํ๊ธฐ(id๋ก ๊ณ ์ ๊ฐ ๋ถ์ฌ)

- map() ํจ์ ๊ณ ์ ํ key ๊ฐ index ๋์  [name.id](http://name.id/) ๊ฐ์ผ๋ก ์ง์ 

```jsx
import React, { useState } from 'react';

**// map() ํจ์ ๊ณ ์ ํ key ๊ฐ index ๋์  name.id ๊ฐ์ผ๋ก ์ง์ **
const IterationSample = () => {
  **const [names, setNames] = useState([
    { id: 1, text: '๋์ฌ๋' },
    { id: 2, text: '์ผ์' },
    { id: 3, text: '๋' },
    { id: 4, text: '๋ฐ๋' },
  ]);**
  **const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // ์๋ก์ด ํญ๋ชฉ์ ์ถ๊ฐํ  ๋ ์ฌ์ฉํ  id**

  // const names = ['๋์ฌ๋', '์ผ์', '๋', '๋ฐ๋'];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const nameList = names.map( name => <li key={name.id}>{name.text}</li>);

  return <ul>{nameList}</ul>;

};

export default IterationSample;
```

### 6.4.2 ๋ฐ์ดํฐ ์ถ๊ฐ ๊ธฐ๋ฅ ๊ตฌํ - ์๋ก์ด list ๋ฑ๋ก ๊ธฐ๋ฅ + button ํด๋ฆญ ์ ๊ธฐ์กด input ๋ด์ฉ ๋น์ฐ๊ธฐ ๊ธฐ๋ฅ ๊ตฌํ

- ul ์๋จ์ input, button ๋ ๋๋ง ํ input์ ์ํ ๊ด๋ฆฌํ๊ธฐ

IterationSample.js

```jsx
import React, { useState } from 'react';

// map() ํจ์ ๊ณ ์ ํ key ๊ฐ index ๋์  name.id ๊ฐ์ผ๋ก ์ง์ 
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '๋์ฌ๋' },
    { id: 2, text: '์ผ์' },
    { id: 3, text: '๋' },
    { id: 4, text: '๋ฐ๋' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // ์๋ก์ด ํญ๋ชฉ์ ์ถ๊ฐํ  ๋ ์ฌ์ฉํ  id
  // const names = ['๋์ฌ๋', '์ผ์', '๋', '๋ฐ๋'];

  **const onChange = e => setInputText(e.target.value);**

  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const nameList = names.map( name => <li key={name.id}>{name.text}</li>);

  **// ul ์๋จ์ input, button ๋ ๋๋ง ํ input์ ์ํ ๊ด๋ฆฌํ๊ธฐ**
  return (
    <>
      **<input value={inputText} onChange={onChange} />
      <button>์ถ๊ฐ</button>**
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```

---

- ๋ฒํผ ํด๋ฆญ์ ํธ์ถํ  onClick ํจ์ ์ ์ธํ์ฌ button onClick ์ด๋ฒคํธ ์ค์ 
- onClick ํจ์์์๋ ๋ฐฐ์ด์ ๋ด์ฅ ํจ์ concat ์ฌ์ฉํ์ฌ ์๋ก์ด ํญ๋ชฉ์ ์ถ๊ฐํ ๋ฐฐ์ด ๋ง๋ค๊ณ 
- setNamesํตํด ์ํ ์๋ฐ์ดํธ
- concat : ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ฆ ( โ  push : ๊ธฐ์กด ๋ฐฐ์ด ๋ณ๊ฒฝ)
- button์ด ํด๋ฆญ๋  ๋ ๊ธฐ์กด์ input ๋ด์ฉ์ ๋น์ฐ๋ ๊ฒ๋ ๊ตฌํ

IterationSample.js

```jsx
import React, { useState } from 'react';

// map() ํจ์ ๊ณ ์ ํ key ๊ฐ index ๋์  name.id ๊ฐ์ผ๋ก ์ง์ 
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '๋์ฌ๋' },
    { id: 2, text: '์ผ์' },
    { id: 3, text: '๋' },
    { id: 4, text: '๋ฐ๋' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // ์๋ก์ด ํญ๋ชฉ์ ์ถ๊ฐํ  ๋ ์ฌ์ฉํ  id
  // const names = ['๋์ฌ๋', '์ผ์', '๋', '๋ฐ๋'];

  const onChange = e => setInputText(e.target.value);

  **// - ๋ฒํผ ํด๋ฆญ์ ํธ์ถํ  onClick ํจ์ ์ ์ธํ์ฌ button onClick ์ด๋ฒคํธ ์ค์ 
  // - onClick ํจ์์์๋ ๋ฐฐ์ด์ ๋ด์ฅ ํจ์ concat ์ฌ์ฉํ์ฌ ์๋ก์ด ํญ๋ชฉ์ ์ถ๊ฐํ ๋ฐฐ์ด ๋ง๋ค๊ณ 
  // - setNamesํตํด ์ํ ์๋ฐ์ดํธ
  // - concat : ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ฆ ( โ  push : ๊ธฐ์กด ๋ฐฐ์ด ๋ณ๊ฒฝ)
  // - button์ด ํด๋ฆญ๋  ๋ ๊ธฐ์กด์ input ๋ด์ฉ์ ๋น์ฐ๋ ๊ฒ๋ ๊ตฌํ
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId ๊ฐ์ id๋ก ์ค์ ํ๊ณ 
      text: inputText
    });
    setNextId(nextId + 1); // nextId ๊ฐ์ 1์ ๋ํด์ค๋ค
    setNames(nextNames); // names ๊ฐ์ ์๋ฐ์ดํธ ํ๋ค.
    setInputText(''); // inputText๋ฅผ ๋น์ด๋ค.
  }**

  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const nameList = names.map( name => <li key={name.id}>{name.text}</li>);

  // ul ์๋จ์ input, button ๋ ๋๋ง ํ input์ ์ํ ๊ด๋ฆฌํ๊ธฐ
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button **onClick={onClick}**>์ถ๊ฐ</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```

- ๋ฆฌ์กํธ์์ ์ํ๋ฅผ ์๋ฐ์ดํธ ํ  ๋๋ ๊ธฐ์กด ์ํ๋ฅผ ๊ทธ๋๋ก ๋๋ฉด์ ์๋ก์ด ๊ฐ์ ์ํ๋ก ์ค์ ํด์ผ ํจ
  โ ๋ถ๋ณ์ฑ ์ ์ง : ๋์ค์ ๋ฆฌ์กํธ ์ปดํฌ๋ํธ์ ์ฑ๋ฅ์ ์ต์ ํํ  ์ ์์

---

### 6.4.3 ๋ฐ์ดํฐ ์ ๊ฑฐ ๊ธฐ๋ฅ ๊ตฌํํ๊ธฐ

- ๊ฐ ํญ๋ชฉ์ ๋๋ธ ํด๋ฆญ ํ์ ๋ ํด๋น ํญ๋ชฉ ์ ๊ฑฐ ๊ธฐ๋ฅ
- ๋ถ๋ณ์ฑ ์ ์งํ๋ฉฐ ์๋ฐ์ดํธ ํด์ฃผ๊ธฐ โ ์๋ก์ด ๋ฐฐ์ด ์์ฑ, ํน์  ํญ๋ชฉ ์ง์ธ ๋ ์ฌ์ฉ
  - ๋ฐฐ์ด ๋ด์ฅ ํจ์ filter() : ๋ฐฐ์ด์์ ํน์  ์กฐ๊ฑด์ ๋ง์กฑํ๋ ์์๋ค๋ง ์ฝ๊ฒ ๋ถ๋ฅ

IterationSample.js

```jsx
import React, { useState } from 'react';

// map() ํจ์ ๊ณ ์ ํ key ๊ฐ index ๋์  name.id ๊ฐ์ผ๋ก ์ง์ 
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '๋์ฌ๋' },
    { id: 2, text: '์ผ์' },
    { id: 3, text: '๋' },
    { id: 4, text: '๋ฐ๋' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // ์๋ก์ด ํญ๋ชฉ์ ์ถ๊ฐํ  ๋ ์ฌ์ฉํ  id
  // const names = ['๋์ฌ๋', '์ผ์', '๋', '๋ฐ๋'];

  const onChange = e => setInputText(e.target.value);

  // - ๋ฒํผ ํด๋ฆญ์ ํธ์ถํ  onClick ํจ์ ์ ์ธํ์ฌ button onClick ์ด๋ฒคํธ ์ค์ 
  // - onClick ํจ์์์๋ ๋ฐฐ์ด์ ๋ด์ฅ ํจ์ concat ์ฌ์ฉํ์ฌ ์๋ก์ด ํญ๋ชฉ์ ์ถ๊ฐํ ๋ฐฐ์ด ๋ง๋ค๊ณ 
  // - setNamesํตํด ์ํ ์๋ฐ์ดํธ
  // - concat : ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ฆ ( โ  push : ๊ธฐ์กด ๋ฐฐ์ด ๋ณ๊ฒฝ)
  // - button์ด ํด๋ฆญ๋  ๋ ๊ธฐ์กด์ input ๋ด์ฉ์ ๋น์ฐ๋ ๊ฒ๋ ๊ตฌํ
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId ๊ฐ์ id๋ก ์ค์ ํ๊ณ 
      text: inputText
    });
    setNextId(nextId + 1); // nextId ๊ฐ์ 1์ ๋ํด์ค๋ค
    setNames(nextNames); // names ๊ฐ์ ์๋ฐ์ดํธ ํ๋ค.
    setInputText(''); // inputText๋ฅผ ๋น์ด๋ค.
  };

**//   ### ๋ฐ์ดํฐ ์ ๊ฑฐ ๊ธฐ๋ฅ ๊ตฌํํ๊ธฐ
// - ๊ฐ ํญ๋ชฉ์ ๋๋ธ ํด๋ฆญ ํ์ ๋ ํด๋น ํญ๋ชฉ ์ ๊ฑฐ ๊ธฐ๋ฅ
// - ๋ถ๋ณ์ฑ ์ ์งํ๋ฉฐ ์๋ฐ์ดํธ ํด์ฃผ๊ธฐ โ ์๋ก์ด ๋ฐฐ์ด ์์ฑ, ํน์  ํญ๋ชฉ ์ง์ธ ๋ ์ฌ์ฉ
// - ๋ฐฐ์ด ๋ด์ฅ ํจ์ filter() : ๋ฐฐ์ด์์ ํน์  ์กฐ๊ฑด์ ๋ง์กฑํ๋ ์์๋ค๋ง ์ฝ๊ฒ ๋ถ๋ฅ
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

  // ul ์๋จ์ input, button ๋ ๋๋ง ํ input์ ์ํ ๊ด๋ฆฌํ๊ธฐ
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>์ถ๊ฐ</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
```

---

# โญ๏ธโญ๏ธโญ๏ธ์ ๋ฆฌ(๋ฐฐ์ด ๋ ๋๋ง map(), key๊ฐ ์ฌ์ฉ, ๋ฐฐ์ด ์ง์  ์ ๊ทผx concat, filter ์ฌ์ฉโญ๏ธโญ๏ธโญ๏ธ

- ๋ฐ๋ณต๋๋ ๋ฐ์ดํฐ ๋ ๋๋ง โ ์ ๋์ ์ธ ๋ฐฐ์ด ๋ค๋ฃฐ ์ ์ปดํฌ๋ํธ ๋ฐฐ์ด ๋ ๋๋ง ํ  ๋ key ๊ฐ ์ค์ !! ๊ณ ์ ๊ฐ์ผ๋ก
- key ๊ฐ ์ค์  ์ map ํจ์์ ์ธ์๋ก ์ ๋ฌ๋๋ ํจ์ ๋ด๋ถ์์ ์ปดํฌ๋ํธ props๋ฅผ ์ค์ ํ๋ฏ์ด ์ค์ 
- key ๊ฐ์ ์ธ์ ๋ ์ ์ผํ ๊ฐ(๊ณ ์ ๊ฐ)์ผ๋ก ์ค์ (์ค๋ณตX)
- ๊ณ ์  ๋ฒํธ๊ฐ ์์ ๋๋ map ํจ์์ ์ ๋ฌ๋๋ ์ฝ๋ฐฑ ํจ์์ ์ธ์์ธ index ๊ฐ์ ์ฌ์ฉ(์ตํ์ ๋ฐฉ๋ฒ)
- ๊ณ ์ ๊ฐ ์์ ๋๋ง index ์ฌ์ฉ. index๋ฅผ key๋ก ์ฌ์ฉํ๋ฉด ๋ฐฐ์ด์ด ๋ณ๊ฒฝ๋  ๋ ํจ์ธ์ ์ผ๋ก ๋ฆฌ๋ ๋๋งํ์ง ๋ชป ํจ
- ์ํ ์์์ ๋ฐฐ์ด ๋ณํ ์ ๋ฐฐ์ฌ๋ฌ์ ์ง์  ์ ๊ทผํ์งX
- concat, filter ๋ฑ์ ๋ฐฐ์ด ๋ด์ฅ ํจ์ ์ฌ์ฉ โ ์๋ก์ด ๋ฐฐ์ด ์์ฑ ํ ์ด๋ฅผ ์๋ก์ด ์ํ๋ก ์ค์ 

---

# 7์ฅ ์ปดํฌ๋ํธ์ ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋

- ๋ชจ๋  ๋ฆฌ์กํธ ์ปดํฌ๋ํธ์๋ ๋ผ์ดํ ์ฌ์ดํด(์๋ช์ฃผ๊ธฐ) ์กด์ฌ
- ์ปดํฌ๋ํธ ์๋ช : ํ์ด์ง์ ๋ ๋๋ง๋๊ธฐ ์  ์ค๋น ๊ณผ์ ์์ ์์ ~ ํ์ด์ง์์ ์ฌ๋ผ์ง ๋ ๋๋จ
- ์ปดํฌ๋ํธ๋ฅผ ์ฒ์์ผ๋ก ๋ ๋๋ง ํ  ๋ ์ด๋ค ์์ ์ฒ๋ฆฌ, ์ปดํฌ๋ํธ์๋ฐ์ดํธํ๊ธฐ ์ ํ๋ก ์์ ์ฒ๋ฆฌ, ๋ถํ์ํ ์๋ฐ์ดํธ ๋ฐฉ์ง ๋ฑ ์ผ ๋ โ ์ปดํฌ๋ํธ ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋ ์ฌ์ฉ
- ๋ผ์ดํ ์ฌ์ดํด ๋ฉ์๋ : ํด๋์คํ ์ปดํฌ๋ํธ์์๋ง ์ฌ์ฉ ๊ฐ๋ฅ
- Hooks ๊ธฐ๋ฅ : ํจ์ ์ปดํฌ๋ํธ์์๋ Hooks์ผ๋ก ์ฌ์ฉ

---

## 7.1 ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋์ ์ดํด

### ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋์ ์ข๋ฅ(์ด 9๊ฐ์ง)\_Will~/Did~

- Will ~ : ์ด๋ค ์์์ ์๋ํ๊ธฐ ์ ์ ์คํ๋๋ ๋ฉ์๋
- Did ~ : ์ด๋ค ์์ ์๋ํ ํ์ ์คํ๋๋ ๋ฉ์๋
  โ ์ปดํฌ๋ํธ ํด๋์ค์์ ๋ฎ์ด ์จ ์ ์ธ. ํจ์ผ๋ก์จ ์ฌ์ฉ
  ![image.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/855420b6-9da8-47dd-af10-6128c068e563/image.png)

---

### ์นดํ๊ณ ๋ฆฌ 3์ข๋ฅ\_๋ง์ดํธ/์๋ฐ์ดํธ/์ธ๋ง์ดํธ

1. ๋ง์ดํธ(mount) : DOM์ด ์์ฑ๋๊ณ  ์น ๋ธ๋ผ์ฐ์ ์์ ๋ํ๋๋ ๊ฒ

   <๋ง์ดํธํ  ๋ ํธ์ถํ๋ ๋ฉ์๋>

   - constructor : ์ปดํฌ๋ํธ๋ฅผ ์๋ก ๋ง๋ค ๋๋ง๋ค ํธ์ถ๋๋ ํด๋์ค ์์ฑ์ ๋ฉ์๋
   - getDerivedStateFormProps : props์ ์๋ ๊ฐ์ state์ ๋ฃ์ ๋ ์ฌ์ฉํ๋ ๋ฉ์๋
   - render : ์ฐ๋ฆฌ๊ฐ ์ค๋นํ UI๋ฅผ ๋ ๋๋งํ๋ ๋ฉ์๋
   - componentDidMount : ์ปดํฌ๋ํธ๊ฐ ์น ๋ธ๋ผ์ฐ์ ์์ ๋ํ๋ ํ ํธ์ถํ๋ ๋ฉ์๋
     ![image.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1a3fcc6-7247-46db-9abc-f6863b619610/image.jpeg)

   ***

2. ์๋ฐ์ดํธ(update) : 4๊ฐ์ง ๊ฒฝ์ฐ์ ์๋ฐ์ดํธ ํจ

   1. props๊ฐ ๋ฐ๋ ๋
   2. state๊ฐ ๋ฐ๋ ๋
   3. ๋ถ๋ชจ ์ปดํฌ๋ํธ๊ฐ ๋ฆฌ๋ ๋๋ง ๋  ๋
   4. this.forceUpdate๋ก ๋ ๋๋ง์ ํธ๋ฆฌ๊ฑฐํ  ๋

   ***

   <์๋ฐ์ดํธํ  ๋ ํธ์ถํ๋ ๋ฉ์๋>

   - getDerivedStateFromProps : ๋ง์ดํธ ๊ณผ์ ์์๋ ํธ์ถ ๋๋ ๋ฉ์๋๋ก ์๋ฐ์ดํธ๊ฐ ์์ํ๊ธฐ ์ ์๋ ํธ์ถ. props์ ๋ณํ์ ๋ฐ๋ผ state ๊ฐ์ ๋ณํ ์ฃผ๊ณ  ์ถ์ ๋ ์ฌ์ฉ
   - shouldComponentUpdate : ์ปดํฌ๋ํธ๊ฐ ๋ฆฌ๋ ๋๋ง์ ํด์ผ ํ ์ง ๋ง์์ผ ํ ์ง ๊ฒฐ์ ํ๋ ๋ฉ์๋.
     - true/false ๊ฐ ๋ฐํ ํด์ผ ํจ
     - true ๋ฐํ โ ๋ค์ ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋ ๊ณ์ ์คํ
     - false ๋ฐํ โ ์์ ์ค์ง(์ปดํฌ๋ํธ ๋ฆฌ๋ ๋๋งX)
     - ๋ง์ฝ ํน์  ํจ์์์ this.forceUpdate() ํจ์๋ฅผ ํธ์ถํ๋ค๋ฉด ์ด ๊ณผ์ ์ ์๋ตํ๊ณ  ๋ฐ๋ก render ํจ์ ํธ์ถ ํจ
   - getSnapshotBeforeUpdate : ์ปดํฌ๋ํธ ๋ณํ๋ฅผ DOM์ ๋ฐ์ํ๊ธฐ ๋ฐ๋ก ์ง์ ์ ํธ์ถํ๋ ๋ฉ์๋
   - componentDidUpdate : ์ปดํฌ๋ํธ์ ์๋ฐ์ดํธ ์์์ด ๋๋ ํ ํธ์ถํ๋ ๋ฉ์๋
     ![image.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36011712-c079-4545-97d2-738e991bc7b8/image.jpeg)

   ***

3. ์ธ๋ง์ดํธ(unmount) : ๋ง์ดํธ ๋ฐ๋ ๊ณผ์ . ์ปดํฌ๋ํธ๋ฅผ DOM์์ ์ ๊ฑฐํ๋ ๊ฒ
   - componentWillUnmount : ์ปดํฌ๋ํธ๊ฐ ์น ๋ธ๋ผ์ฐ์ ์์์ ์ฌ๋ผ์ง๊ธฐ ์ ์ ํธ์ถํ๋ ๋ฉ์๋
     ![image.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/faad9096-ceb1-45ff-9f9c-aed5f144aff8/image.png)

---

## 7.2 ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋ ์ดํด๋ณด๊ธฐ

### render() { โฆ } ํจ์

- ์ปดํฌ๋ํธ ๋ชจ์์๋ฅผ ์ ์
- ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋ ์ค ์ ์ผํ ํ์ ๋ฉ์๋
- ๋ฉ์๋ ์์์ this.props์ this.state์ ์ ๊ทผ ๊ฐ๋ฅ
- ๋ฆฌ์กํธ ์์(๋ฐ๋ก ์ ์ธํ ์ปดํฌ๋ํธ๋ divํ๊ทธ ๋ฑ..) ๋ฐํ
- ์๋ฌด๊ฒ๋ ๋ณด์ฌ ์ฃผ๊ณ  ์ถ์ง ์๋ค๋ฉด null or false ๊ฐ ๋ฐํ

### constructor(props) { โฆ } ๋ฉ์๋

- ์์ฑ์ ๋ฉ์๋ : ์ปดํฌ๋ํธ ๋ง๋ค ๋ ์ฒ์์ผ๋ก ์คํ
- ์ด๊ธฐ state ์ ํ  ์ ์์

### getDerivedStateFromProps(nextProps, prevState) { โฆ } ๋ฉ์๋ (๊ตฌ. componentWillMount)

- ๋ฆฌ์กํธ v16.3 ์ดํ ์๋ก์ด ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋
- props๋ก ๋ฐ์ ์จ ๊ฐ์ state์ ๋๊ธฐํ ์ํค๋ ์ฉ๋๋ก ์ฌ์ฉ
- ์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ๋  ๋์ ์๋ฐ์ดํธ ๋  ๋ ํธ์ถ
  ```jsx
  static getDerivedStateFromProps(nextProps, prevState) {
  	if(nextProps.value !== prevState.value) { // ์กฐ๊ฑด์ ๋ฐ๋ผ ํน์  ๊ฐ ๋๊ธฐํ
  		return { value: nextProps.value };
  	}
  	return null; // state ๋ฅผ ๋ณ๊ฒฝํ  ํ์๊ฐ ์๋ค๋ฉด null์ ๋ฐํ
  }
  ```

### componentWillUpdate

- ์ปดํฌ๋ํธ๊ฐ ์ฌ ๋๋๋ง ๋๊ธฐ ์ง์ ์ ๋ถ๋ฆผ
- ์ฌ๊ธฐ์  setState ๊ฐ์ ๊ฒ ์ฐ๋ฉด ์ ๋จ

### componentDidMount() { โฆ } ๋ฉ์๋

- ์ปดํฌ๋ํธ ์์ฑ ํ ์ฒซ ๋ ๋๋ง์ ๋ค ๋ง์น ํ ์คํ
- ์ด ์์์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋๋ ํ๋ ์์ํฌ์ ํจ์๋ฅผ ํธ์ถํ๊ฑฐ๋ ์ด๋ฒคํธ ๋ฑ๋ก, setTimeout, setInterval, ๋คํธ์ํฌ ์์ฒญ ๊ฐ์ ๋น๋๊ธฐ ์์ ์ฒ๋ฆฌ

### shouldComponentUpdate(nextProps, nextState) { โฆ } ๋ฉ์๋

- props ๋๋ state ๋๋ ๋ ๋ค ๋ณ๊ฒฝํ์ ๋, ๋ฆฌ๋ ๋๋ง์ ์์ํ ์ง ์ฌ๋ถ๋ฅผ ์ง์ ํ๋ ๋ฉ์๋
- ๋ฐ๋์ true/false ๊ฐ ๋ฐํ
- ๋ฐ๋ก ์์ฑ ์ํ  ์ ๊ธฐ๋ณธ์ ์ผ๋ก ์ธ์ ๋ true ๊ฐ ๋ฐํ
- false ๋ฐํ ์ ์๋ฐ์ดํธ ๊ณผ์  ์ค์ง
- ์ด ๋ฉ์๋ ์์์ ํ์ฌ props์ state๋ this.props์ this.state๋ก ์ ๊ทผ
- ์๋ก ์ค์ ๋  props ๋๋ state๋ nextProps์ nextState๋ก ์ ๊ทผ
- ํ๋ก์ ํธ ์ฑ๋ฅ ์ต์ ํํ  ๋, ์ํฉ์ ๋ง๋ ์๊ณ ๋ฆฌ์ฆ ์์ฑํ์ฌ ๋ฆฌ๋ ๋๋ง ๋ฐฉ์งํ  ๋๋ false ๊ฐ ๋ฐํ

### getSnapshotBeforeUpdate(prevProps, prevState) { โฆ} ๋ฉ์๋ - ex.์คํฌ๋กค๋ฐ ์์น ์ ์ง (๊ตฌ. componentWillUpdate)

- ๋ฆฌ์กํธ v16.3 ์ดํ ๋ง๋  ๋ฉ์๋
- render์์ ๋ง๋ค์ด์ง ๊ฒฐ๊ณผ๋ฌผ์ด ๋ธ๋ผ์ฐ์ ์ ์ค์ ๋ก ๋ฐ์๋๊ธฐ ์ง์ ์ ํธ์ถ
- ์ด ๋ฉ์๋์์ ๋ฐํํ๋ ๊ฐ์ componentDidUpdate ์์ ์ธ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ธ snapshot ๊ฐ์ผ๋ก ์ ๋ฌ ๋ฐ์ ์ ์์(์ฃผ๋ก ์๋ฐ์ดํธํ๊ธฐ ์ง์ ์ ๊ฐ์ ์ฐธ๊ณ ํ  ์ผ์ด ์์ ๋ ํ์ฉ. ex) ์คํฌ๋กค๋ฐ ์์น ์ ์ง)
  ```jsx
  getSnapshotBeforeUpdate(prevProps, prevState) {
  	if(prevState.array !== this.state.array) {
  		const { scrollTop, scrollHeight } = this.list
  		return {scrollTop, scrollHeight };
  	}
  }
  ```

### componentDidUpdate(prevProps, prevState, snapshot) { โฆ} ๋ฉ์๋

- ๋ฆฌ๋ ๋๋ง ์๋ฃ ํ ์คํ
- ์๋ฐ์ดํธ ๋๋ ์งํ์ด๋ฏ๋ก DOM ๊ด๋ จ ์ฒ๋ฆฌํด๋ ๋ฌด๋ฐฉ
- prevProps ๋๋ prevState ์ฌ์ฉํด ์ปดํฌ๋ํธ๊ฐ ์ด์ ์ ๊ฐ์ก๋ ๋ฐ์ดํฐ์ ์ ๊ทผ ๊ฐ๋ฅ
- getSnapshotBeforeUpdate์์ ๋ฐํํ ๊ฐ์ด ์์ ์ ์ฌ๊ธฐ์ snapshot ๊ฐ ์ ๋ฌ๋ฐ์ ์ ์์

### componentWillUnmount() { โฆ } ๋ฉ์๋

- ์ปดํฌ๋ํธ๋ฅผ DOM์์ ์ ๊ฑฐํ  ๋ ์คํ
- componentDidMount์์ ๋ฑ๋กํ ์ด๋ฒคํธ, ํ์ด๋จธ, ์ง์  ์์ฑํ DOM ์ด ์๋ค๋ฉด ์ฌ๊ธฐ์ ์ ๊ฑฐ ์์ ํด์ผ ํจ

### componentDidCatch(error, info) { โฆ } ๋ฉ์๋

- ๋ฆฌ์กํธ v16์์ ๋์
- ์ปดํฌ๋ํธ ๋ ๋๋ง ๋์ค์ ์๋ฌ ๋ฐ์ ์ ์ ํ๋ฆฌ์ผ์ด์ ๋จนํต๋์ง ์๊ณ  ์ค๋ฅ UI๋ฅผ ๋ณด์ฌ ์ค ์ ์๊ฒ ํด์ค
- error : ํ๋ผ๋ฏธํฐ์ ์ด๋ค ์๋ฌ๊ฐ ๋ฐ์ํ๋์ง ์๋ ค์ค
- info : ์ค๋ฅ ์ฝ๋ ์์น ์ ๋ณด ์๋ ค์ค
- ์ค์  ์ฌ์ฉ ์ console.log ๋ง๊ณ  ์๋ฒ API ํธ์ถํ์ฌ ๋ฐ๋ก ์์ง๊ฐ๋ฅ
- ์ปดํฌ๋ํธ ์์ ์๊ฒ ๋ฐ์ํ๋ ์๋ฌ๋ ๋ชป ์ฐพ์
- ์์ ์ this.props.children ์ผ๋ก ์ ๋ฌ๋๋ ์ปดํฌ๋ํธ์์ ๋ฐ์ํ๋ ์๋ฌ๋ง ์ฐพ์
  ```jsx
  componentDidCatch(error, info) {
  	this.setState({
  		error: true
  	});
  	console.log({ error, info });
  }
  ```

---

## 7.3 ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋ ์ฌ์ฉํ๊ธฐ

![image.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6302dc8-418f-451f-b5aa-8db6a461a701/image.jpeg)

![image.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40e9276d-0dea-4451-aa5a-f9954622370e/image.png)

### 7.3.2 ๋ผ์ดํ์ฌ์ดํด ์คํ

LifeCycleSample.js

```jsx
import React, { Component } from "react";
// ๊ฐ ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋ ์คํํ  ๋๋ง๋ค ์ฝ์ ๋๋ฒ๊ฑฐ์ ๊ธฐ๋ก
// ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ props๋ก ์์์ ๋ฐ์ ๋ฒํผ ๋๋ฅด๋ฉด state.number ๊ฐ 1์ฉ ๋ํจ
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref๋ฅผ ์ค์ ํ  ๋ถ๋ถ

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // getDerivedStateFromProps : ๋ถ๋ชจ์๊ฒ์ ๋ฐ์ color ๊ฐ์ state ์ ๋๊ธฐํํ๊ณ  ์์
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // shouldComponentUpdate : state.number ๊ฐ์ ๋ง์ง๋ง ์๋ฆฌ์๊ฐ 4๋ฉด ๋ฆฌ๋ ๋๋ง ์ทจ์
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // ์ซ์์ ๋ง์ง๋ง ์๋ฆฌ๊ฐ 4๋ฉด ๋ฆฌ๋ ๋๋งํ์ง ์์ต๋๋ค.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // getSnapshotBeforeUpdate : DOM์ ๋ณํ๊ฐ ์ผ์ด๋๊ธฐ ์ง์ ์ ์์ ์์ฑ snapshot ๊ฐ์ผ๋ก ๋ฐํํ์ฌ
  // ์ด๊ฒ์ componentDidUpdate์์ ์กฐํํ  ์ ์๊ฒ ํด์ค
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("์๋ฐ์ดํธ๋๊ธฐ ์ง์  ์์: ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>๋ํ๊ธฐ</button>
      </div>
    );
  }
}
// React.StrictMode๊ฐ ์ ์ฉ๋ผ ์์ผ๋ฉด ์ผ๋ถ ๋ผ์ด๋ธ์ฌ์ดํด ๋ ๋ฒ์ฉ ํธ์ถ ๋จ
// ๊ฐ๋ฐ ํ๊ฒฝ์์๋ง ๋ ๋ฒ์ฉ ํธ์ถ ๋๋ ๊ฒ, ํ๋ก๋์ ํ๊ฒฝ์์๋ ์ ์ ํธ์ถ ๋จ
export default LifeCycleSample;
```

App.js

```jsx
import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

// ๋๋ค ์์ ์์ฑ
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
// 16777215 => hex ๋ก ffffff์ด๋ฏ๋ก ํด๋น ์ฝ๋๋ 000000๋ถํฐ ffffff ๊ฐ ๋ฐํ

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  // ๋ฒํผ์ ๋ ๋๋งํ๊ณ  ๋๋ฅผ ๋๋ง๋ค handleClick ๋ฉ์๋ ํธ์ถ๋๊ฒ ์ด๋ฒคํธ ์ค์ 
  // ๋ถ๋ฌ์จ LifeCycleSample ์ปดํฌ๋ํธ์ color ๊ฐ์ props๋ก ์ค์ 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>๋๋ค ์์</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
```

- ์ฝ์์ฐฝ
- ---------์๋ก๊ณ ์นจ------------
  constructor
  constructor
  getDerivedStateFromProps
  getDerivedStateFromProps
  render
  render
  componentDidMount
  componentWillUnmount
  componentDidMount
  ----------๋ํ๊ธฐ ๋ฒํผ ํด๋ฆญ------------
  getDerivedStateFromProps
  getDerivedStateFromProps
  shouldComponentUpdate {color: '#000000'} {number: 1, color: '#000000'}
  shouldComponentUpdate {color: '#000000'} {number: 1, color: '#000000'}
  render
  render
  getSnapshotBeforeUpdate
  componentDidUpdate {color: '#000000'} {number: 0, color: '#000000'}
  ----------๋๋ค ์์ ํด๋ฆญ------------
  getDerivedStateFromProps
  getDerivedStateFromProps
  shouldComponentUpdate {color: '#8b75d0'} {number: 1, color: '#8b75d0'}
  shouldComponentUpdate {color: '#8b75d0'} {number: 1, color: '#8b75d0'}
  render
  render
  getSnapshotBeforeUpdate
  componentDidUpdate {color: '#000000'} {number: 1, color: '#000000'}
  ์๋ฐ์ดํธ๋๊ธฐ ์ง์  ์์: rgb(0, 0, 0)
  ----------๋ํ๊ธฐ ๋ฒํผ ํด๋ฆญ------------
  getDerivedStateFromProps
  getDerivedStateFromProps
  shouldComponentUpdate {color: '#8b75d0'} {number: 2, color: '#8b75d0'}
  shouldComponentUpdate {color: '#8b75d0'} {number: 2, color: '#8b75d0'}
  render
  render
  getSnapshotBeforeUpdate
  componentDidUpdate {color: '#8b75d0'} {number: 1, color: '#8b75d0'}

---

### 7.3.3 ์๋ฌ ์ก์๋ด๊ธฐ

- ์๋์ ์ผ๋ก ์๋ฌ ๋ฐ์์ํค๊ธฐ - ์กด์ฌํ์ง ์๋ props์ธ missing๊ฐ์ฒด์ value ์กฐํํด์ ๋ ๋๋ง

LifeCycleSample.js

```jsx
import React, { Component } from 'react';
// ๊ฐ ๋ผ์ดํ์ฌ์ดํด ๋ฉ์๋ ์คํํ  ๋๋ง๋ค ์ฝ์ ๋๋ฒ๊ฑฐ์ ๊ธฐ๋ก
// ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ props๋ก ์์์ ๋ฐ์ ๋ฒํผ ๋๋ฅด๋ฉด state.number ๊ฐ 1์ฉ ๋ํจ
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null; // ref๋ฅผ ์ค์ ํ  ๋ถ๋ถ

  constructor (props) {
    super(props);
    console.log('constructor');
  }

  // getDerivedStateFromProps : ๋ถ๋ชจ์๊ฒ์ ๋ฐ์ color ๊ฐ์ state ์ ๋๊ธฐํํ๊ณ  ์์
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

  // shouldComponentUpdate : state.number ๊ฐ์ ๋ง์ง๋ง ์๋ฆฌ์๊ฐ 4๋ฉด ๋ฆฌ๋ ๋๋ง ์ทจ์
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // ์ซ์์ ๋ง์ง๋ง ์๋ฆฌ๊ฐ 4๋ฉด ๋ฆฌ๋ ๋๋งํ์ง ์์ต๋๋ค.
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

  // getSnapshotBeforeUpdate : DOM์ ๋ณํ๊ฐ ์ผ์ด๋๊ธฐ ์ง์ ์ ์์ ์์ฑ snapshot ๊ฐ์ผ๋ก ๋ฐํํ์ฌ
  // ์ด๊ฒ์ componentDidUpdate์์ ์กฐํํ  ์ ์๊ฒ ํด์ค
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
      console.log('์๋ฐ์ดํธ๋๊ธฐ ์ง์  ์์: ', snapshot);
    }
  }

  render () {
    console.log('render');

    const style = {
      color: this.props.color
    };

    // return (
    //   <div>
    //     <h1 style={style} ref={ref => this.myRef=ref}>
    //       {this.state.number}
    //     </h1>
    //     <p>color: {this.state.color}</p>
    //     <button onClick={this.handleClick}>
    //       ๋ํ๊ธฐ
    //     </button>
    //   </div>
    // );

    **// ์๋์ ์ผ๋ก ์๋ฌ ๋ฐ์์ํค๊ธฐ - ์กด์ฌํ์ง ์๋ props์ธ missing๊ฐ์ฒด์ value ์กฐํํด์ ๋ ๋๋ง
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>๋ํ๊ธฐ</button>
      </div>
    )**
  }
}
// React.StrictMode๊ฐ ์ ์ฉ๋ผ ์์ผ๋ฉด ์ผ๋ถ ๋ผ์ด๋ธ์ฌ์ดํด ๋ ๋ฒ์ฉ ํธ์ถ ๋จ
// ๊ฐ๋ฐ ํ๊ฒฝ์์๋ง ๋ ๋ฒ์ฉ ํธ์ถ ๋๋ ๊ฒ, ํ๋ก๋์ ํ๊ฒฝ์์๋ ์ ์ ํธ์ถ ๋จ
export default LifeCycleSample;
```

ErrorBoundary.js

```jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>์๋ฌ๊ฐ ๋ฐ์ํ์ต๋๋ค..</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
```

- ์๋ฌ๊ฐ ๋ฐ์ํ๋ฉด componentDidCatch ๋ฉ์๋๊ฐ ํธ์ถ๋๋ฉฐ
- ์ด ๋ฉ์๋๋ this.state.error ๊ฐ์ true๋ก ์๋ฐ์ดํธํด ์ค
- render ํจ์๋ this.state.error ๊ฐ์ด ture๋ฉด ๋ฌธ๊ตฌ ๋ณด์ฌ์ค

App.js

```jsx
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import LifeCycleSample from './LifeCycleSample';

// ๋๋ค ์์ ์์ฑ
function getRandomColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
// 16777215 => hex ๋ก ffffff์ด๋ฏ๋ก ํด๋น ์ฝ๋๋ 000000๋ถํฐ ffffff ๊ฐ ๋ฐํ

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  // ๋ฒํผ์ ๋ ๋๋งํ๊ณ  ๋๋ฅผ ๋๋ง๋ค handleClick ๋ฉ์๋ ํธ์ถ๋๊ฒ ์ด๋ฒคํธ ์ค์ 
  // ๋ถ๋ฌ์จ LifeCycleSample ์ปดํฌ๋ํธ์ color ๊ฐ์ props๋ก ์ค์ 

  **// ์๋ฌ๊ฐ ๋ฐ์ํ๋ฉด componentDidCatch ๋ฉ์๋๊ฐ ํธ์ถ๋๋ฉฐ,
  // ์ด ๋ฉ์๋๋ this.state.error ๊ฐ์ true๋ก ์๋ฐ์ดํธํด ์ค
  // render ํจ์๋ this.state.error ๊ฐ์ด ture๋ฉด ๋ฌธ๊ตฌ ๋ณด์ฌ์ค**
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>๋๋ค ์์</button>
        {/* <LifeCycleSample color={this.state.color} /> */}
        **<ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>**
      </div>
    );
  }
}

export default App;
```

---
