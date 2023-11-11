import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f3f3f3;
  padding: 16px 32px 16px 32px;
  min-height: 100vh;
  min-width: 100wv;
  @media screen and (min-width: 768px) {
    padding: 32px 64px 32px 64px;
  }
  @media screen and (min-width: 1440px) {
    padding: 64px 128px 100px 128px;
  }
`;

export const WrapperCard = styled.li`
  border-radius: 24px;
  background: #fbfbfb;
  padding: 24px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LoadMoreButton = styled.button`
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
    margin-right: auto;
  margin-left: auto;
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

export const WrapperFavorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
