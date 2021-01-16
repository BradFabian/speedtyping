import {useState, useEffect, useRef} from 'react';

function useCountHook() {

    const STARTING_TIME = 30
    
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textRef = useRef(null);
  
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
      textRef.current.disabled = false
      textRef.current.focus();
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

return {textRef, text, isTimeRunning ,handleChange, timeRemaining, startGame , wordCount,}
}
 

export default useCountHook