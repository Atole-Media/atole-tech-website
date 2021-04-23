import React from "react"
import { bool, func } from "prop-types"
import styled from "styled-components"

//Styles
const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  @media (max-width: 512px) {
    display: flex;
  }
  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1.5rem;
  } */

  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 0.3rem;
    background: yellow;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: .4rem;
    
  }
  #one {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  #two {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  #three {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div id="one" />
      <div id="two" />
      <div id="three" />
    </StyledBurger>
  )
}

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Hamburger
