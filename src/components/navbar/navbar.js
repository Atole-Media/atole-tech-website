import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

// const HeaderWrapper = styled.header`
//   display: flex;
//   width: 100vw;
//   justify-content: space-evenly;
//   align-items: center;
//   height: 15vh;
//   font-family: sans-serif;
//   /* background-color: #000103;*/
//   color: white;
//   z-index: 100;
//   position: fixed;
//   h1 {
//     color: white;
//   }
// `
const Nav = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  height: 15vh;
  font-family: sans-serif;
  /* background-color: #000103;*/
  color: white;
  z-index: 100;
  position: fixed;
  h1 {
    color: white;
    width: 50%;
    text-align: center;
  }
  ul {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    text-transform: uppercase;
    #work {
      display: none;
    }
  }
`

export const Navbar = () => (
  <Nav className="navbar">
    <h1>Atole Tech</h1>
    <ul>
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
  </Nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}
