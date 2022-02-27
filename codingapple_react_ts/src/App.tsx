import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// 일반 프로젝트와 다른 점은 컴포넌트 파일은 js가 아니라 tsx로 확장자를 사용해야 함.
// ts랑 똑같은데 tsx문법을 지원.

function App() {
  return (
    <div className="App">
      <h4>Hello</h4>
      <Profile name="철수" age={20} ></Profile>
    </div>
  );
}


type UserType = {
  name: string,
  age: number,
}

interface User {
  name: string,
  age: number,
}

// component 만들 때 타입지정
// 함수 타입지정은 파라미터 & return 값
function Profile(props: User) :JSX.Element {

  // 굳이 유니언으로 타입을 지정해줘야한다면
  let [user, SetUser] = useState<string | number>('kim');

  return (
    <>
    <div>{props.name}</div>
    <div>{props.age}</div>
    <div>{user}</div>
    </>
  )
}

export default App;
