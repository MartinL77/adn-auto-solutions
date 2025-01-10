import { HeroSection, StyledVideo, Content, Title, Subtitle } from "./homePage.styled";

const HomePage = () => {
  return (
    <HeroSection>
      <StyledVideo autoPlay loop muted playsInline>
        <source src={`${import.meta.env.BASE_URL}typer.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
      <Content>
        <Title>The Solution to Your Car</Title>
        <Subtitle>You Drive, We'll Handle the Rest</Subtitle>
      </Content>
    </HeroSection>
  );
};

export default HomePage;
