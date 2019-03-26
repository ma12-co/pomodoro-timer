import React from "react"
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

export default function App() {
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
          <PlayButton>
            <PlayIcon>
              <i class="fa fa-play" />
            </PlayIcon>
          </PlayButton>
        </Wrapper>
      </Background>
    </div>
  )
}
