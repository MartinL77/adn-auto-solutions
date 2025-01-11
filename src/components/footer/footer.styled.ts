import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    text-align: left;
    align-items: start;
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #9a8363;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const StyledSocialContainer = styled.div`
`;

export const StyledImage = styled.img`
  width: 40px;
  margin-right: 10px;
`;

export const StyledCopyrightText = styled.p`
  font-size: 0.875rem;
  opacity: 0.8;
`;