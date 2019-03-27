import React, { useState } from "react"
import UpperMetalBand from "./components/UpperMetalBand"
import UpperPart from "./components/UpperPart"
import LowerPart from "./components/LowerPart"
import LowerMetalBand from "./components/LowerMetalBand"
import PlayButton from "./components/PlayButton"

import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import Subtitle from "./components/Subtitle"
import Background from "./components/Background"
import Timer from "./components/Timer"
import Reload from "./components/Reload"
import Session from "./components/Session"
import Break from "./components/Break"

export default function App() {
  const [sessionLength, setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [timeLeft, setTimeLeft] = useState(25 * 60 * 1000)
  const [isRunning, setIsRunning] = useState(false)

  let resetAll = () => {
    setSessionLength(25)
    setBreakLength(5)
  }

  let intervalId = null

  let handlePlayPause = () => {
    if (!isRunning) {
      setTimeLeft(sessionLength * 60 * 1000)
      playTimer()
    } else if (isRunning) {
      pauseTimer()
    }
  }

  let playTimer = () => {
    setIsRunning(true)
    intervalId = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1000)
      parseToMinuteSeconds(timeLeft)
    }, 1000)
  }

  let pauseTimer = () => {
    setIsRunning(false)
    clearInterval(intervalId)
  }

  let parseToMinuteSeconds = timeInMilliseconds => {
    return //a string with the time in this format 00:00
  }

  return (
    <div className="App">
      <Background>
        <UpperMetalBand />
        <UpperPart />
        <LowerPart />
        <LowerMetalBand />
        <Wrapper>
          <Title>Pomodoro</Title>
          <Subtitle>TIMER</Subtitle>
          <PlayButton id="start_stop" onClick={handlePlayPause}>
            <i className="fa fa-play" />
          </PlayButton>
          <Reload onClick={resetAll} id="reset">
            <i className="fas fa-sync-alt" />
          </Reload>
          <Session
            setSessionLength={setSessionLength}
            sessionLength={sessionLength}
          />
          <Break setBreakLength={setBreakLength} breakLength={breakLength} />
          <span id="time-label">
            <Timer id="time-left">00:00</Timer>
          </span>
        </Wrapper>
      </Background>
    </div>
  )
}
