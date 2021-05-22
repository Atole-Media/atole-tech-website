import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  text-transform: uppercase;
  a:visited {
    color: white;
  }

  @media (max-width: 512px) {
    display: none;
  }
`

export const DesktopNav = () => (
  <Wrapper className="desktop-nav">
    <li>
      <Link to="/servicesPage">Services</Link>
    </li>
    <li>
      <Link>Store</Link>
    </li>
    <li>
      <Link to="/aboutPage">About</Link>
    </li>
    <li>
      <Link to="/questionsPage">Contact</Link>
    </li>
  </Wrapper>
)
