import styled from "styled-components"

export default styled.div`
  position: absolute;
  width: 320px;
  height: 13px;
  left: calc(50% - 320px / 2);
  top: calc(50% - 13px / 2 + 277.5px);

  background: linear-gradient(
    90deg,
    #ebe7cf 0%,
    #b2ad9b 17.37%,
    #b2ad9b 51.07%,
    #ebe7cf 64.89%,
    #ebe7cf 88.09%,
    #b2ad9b 99.69%
  );
  border: 2px solid #000000;
  z-index: 1;
`
