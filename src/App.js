import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const { count } = useSelector(state => state.count, shallowEqual);
  return (
    <div className="App">
      <div>
        <span>{count}</span>
      </div>
      <button onClick={() => dispatch({ type: 'increment-counter' })}>+</button>
      <button onClick={() => dispatch({ type: 'diminished-counter' })}>-</button>
    </div>
  );
}

export default App;
