import styled from "styled-components";

export const StyledNavList = styled.ul`
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 40px 20px;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1000; 

  li {
    pointer-events: auto; 
  }

  @media (min-width: 321px) {
  }

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1536px) {
  }
`;


export const StyledNavItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  list-style: none;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    color: #9a8363;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const StyledLogo = styled.img`
  width: 100px;
  height: auto;
  border-radius: 50%;
`;

export const MobileWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  align-items: center;


  @media (min-width: 321px) {
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1536px) {
  }
`;

export const HamburgerButton = styled.div`
  /* position: absolute;
  right: 0;
  margin: 30px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  z-index: 1001;
  cursor: pointer;

  .bar {
    height: 4px;
    width: 100%;
    background-color: #9a8363;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .bar-x:nth-child(1) {
    transform: rotate(45deg);
    position: relative;
    top: 10px;
  }

  .bar-x:nth-child(2) {
    opacity: 0;
  }

  .bar-x:nth-child(3) {
    transform: rotate(-45deg);
    position: relative;
    top: -11px;
  }

  @media (min-width: 321px) {
    
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1536px) {
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: -100%; 
  right: 0;
  padding: 60px 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  transition: left 0.3s ease-in-out; 

  ${StyledNavItem} {
    margin: 10px 0;
  }

  @media (min-width: 321px) {
    
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1536px) {
  }
`;
