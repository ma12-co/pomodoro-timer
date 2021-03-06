import React from "react"
import styled from "styled-components"

export default function Session(props) {
  let incrementSessionLength = () => {
    if (props.sessionLength < 60) {
      props.setSessionLength(props.sessionLength + 1)
    } else return
  }

  let decrementSessionLength = () => {
    if (props.sessionLength > 1) {
      props.setSessionLength(props.sessionLength - 1)
    } else return
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

let ArrowUp = styled.button`
  position: absolute;
  left: 18.44%;
  right: 73.44%;
  top: 61.27%;
  bottom: 35.56%;

  font-family: Font Awesome 5 Free;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  text-align: center;

  color: #000000;

  background: transparent;
  border: 0px;
  &:hover {
    color: #970b19;
  }
  &:active {
    color: red;
  }
  &:focus {
    outline: 0;
  }
`

let ArrowDown = styled.button`
  position: absolute;
  left: 18.44%;
  right: 73.44%;
  top: 70.77%;
  bottom: 26.06%;

  font-family: Font Awesome 5 Free;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: normal;
  text-align: center;

  color: #000000;

  background: transparent;
  border: 0px;
  &:hover {
    color: #970b19;
  }
  &:active {
    color: red;
  }
  &:focus {
    outline: 0;
  }
`
