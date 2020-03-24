import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const increment = useCallback(
    () => dispatch({ type: 'increment-counter' }),
    [dispatch]
  )
  const diminished = useCallback(
    () => dispatch({ type: 'diminished-counter' }),
    [dispatch]
  )
  const { count } = useSelector(state => state.count, shallowEqual);
  return (
    <div className="App">
      <div>
        <span>{count}</span>
      </div>
      <Button onClick={increment} content="+"/>
      <Button onClick={diminished} content="-"/>
    </div>
  );
}

const Button =  React.memo(({onClick, content}) => (
  <button onClick={onClick}>
    {content}
  </button>
))

export default App;
