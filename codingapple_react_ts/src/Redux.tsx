import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './index';
import { Dispatch } from 'redux';

const Redux = () => {
  const 꺼내온거 = useSelector((state : RootState) => state);
  const dispatch :Dispatch = useDispatch();

  return (
    <>
    <div className='App'>
    <button onClick={() => dispatch({type : '감소'})}>감소</button>
    {꺼내온거.count}
      <button onClick={() => dispatch({type : '증가'})}>증가</button>
    </div>
    </>
  )
}

export default Redux;