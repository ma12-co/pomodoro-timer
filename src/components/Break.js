import React from "react"
import styled from "styled-components"

export default function Break() {
  return (
    <SessionLengthSelector>
      <Title>BREAK</Title>
      <ArrowLeft>
        <i className="fas fa-arrow-left" />
      </ArrowLeft>
      <Time>5</Time>
      <ArrowRight>
        <i className="fas fa-arrow-right" />
      </ArrowRight>
    </SessionLengthSelector>
  )
}

let SessionLengthSelector = styled.div`
  position: absolute;
  width: 97px;
  height: 44px;
  left: 202px;
  top: 320px;
`
let Title = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 56.82%;

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
  left: 36.08%;
  right: 37.11%;
  top: 56.82%;
  bottom: 0%;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  text-align: center;

  color: #000000;
`

let ArrowLeft = styled.div`
  position: absolute;
  left: 18.56%;
  right: 64.95%;
  top: 59.09%;
  bottom: 0%;

  font-family: Font Awesome 5 Free;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: normal;
  text-align: center;

  color: #000000;
`

let ArrowRight = styled.div`
  position: absolute;
  left: 63.92%;
  right: 19.59%;
  top: 59.09%;
  bottom: 0%;

  font-family: Font Awesome 5 Free;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: normal;
  text-align: center;

  color: #000000;
`
