import styled from "styled-components"

export default styled.button`
  position: absolute;
  width: 73px;
  height: 46px;
  left: calc(50% - 73px / 2 - 0.5px);
  top: calc(50% - 46px / 2 + 102px);

  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
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
