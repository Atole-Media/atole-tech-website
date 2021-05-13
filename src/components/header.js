import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  text-transform: uppercase;
  position: relative;

  h1 {
    color: var(--orange);
    position: absolute;
    top: 40%;
    left: 10%;
    font-size: 5rem;
    margin: 1rem 0;
  }
  h2 {
    color: white;
    position: absolute;
    top: 60vh;
    font-size: 3rem;
    left: 20%;
    display: block;
    margin: 1rem 0;
  }
  .buttons {
    position: absolute;
    bottom: 20%;
    right: 30%;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 3.5rem;
      left: 0;
      right: 0;
    }
    h2 {
      font-size: 2.5rem;
      left: 0;
      right: 0;
    }
    .buttons {
      text-align: center;
      left: 0;
      right: 0;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 512px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.75rem;
      left: 0;
      right: 0;
      text-align: center;
      
    }
    .buttons{
      font-size: 1rem
    }
  }
`

export const Header = ({ image, title, className, buttons }) => (
  <Wrapper className={className}>
    {image}
    {title}
    {buttons ? <span className="buttons">{buttons}</span> : null}
  </Wrapper>
)
