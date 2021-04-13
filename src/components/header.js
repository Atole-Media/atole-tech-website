import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  height: 15vh;
  font-family: sans-serif;

  h1 {
  }
`
const Navbar = styled.nav`
  width: 40%;

  .nav {
    display: flex;
    justify-content: space-evenly;
    text-transform: uppercase;
    #work {
      display: none;
    }
  }
`

const Header = () => (
  <HeaderWrapper>
    <h1>Atole Tech</h1>
    <Navbar>
      <ul className="nav">
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>FAQ</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li id="work">
          <Link>Work</Link>
        </li>
      </ul>
    </Navbar>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
