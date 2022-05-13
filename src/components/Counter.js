import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Counter = (props) => {
  const { count } = useContext(CounterContext)

  return (
    <div>
      <h1>{ count }</h1>
    </div>
  );
};

export default Counter;
