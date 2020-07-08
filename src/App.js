import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import './App.css';
import * as ations from './actions'

function App() {
  const dispatch = useDispatch();
  const increment = useCallback(
    () => dispatch(ations.increment()),
    [dispatch]
  )
  const diminished = useCallback(
    () => dispatch(ations.diminished()),
    [dispatch]
  )
  const getCustomData = useCallback(
    () => dispatch(ations.asyncData()),
    [dispatch]
  )
  const count = useSelector(state => state.count, shallowEqual);
  const customAsyncData = useSelector(state => state.asyncCustomData).payload;
  const { author, date, title } =
    customAsyncData &&
    customAsyncData.slideshow &&
    customAsyncData.slideshow.author
      ? customAsyncData.slideshow
      : { author: "", date: "", title: "" };
  return (
    <div className="App">
      <div>
        <span>{count}</span>
      </div>
      <Button onClick={increment} content="+"/>
      <Button onClick={diminished} content="-"/><br/>
      <button onClick={getCustomData}>get async data</button>
      <div>
        <span>{author}</span><br/>
        <span>{title}</span><br/>
        <span>{date}</span><br/>
      </div>
    </div>
  );
}

const Button =  React.memo(({onClick, content}) => (
  <button onClick={onClick}>
    {content}
  </button>
))

export default App;
