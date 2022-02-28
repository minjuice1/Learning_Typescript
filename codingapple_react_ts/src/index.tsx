import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import {createSlice, configureStore, PayloadAction} from "@reduxjs/toolkit";
import Redux from './Redux';

const 초기값:{count: number, user: string} = {count : 0, user: 'kim'};

// toolkit과 basic의 다른점 : state, reducer를 object로 정리한다는게 다름
// 이 문법의 좋은 점 : 1. 함수라 보기 좋음 2. state 수정시 사본 만들 필요 없음
// state + reducer 합친걸 slice라고 부름.
const counterSlice = createSlice({
  name: 'counter',
  initialState : 초기값,
  reducers: {
    증가 (state) {
      // return이 없기때문에 타입지정 x
      state.count += 2
    },
    감소 (state) {
      state.count -= 2
    },
    맘대로증가 (state, action: PayloadAction<number>) {
      console.log(action)
      console.log(action.payload)
      state.count += action.payload
    }
  }
})


let store = configureStore({
  reducer: {
    // 위에서 만든 slice를 counter1로 변수명 지은거임.
    counter1 : counterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

// 수정방법 만든거 export
export let {증가, 감소, 맘대로증가} = counterSlice.actions


// basic redux
function reducer(state = 초기값, action: {type: string}) : {count : number} {
  if (action.type === "증가") {
    return {...state, count : state.count + 1}
  } else if (action.type === '감소') {
    return {...state, count : state.count - 1}
  } else {
    return 초기값
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Redux/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
