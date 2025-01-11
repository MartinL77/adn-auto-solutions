import { 
  StyledHeroSection, 
  StyledVideo, 
  StyledHeroContent, 
  StyledHeroTitle, 
  StyledHeroSubtitle, 
  StyledAboutContentContainer, 
  StyledAboutParagraph, 
  StyledAboutUsSection, 
  StyledAboutUsWrapper, 
  StyledImage, 
  StyledTeamSection, 
  StyledAboutTitle, 
  StyledTeamWrapper, 
  StyledTeamMember, 
  StyledTeamImage, 
  StyledTeamName, 
  StyledTeamDescription, 
  StyledTeamTitle,
  StyledTeamDetailsWrapper
} from "./homePage.styled";

const teamMembers = [
  { name: 'Daniel', details: 'With many years of experience, Daniel has a deep passion for cars and specialises in diagnostics and performance upgrades. His meticulous approach ensures every vehicle is serviced to perfection. Outside of work, he loves participating in car shows and mentoring aspiring mechanics.', src: `${import.meta.env.BASE_URL}daniel.jpg` },
  { name: 'Adam', details: 'Adam brings a wealth of knowledge and professional hands-on experience in engine repairs and tuning. His passion lies in helping customers achieve peak performance in their vehicles. When not at the shop, Adam enjoys racing and exploring new automotive technologies.', src: `${import.meta.env.BASE_URL}adam.PNG` },
]

const HomePage = () => {
  return (
    <>
      <StyledHeroSection>
        <StyledVideo autoPlay loop muted playsInline>
          <source src={`${import.meta.env.BASE_URL}typer.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
        <StyledHeroContent>
          <StyledHeroTitle>The Solution to Your Car</StyledHeroTitle>
          <StyledHeroSubtitle>You Drive, We'll Handle the Rest</StyledHeroSubtitle>
        </StyledHeroContent>
      </StyledHeroSection>
      <StyledAboutUsSection>
        <StyledAboutUsWrapper>
          <StyledImage src={`${import.meta.env.BASE_URL}honda-b16.jpg`} />
          <StyledAboutContentContainer>
            <StyledAboutTitle>ADN Auto Solutions</StyledAboutTitle>
            <StyledAboutParagraph> 
              ADN Auto Solutions proudly services all car brands and models, ensuring that your vehicle gets the personalised care it deserves. <br /><br />
              Trust us for reliability, quality, and unparalleled customer service. Your car deserves the best—leave it to the best.
            </StyledAboutParagraph>
          </StyledAboutContentContainer>
        </StyledAboutUsWrapper>
      </StyledAboutUsSection>
      <StyledTeamSection>
        <StyledTeamTitle>Meet Your Mechanics</StyledTeamTitle>
        <StyledTeamWrapper>
          {teamMembers.map((team) => (
            <StyledTeamMember key={team.name}>
              <StyledTeamImage src={team.src} alt={team.name} />
              <StyledTeamDetailsWrapper>
                <StyledTeamName>{team.name}</StyledTeamName>
                <StyledTeamDescription>{team.details}</StyledTeamDescription>
              </StyledTeamDetailsWrapper>
            </StyledTeamMember>
          ))}
        </StyledTeamWrapper>
      </StyledTeamSection>
    </>
  );
};

export default HomePage;
