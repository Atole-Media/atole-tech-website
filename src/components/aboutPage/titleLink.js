import React from "react"
import styled from "styled-components"
import { LinkButton } from "../linkButton"

const Wrapper = styled.div`
  position: absolute;
  ${({ position }) => (position === "right" ? "right: 5vw" : null)}
  ${({ position }) => (position === "left" ? "left: 5vw" : null)};
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: var(--orange);
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 768px) {
    /* ${({ position }) => (position === "right" ? "left: 0" : null)};
    ${({ position }) => (position === "left" ? "right: 0" : null)}; */
    right: 0;
    left: 0;
    top: 10%;
    h3 {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 512px) {
    h3 {
      margin: 0.5rem;
    }
  }
`
const Button = styled(LinkButton)`
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 512px) {
    font-size: 0.5rem;
  }
`

export const TitleLink = ({ className, title, link, background, position }) => (
  <Wrapper className={className} position={position}>
    <h3>{title}</h3>
    <Button background={background}>{link}</Button>
  </Wrapper>
)
