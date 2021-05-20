import React from "react"
import styled from "styled-components"
import { bool } from "prop-types"
import { Link } from "gatsby"

const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  background: var(--lightPurple);
  height: 85vh;
  text-align: center;
  padding: 0 10rem;
  position: absolute;
  top: 15vh;
  right: 0;
  width: 100vw;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (!open ? "translateX(100%)" : "translateX(0)")};

  @media (max-width: 512px) {
    padding: 0 3rem;
    display: flex;
  }
`
const Links = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  height: 7rem;
  letter-spacing: 0.5rem;
  color: var(--yellow);
  text-decoration: none;
  transition: color 0.3s linear;
  border-radius: 15px;
  border: solid 5px var(--yellow);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MobileMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Links to="/servicesPage">Services </Links>
      <Links to="/work-page">Store</Links>
      <Links to="/aboutPage">About </Links>
      <Links to="/questionsPage">Contact</Links>
    </StyledMenu>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}
