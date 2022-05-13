import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Button = (props) => {
  const { increase, alertUser, decrease } = useContext(CounterContext)
  return (
    <div>
      <button onClick={decrease}>decrease</button>
      <button onClick={alertUser}>Issue an alert!</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Button;
