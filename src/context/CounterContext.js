import { createContext, useState } from 'react';

export const CounterContext = createContext()

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const alertUser = () => {
    alert("This is coming from the counter context")
  }

  return (
    <CounterContext.Provider value={{count, increase, decrease, alertUser}}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider
