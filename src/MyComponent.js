import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트에서 props 사용 : render 함수에서 this.props 비구조화 할당
// or class 내부에서 지정하는 방법
class MyComponent extends Component {
  
  static defaultProps = {
    name: '기본 이름'
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  
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