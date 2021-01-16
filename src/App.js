import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import './App.css';
import useCountHook from './components/useCountHook';

function App() {

  const {textRef, text, isTimeRunning ,handleChange, timeRemaining, startGame , wordCount,} = useCountHook();

  return (

   
    <div className="App">
      
      <h1>How fast can you type?</h1>
      <textarea ref={textRef} value={text} disabled={!isTimeRunning} onChange={handleChange}>

      </textarea>
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}  >Start</button>
      <h1> Word Count: {wordCount}</h1>

      <ReactTypingEffect text={["Hand Coded By Me"]}
       cursorRenderer={cursor => <h1>{cursor}</h1>}
       />
    </div>
  );
}

export default App;
