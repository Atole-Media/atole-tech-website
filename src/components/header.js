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
    font-size: 5rem;
    top: 35vh;
  }
  h2 {
    color: white;
    position: absolute;
    top: 60vh;
    font-size: 3rem;
    display: block;
  }
  .buttons {
    position: absolute;
    min-width: 30%;
    top: 80vh;
    /* margin: 0 auto; */

    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 1024px) {
    text-align: center;

    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
    h1 {
      left: 0;
      right: 0;
    }
    h2 {
      left: 0;
      right: 0;
    }
  }
  @media (max-width: 512px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    .buttons {
      font-size: 1rem;
    }
  }
`

export const Header = ({ image, title, className, buttons }) => (
  <Wrapper className={className}>
    {image}
    {title}
    {buttons ? <div className="buttons">{buttons}</div> : null}
  </Wrapper>
)
