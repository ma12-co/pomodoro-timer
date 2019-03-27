import React, { useState } from "react"
import UpperMetalBand from "./components/UpperMetalBand"
import UpperPart from "./components/UpperPart"
import LowerPart from "./components/LowerPart"
import LowerMetalBand from "./components/LowerMetalBand"
import PlayButton from "./components/PlayButton"
import PlayIcon from "./components/PlayIcon"

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

  let resetAll = () => {
    setSessionLength(25)
    setBreakLength(5)
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
          <PlayButton id="start_stop">
            <PlayIcon>
              <i className="fa fa-play" />
            </PlayIcon>
          </PlayButton>
          <Reload onClick={resetAll} id="reset">
            <i className="fas fa-sync-alt" />
          </Reload>
          <Session
            setSessionLength={setSessionLength}
            sessionLength={sessionLength}
          />
          <Break setBreakLength={setBreakLength} breakLength={breakLength} />
          <React.Fragment id="time-label" />
          <Timer id="time-left">25:00</Timer>
        </Wrapper>
      </Background>
    </div>
  )
}
