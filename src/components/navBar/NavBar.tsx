import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledLogo, StyledNavItem, StyledNavList, HamburgerButton, Menu, MobileWrapper, StyledNavItemsWrapper } from "./navBar.styled";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/dealer", label: "ADN Auto Dealership" },
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
        <StyledNavItemsWrapper>
          {renderNavItems()}
        </StyledNavItemsWrapper>
      </StyledNavList>

      <MobileWrapper>
        <StyledLogo src={`${import.meta.env.BASE_URL}adn-logo.jpg`} alt="Company Logo" />
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
