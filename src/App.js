import React, { useState, useRef, useEffect } from "react"
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
  const [timeLeft, setTimeLeft] = useState(0)
  const [timeLeftString, setTimeLeftString] = useState("")
  const [isCountingDown, setIsCountingDown] = useState(false)
  const [isActive, setIsActive] = useState(false)

  let intervalId = useRef(null)

  useEffect(() => {
    setTimeLeftString(() => parseToMinuteSeconds(timeLeft))
  })

  let handlePlayPause = () => {
    if (!isCountingDown) {
      if (!isActive) {
        setTimeLeft(sessionLength * 60 * 1000)
        playTimer()
      } else {
        playTimer()
      }
    } else if (isCountingDown) {
      pauseTimer()
    }
  }

  let playTimer = () => {
    setIsActive(true)
    setIsCountingDown(true)
    intervalId.current = setInterval(() => {
      console.log("interval")
      setTimeLeft(timeLeft => timeLeft - 1000)
    }, 1000)
  }

  let pauseTimer = () => {
    setIsCountingDown(false)
    clearInterval(intervalId.current)
  }

  let resetAll = () => {
    setSessionLength(25)
    setBreakLength(5)
    setIsActive(false)
    setIsCountingDown(false)
    setTimeLeft(0)
  }

  let parseToMinuteSeconds = timeInMilliseconds => {
    let minutes = Math.round(timeInMilliseconds / 60000).toString()
    let seconds = Math.round((timeInMilliseconds % 60000) / 1000).toString()
    let minutesString = minutes.length === 1 ? "0" + minutes : minutes
    let secondsString = seconds.length === 1 ? "0" + seconds : seconds
    return `${minutesString}:${secondsString}`
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
          <PlayButton
            id="start_stop"
            handlePlayPause={handlePlayPause}
            isCountingDown={isCountingDown}
          />
          <Reload onClick={resetAll} id="reset">
            <i className="fas fa-sync-alt" />
          </Reload>
          <Session
            setSessionLength={setSessionLength}
            sessionLength={sessionLength}
          />
          <Break setBreakLength={setBreakLength} breakLength={breakLength} />
          <span id="time-label">
            <Timer id="time-left">{timeLeftString}</Timer>
          </span>
        </Wrapper>
      </Background>
    </div>
  )
}
