import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  text-transform: uppercase;
  #work {
    display: none;
  }
  @media (max-width: 512px) {
    display: none;
  }
`

export const DesktopNav = () => (
  <Wrapper className="desktop-nav">
    <li>
      <Link to="/aboutPage">About</Link>
    </li>
    <li>
      <Link>Services</Link>
    </li>
    <li>
      <Link to="/questionsPage">FAQ</Link>
    </li>
    <li>
      <Link>Contact</Link>
    </li>
    <li id="work">
      <Link>Work</Link>
    </li>
  </Wrapper>
)
