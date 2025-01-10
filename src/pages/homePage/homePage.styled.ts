import styled from "styled-components";

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 321px) {
    
    }


    @media (min-width: 768px) {
        bottom: 20px;
        left: 300px;
        text-align: left;
        align-items: start;
    }

    @media (min-width: 1024px) {
        left: 400px;
    }

    @media (min-width: 1280px) {
        
    }

    @media (min-width: 1536px) {
    }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 16px;

  @media (min-width: 321px) {
    }

    @media (min-width: 768px) {
        
    }

    @media (min-width: 768px) {
        font-size: 40px;
        margin-bottom: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 48px;
    }

    @media (min-width: 1280px) {
        
    }

    @media (min-width: 1536px) {
    }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  border: solid 2px #9a8363;
  border-radius: 30px;
  text-align: center;
  padding: 5px;

    @media (min-width: 321px) {
        font-size: 16px;
        padding: 10px;
    }

    @media (min-width: 768px) {
        font-size: 20px;
    }

    @media (min-width: 1024px) {
        font-size: 24px;
        padding: 15px;
    }

    @media (min-width: 1280px) {
        
    }

    @media (min-width: 1536px) {
    }
`;
