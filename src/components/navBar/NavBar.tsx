import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledLogo, StyledNavItem, StyledNavList, HamburgerButton, Menu, MobileWrapper } from "./navBar.styled";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/dealer", label: "ADN Auto Dealership" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderNavItems = () =>
    navLinks.map((link) => (
      <StyledNavItem key={link.to}>
        <Link to={link.to} style={{ textDecoration: "none", color: "inherit" }}>
          {link.label}
        </Link>
      </StyledNavItem>
    ));

  return (
    <>
      <StyledNavList>
        <StyledLogo src={`${import.meta.env.BASE_URL}adn-logo.jpg`} alt="Company Logo" />
        {renderNavItems()}
      </StyledNavList>

      <MobileWrapper>
        <StyledLogo src="/adn-logo.jpg" alt="Company Logo" />
        <HamburgerButton onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'bar-x' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'bar-x' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'bar-x' : ''}`} />
        </HamburgerButton>
      </MobileWrapper>

      <Menu style={{ left: isMenuOpen ? '0' : '-100%' }}>
        {renderNavItems()}
      </Menu>
    </>
  );
};

export default NavBar;
