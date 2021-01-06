import React, {useState} from "react";
import Button from './components/Button';
import './App.css';


function App() {

  const [textInput, setTextInput ] = useState('');

  function handleChange(e) {
    const {value} = e.target
    setTextInput(value)
  }

  console.log(textInput)

  return (
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea value={textInput} onChange={handleChange}>

      </textarea>
      <h4>Time remaining: </h4>
      <Button/>
      <h1> Word Count: </h1>
    </div>
  );
}

export default App;
