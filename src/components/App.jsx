import { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Buttons from './Buttons';

const App = () => {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  const handleStop = () => {
    setTime(0);
    setTimerOn(false)
  }

  const handleReset = () => {
    handleStop()
    handleStart()
  }

  const handleStart = () => setTimerOn(true)
  const handleWait = () => setTimerOn(false)

  const formatTime = () => {
    const getSeconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2)
    const getMinutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2)
    const getHours = ('0' + Math.floor((time / 3600000) % 60)).slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1000)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn]);

  return (
    <div className="App">
      <Fade top>
        <div className="container">
          <h1 className="title">Stopwatch</h1>
          <span className="timer">{formatTime()}</span>
          <Buttons
            handleReset={handleReset}
            handleWait={handleWait}
            handleStart={handleStart}
            handleStop={handleStop}
            time={time}
          />
        </div>
      </Fade>
    </div>
  );
}

export default App;
