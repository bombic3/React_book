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
  { id: 3, value: false }
];
let nextArray = array.concat({ id: 4 }); // 새 항목 추가
nextArray.filter(item => item.id !== 2); // id 가 2인 항목 제거
nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item));
// id 가 1인 항목의 value 를 false 로 설정