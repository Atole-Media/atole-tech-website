import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  /* overflow: visible; */
  text-transform: uppercase;

  h1 {
    color: var(--orange);
    position: absolute;
    top: 40%;
    left: 10vw;
    font-size: 5rem;
    margin: 1rem 0;
  }
  h2 {
    color: white;
    position: absolute;
    top: 60vh;
    font-size: 3rem;
    left: 10vw;
    display: block;
    margin: 1rem 0;
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 5rem;
      left: 5vw;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 4rem;
      left: 0;
      right: 0;
      text-align: center;
      top: 50vh;
    }
  }
  @media (max-width: 512px) {
    h2 {
      font-size: 2rem;
      left: 0;
      right: 0;
      text-align: center;
      top: 50vh;
    }
  }
`

export const Header = ({ image, title, className }) => (
  <Wrapper className={className}>
    {image}

    {title}
  </Wrapper>
)
