import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const NavItemLogIn = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: #161616;
  font-style: normal;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: rgba(84, 190, 150, 1);
    transition: all 250ms linear;
  }

  @media screen and (min-width: 768px) {
    &:last-child {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
  }
`;
export const NavItem = styled(NavLink)`
  color: #191A15;
  height: 20px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
  letter-spacing: -0.16px;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: rgba(84, 190, 150, 1);
    transition: all 250ms linear;
  }
  &.active {
      &:after {
        margin: 4px auto;

      display: block;
      content: "";
      width: 8px;
      height: 8px;
      background-color: rgba(84, 190, 150, 1);
      border-radius: 50%;
    }
  }

`;
export const NavItemHome = styled(NavLink)`
  color: #36A379;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms linear;
  }
`;
export const NavItemColor = styled(NavLink)`
  color: #191a15;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: pointer;
  transition: all 250ms linear;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    margin-right: 60px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 226px;
  }
  &:hover,
  &:focus {
    color: rgba(84, 190, 150, 1);
    transition: all 250ms linear;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;
export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
