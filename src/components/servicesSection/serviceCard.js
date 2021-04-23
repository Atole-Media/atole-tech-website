import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 50vh;
  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--yellow);
    text-align: center;
    padding: 1.5rem 0;
    display: ${({ image }) => (image ? "none" : "block")};
  }
  p {
    color: var(--textColor);
    width: 60%;
    line-height: 1.5rem;
  }
  @media (max-width: 1024px) {
    p {
      width: 90%;
    }
  }

`

export const ServiceCard = ({ children, title, image }) => (
  <Wrapper className="service-card" image={image}>
    <h2>{title}</h2>
    {children}
  </Wrapper>
)
