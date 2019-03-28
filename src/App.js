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
import SessionBreakIndicator from "./components/SessionBreakIndicator"

export default function App() {
  const [sessionLength, setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [timeLeft, setTimeLeft] = useState(0)
  const [timeLeftString, setTimeLeftString] = useState("")

  const [isActive, setIsActive] = useState(false)
  const [isCountingDown, setIsCountingDown] = useState(false)
  const [isBreak, setIsBreak] = useState(false)

  let intervalId = useRef(null)

  useEffect(() => {
    setTimeLeftString(() => convertToMinuteSeconds(timeLeft))
    if (timeLeft === 0 && isCountingDown && !isBreak) {
      playSound()
      startBreak()
    } else if (timeLeft === 0 && isCountingDown && isBreak) {
      startSession()
    }
  })

  let handlePlayPause = () => {
    if (!isCountingDown) {
      if (!isActive) {
        startSession()
      } else {
        playTimer()
      }
    } else if (isCountingDown) {
      pauseTimer()
    }
  }

  let startSession = () => {
    pauseTimer()
    setIsBreak(false)
    setTimeLeft(sessionLength * 60000)
    playTimer()
  }

  let startBreak = () => {
    pauseTimer()
    setIsBreak(true)
    setTimeLeft(breakLength * 60000)
    playTimer()
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

  let reset = alsoSessionAndBreakLength => {
    pauseTimer()
    setIsActive(false)
    setIsCountingDown(false)
    setTimeLeft(0)
    if (alsoSessionAndBreakLength) {
      setSessionLength(25)
      setBreakLength(5)
    }
  }

  let convertToMinuteSeconds = timeInMilliseconds => {
    let minutes = Math.floor(timeInMilliseconds / 60000).toString()
    let seconds = Math.floor((timeInMilliseconds % 60000) / 1000).toString()
    let minutesString = minutes.length === 1 ? "0" + minutes : minutes
    let secondsString = seconds.length === 1 ? "0" + seconds : seconds
    return `${minutesString}:${secondsString}`
  }

  const playSound = () => {
    let sound = document.getElementById("beep")
    sound.play()
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
          <Reload onClick={() => reset(true)} id="reset">
            <i className="fas fa-sync-alt" />
          </Reload>
          <Session
            setSessionLength={setSessionLength}
            sessionLength={sessionLength}
          />
          <Break setBreakLength={setBreakLength} breakLength={breakLength} />
          <SessionBreakIndicator id="time-label">
            {isBreak ? "BREAK" : isActive ? "SESSION" : ""}
          </SessionBreakIndicator>
          <Timer id="time-left">{timeLeftString}</Timer>
        </Wrapper>
      </Background>
      <audio preload="auto" id="beep" src="https://goo.gl/65cBl1" />
    </div>
  )
}
