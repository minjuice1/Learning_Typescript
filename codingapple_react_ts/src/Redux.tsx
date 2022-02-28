import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, 증가, 감소, 맘대로증가 } from './index';
import { Dispatch } from 'redux';

const Redux = () => {
  const 꺼내온거 = useSelector((state : RootState) => state);
  const dispatch :Dispatch = useDispatch();

  return (
    <>
    <div className='App'>
    <button onClick={() => dispatch(감소())}>감소</button>
    {꺼내온거.counter1.count}
      <button onClick={() => dispatch(증가())}>증가</button>
    </div>
    <div className='App'>
      {꺼내온거.counter1.user}
      <button onClick={()=>dispatch(맘대로증가(3))}>맘대로증가</button>
    </div>
    </>
  )
}

export default Redux;