import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { DesktopNav } from "./desktopNav"
import { MobileMenu } from "./mobileMenu"
import Hamburger from "./hamburger"
import { Link } from "gatsby"

const Nav = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  height: 15vh;
  font-family: sans-serif;
  background-color: #1a042b;
  opacity: 85%;
  color: white;
  z-index: 1000;
  position: fixed;
  overflow: visible;
  top: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  
`
const Title = styled(Link)`
  color: white;
  width: 50%;
  text-align: center;
  font-size: 2rem;
`

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Nav className="navbar">
      <Title to="/">Atole Tech</Title>
      <DesktopNav />
      <MobileMenu open={open} setOpen={setOpen} />
      <Hamburger open={open} setOpen={setOpen} />
    </Nav>
  )
}
Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}
