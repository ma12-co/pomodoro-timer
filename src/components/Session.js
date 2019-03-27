import React from "react"
import styled from "styled-components"

export default function Session(props) {
  let incrementSessionLength = () => {
    props.setSessionLength(props.sessionLength + 1)
  }

  let decrementSessionLength = () => {
    props.setSessionLength(props.sessionLength - 1)
  }

  return (
    <React.Fragment>
      <Title id="session-label">SESSION</Title>
      <ArrowUp id="session-increment" onClick={incrementSessionLength}>
        <i className="fas fa-arrow-up" />
      </ArrowUp>
      <Time id="session-length">{props.sessionLength}</Time>
      <ArrowDown id="session-decrement" onClick={decrementSessionLength}>
        <i className="fas fa-arrow-down" />
      </ArrowDown>
    </React.Fragment>
  )
}

let Title = styled.div`
  position: absolute;
  left: 7.5%;
  right: 62.19%;
  top: 55.63%;
  bottom: 41.02%;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  text-align: center;

  color: #000000;
`

let Time = styled.div`
  position: absolute;
  left: 18.44%;
  right: 73.44%;
  top: 65.85%;
  bottom: 30.81%;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  text-align: center;

  color: #000000;
`

let ArrowUp = styled.div`
  position: absolute;
  left: 20%;
  right: 75%;
  top: 61.27%;
  bottom: 35.56%;

  font-family: Font Awesome 5 Free;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  text-align: center;

  color: #000000;
`

let ArrowDown = styled.div`
  position: absolute;
  left: 20%;
  right: 75%;
  top: 70.77%;
  bottom: 26.06%;

  font-family: Font Awesome 5 Free;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  text-align: center;

  color: #000000;
`
