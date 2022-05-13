import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import CounterContextProvider from './context/CounterContext';
// import CounterContext from './context/CounterContext';

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Counter />
        <Button />
      </CounterContextProvider>
    </div>
  );
}

export default App;
