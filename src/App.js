import React, {useState, useEffect} from "react";
import './App.css';


function App() {

  const [textInput, setTextInput ] = useState('');
  const [timerValue, setTimerValue] = useState(25);
  const [startCount, setStartCount] = useState(false);

  function handleChange(e) {
    const {value} = e.target
    setTextInput(value)
  }

 function calculateWordCount(text) {
  const wordArr = text.trim().split(" ")
  return wordArr.filter(word => word !== "").length
 }

 useEffect(() => {
   if(startCount && timerValue > 0){
    setTimeout(() => {setTimerValue(time => time - 1)}, 1000);
   } else if(timerValue === 0) {
     setStartCount(false)
   }
  
   
 }, [timerValue, startCount])

  return (

   
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea value={textInput} onChange={handleChange}>

      </textarea>
      <h4>Time remaining: {timerValue}</h4>
      <button onClick={() => setStartCount(true)}>Start</button>
      <h1> Word Count: </h1>
    </div>
  );
}

export default App;
