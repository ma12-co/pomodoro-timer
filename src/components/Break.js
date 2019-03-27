import React from "react"
import styled from "styled-components"

export default function Break(props) {
  let incrementBreakLength = () => {
    props.setBreakLength(props.breakLength + 1)
  }

  let decrementBreakLength = () => {
    props.setBreakLength(props.breakLength - 1)
  }

  return (
    <React.Fragment>
      <Title id="break-label">BREAK</Title>
      <ArrowUp id="break-increment" onClick={incrementBreakLength}>
        <i className="fas fa-arrow-up" />
      </ArrowUp>
      <Time id="break-length">{props.breakLength}</Time>
      <ArrowDown id="break-decrement" onClick={decrementBreakLength}>
        <i className="fas fa-arrow-down" />
      </ArrowDown>
    </React.Fragment>
  )
}

let Title = styled.div`
  position: absolute;
  left: 62.19%;
  right: 7.5%;
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
  left: 73.12%;
  right: 18.75%;
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
  left: 74.69%;
  right: 20.31%;
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
  left: 74.69%;
  right: 20.31%;
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
