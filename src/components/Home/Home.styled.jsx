import styled from "styled-components";


export const Title = styled.h1`
  color: #191a15;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 82px; 
  letter-spacing: -1.6px;
  margin-bottom: 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 70px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 80px;
    text-align: start;
  }
`;

export const Text = styled.p`
  color: #191a15;

  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; 
  letter-spacing: -0.36px;
  margin-bottom: 20px;
  text-align: center;
  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-bottom: 40px;
  }
`;

export const ItalicTitle = styled.span`
  color: #36A379;
  font-family: Inter;
  font-size: 60px;
  font-style: italic;
  font-weight: 600;
  line-height: 82px;
  letter-spacing: -1.6px;
  @media screen and (min-width: 768px) {
    font-size: 70px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 80px;
    text-align: start;
  }
`;

export const SvgArrow = styled.svg`
  stroke: #fbfbfb;
  fill: #fbfbfb;
  width: 16px;
  height: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 650px;
  @media screen and (min-width: 1440px) {
    margin-right: 125px;
    max-width: 595px;
    align-items: start;
    justify-content: start;
  }
`;
export const WrapperPicture = styled.div`
  display: flex;
  position: relative;
`;
export const WrapperMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 126px;
    margin-top: 20px;
  }
`;
export const UserPicture = styled.picture`
  width: 300px;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 100%;
  }
  @media screen and (min-width: 1440px) {
    width: 464px;
    height: 526px;
  }
`;
export const SvgQuestion = styled.svg`
  stroke: #fbfbfb;
  fill: #fbfbfb;
  width: 10px;
  height: 17px;
`;
export const DivQuestion = styled.div`
  border-radius: 10px;
  background: #4535AF;
  width: 40px;
  height: 40px;
  transform: rotate(-15deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 201px;
  left: -30px;
`;
export const SvgCheck = styled.svg`
  width: 30px;
  height: 30px;
  stroke: #36A379;
  fill: #36A379;
`;
export const DivCheck = styled.div`
  border-radius: 13px;
  background: #fbfbfb;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 54px;
    height: 54px;
  }
`;
export const DivCheckCard = styled.div`
  position: absolute;
  width: 240px;
  height: 70px;
  border-radius: 20px;
  background: #36A379;
  top: 260px;
  left: -40px;
  padding-left: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 311px;
    height: 118px;
    top: 333px;
    left: -102px;
  }
`;
export const TextCheck = styled.p`
  color: rgba(251, 251, 251, 0.5);

  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const TextDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 16px;
  max-width: 177px;
`;

export const NumberCheck = styled.p`
  color: #fbfbfb;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const SvgUsers = styled.svg`
  stroke: #fbfbfb;
  fill: #fbfbfb;
  width: 19.836px;
  height: 19.836px;
`;
export const DivUsers = styled.div`
  border-radius: 10px;
  width: 48.173px;
  height: 48.173px;
  transform: rotate(15deg);
  background: rgba(251, 199, 94, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 38px;
  right: -44px;
`;

export const SubmitButton = styled.button`
  border-radius: 30px;
  background: #36A379;
  display: flex;
  padding: 18px 50px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border: none;
  color: #fbfbfb;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; 
  letter-spacing: -0.2px;
  &:hover,
  &:focus {
    background: rgba(84, 190, 150, 1);
    transition: all 250ms linear;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
