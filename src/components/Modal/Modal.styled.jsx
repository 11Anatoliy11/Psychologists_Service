import styled from "styled-components";


export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModal = styled.div`
  border-radius: 8px;
  padding: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 9999;

  @media (max-width: 374px) {
    min-width: 50%;
  }

  @media (min-width: 320px) {
    min-width: 335px;
    max-width: 400px;
  }

  @media (min-width: 768px) {
    min-width: 350px;
    max-width: 400px;
  }

  @media (min-width: 1440px) {
    min-width: 350px;
    max-width: 400px;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 35px;
  right: 25px;
  margin-left: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    top: 40px;
    right: -70px;
  }
`;

export const Svg = styled.svg`
  stroke: black;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    stroke: rgba(52, 112, 255, 1);
    transition: all 250ms linear;
  }
`;
