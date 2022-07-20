import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decCount, incCount } from '../redux/Actions';

const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const handleInc = () => {
        dispatch(incCount())
    }
    const handleDec = () => {
        dispatch(decCount())
    }

    console.log("state" , state)

  return (
    <div>
      <h1>Counter</h1>
      <h3>count is:{state.count}</h3>
      <button onClick={() => handleInc()}>INC</button>
      <button onClick={() => handleDec()}>DEC</button>
    </div>
  )
}

export default Counter
