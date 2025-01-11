import { Link } from "react-router-dom";
import { StyledFooterContainer, StyledLinksContainer, StyledCopyrightText, StyledSocialContainer, StyledImage } from "./footer.styled";
import { navLinks } from "../navBar/NavBar";

const socialLinks = [
  {link: "https://www.facebook.com/adnautosolutions", src: `${import.meta.env.BASE_URL}facebook.png`},
  {link: "https://www.instagram.com/adnautosolutions/", src: `${import.meta.env.BASE_URL}instagram.png`},
  {link: "https://www.tiktok.com/@adnautosolutions", src: `${import.meta.env.BASE_URL}tiktok.png`},
]

const Footer = () => {
    return (
        <StyledFooterContainer>
          <StyledLinksContainer>
            {navLinks.map((link) => (
              <Link to={link.to}>
                {link.label}
              </Link>
            ))}
          </StyledLinksContainer>
          <StyledSocialContainer>
            {socialLinks.map((social) => (
                <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.link}>
                  <StyledImage src={social.src} />
                </a>
              ))}
          </StyledSocialContainer>
          <StyledCopyrightText>
            © {new Date().getFullYear()} ADN Auto Solutions. 
          </StyledCopyrightText>
        </StyledFooterContainer>
      );
  };
  
  export default Footer;