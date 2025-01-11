import styled from "styled-components";

export const StyledHeroSection = styled.div`
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

export const StyledHeroContent = styled.div`
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

  @media (min-width: 768px) {
    bottom: 20px;
    left: 300px;
    text-align: left;
    align-items: start;
  }

  @media (min-width: 1024px) {
    left: 400px;
  }
`;

export const StyledHeroTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

export const StyledHeroSubtitle = styled.p`
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
`;

export const StyledAboutUsSection = styled.div`
  height: 100%;
  background-color: white;
`;

export const StyledAboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 80px 60px;
  }

  @media (min-width: 1024px) {
    padding: 100px;
  }

  @media (min-width: 1280px) {
    padding: 140px 200px;
  }
`;

export const StyledImage = styled.img`
  border-radius: 3%;
  width: 200px;

  @media (min-width: 321px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 350px;
    margin-right: 60px;
  }

  @media (min-width: 1024px) {
    width: 450px;
  }

  @media (min-width: 1280px) {
    width: 550px;
  }

  @media (min-width: 1536px) {
    width: 600px;
  }
`;

export const StyledAboutContentContainer = styled.div`
`;

export const StyledAboutTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 16px;
  text-align: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 16px;
    text-align: left;
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

export const StyledAboutParagraph = styled.p`
  font-size: 14px;
  text-align: center;

  @media (min-width: 321px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const StyledTeamSection = styled.div`
  background-color: #333333;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 60px 40px;

  @media (min-width: 768px) {
    text-align: left;
    padding: 80px 60px;
  }

  @media (min-width: 1024px) {
    padding: 100px;
  }

  @media (min-width: 1280px) {
    padding: 140px 200px;
  }
`;

export const StyledTeamTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 40px;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`

export const StyledTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (min-width: 768px) {
    gap: 80px;
  }
`;

export const StyledTeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const StyledTeamImage = styled.img`
  border-radius: 50%;
  border: 2px solid #9a8363;
  width: 100px;
  height: 100px;

  @media (min-width: 321px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
    margin-right: 60px;
  }

  @media (min-width: 1024px) {
    width: 350px;
    height: 350px;
  }
`;

export const StyledTeamDetailsWrapper = styled.div`
`;

export const StyledTeamName = styled.div`
  font-size: 20px;
  text-align: center;
  color: #9a8363;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (min-width: 321px) {
    font-size: 23px;
  }

  @media (min-width: 768px) {
    font-size: 26px;
    text-align: left;
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

export const StyledTeamDescription = styled.div`
  font-size: 14px;
  text-align: center;
  color: white;

  @media (min-width: 321px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

