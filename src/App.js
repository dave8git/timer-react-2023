import Button from "./components/Button/Button";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (timer !== null) {
      clearInterval(timer);
    }

    const newTimer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1);
    setTimer(newTimer);
  };

  const stop = () => {
    if (timer !== null) {
      clearInterval(timer);
    }
  }

  const reset = () => {

    clearInterval(timer);
    setTimer(null);
    setTime(0);

  }

  useEffect(() => {
    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }
    };
  }, [timer])

  return (
    <div className="component">
      {/* <div>Time: {time}</div> */}
      <FormattedTime time={time} />
      <div className="buttons">
        <Button action={start}>Start</Button>
        <Button action={stop}>Stop</Button>
        <Button action={reset}>Reset</Button>
      </div>
    </div>
  );
}

export default App;
