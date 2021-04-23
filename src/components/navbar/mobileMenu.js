import React from "react"
import styled from "styled-components"
import { bool } from "prop-types"
import { Link } from "gatsby"

const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  background: var(--lightPurple);
  height: 90vh;
  text-align: center;
  padding: 0 10rem;
  position: absolute;
  top: 10vh;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (!open ? "translateX(100vw)" : "translateX(0)")};

  /* @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  } */
  @media (max-width: 430px) {
    padding: 0 3rem;
  }
`
const Links = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  height: 7rem;
  letter-spacing: 0.5rem;
  color: var(--yellow);
  text-decoration: none;
  transition: color 0.3s linear;
  border-radius: 15px;
  border: solid 5px var(--lightPurple);
  display: flex;
  align-items: center;
  justify-content: center;


`

export const MobileMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Links to="/project-page">
        <span role="img" aria-label="projects">
          &#x1f4b8;
        </span>
        Projects
      </Links>
      <Links to="/about-page">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About me
      </Links>
      <Links to="/contact-page">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </Links>
    </StyledMenu>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}
