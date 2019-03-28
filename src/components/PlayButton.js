import React from "react"
import styled from "styled-components"

export default function PlayButton(props) {
  return (
    <PlayPause onClick={props.handlePlayPause}>
      {props.isCountingDown ? (
        <i className="fa fa-pause" />
      ) : (
        <i className="fa fa-play" />
      )}
    </PlayPause>
  )
}

let PlayPause = styled.button`
  position: absolute;
  width: 85px;
  height: 85px;
  left: 117px;
  top: 231px;
  background: linear-gradient(90deg, #be7b3d 18.14%, #d6b494 85.38%);
  border: 2px solid #000000;
  border-radius: 42.5px;
  box-sizing: border-box;
  z-index: 15;
  font-size: 20;
  &:hover {
    background: green;
    color: white;
  }

  &:focus {
    outline: 0;
  }
`
