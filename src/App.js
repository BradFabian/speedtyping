import React, {useState, useEffect} from "react";
import ReactTypingEffect from 'react-typing-effect';
import './App.css';


function App() {

  const STARTING_TIME = 30
    
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }
  
  function calculateWordCount(text) {
      const wordsArr = text.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
  }
  
  function startGame() {
      setIsTimeRunning(true)
      setTimeRemaining(STARTING_TIME)
      setText("")
      setWordCount(0)
  }
  
  function endGame() {
      setIsTimeRunning(false)
      setWordCount(calculateWordCount(text))
      
  }
  
  
  
  useEffect(() => {
      if(isTimeRunning && timeRemaining > 0) {
          setTimeout(() => {
              setTimeRemaining(time => time - 1)
          }, 1000)
      } else if(timeRemaining === 0) {
          endGame()
      }
  }, [timeRemaining, isTimeRunning])

  return (

   
    <div className="App">
      
      <h1>How fast can you type?</h1>
      <textarea value={text} disabled={!isTimeRunning} onChange={handleChange}>

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
