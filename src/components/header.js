import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  text-transform: capitalize;
  position: relative;

  h1 {
    color: var(--orange);
    position: absolute;
    top: 35vh;
  }
  h2 {
    color: white;
    position: absolute;
    top: 60vh;
    display: block;
  }
  .buttons {
    position: absolute;
    min-width: 30%;
    top: 80vh;

    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 512px) {
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
