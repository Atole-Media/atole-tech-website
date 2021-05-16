import React from "react"
import styled from "styled-components"
import { LinkButton } from "../linkButton"

const Wrapper = styled.div`
  position: absolute;
  ${({ position }) => (position === "right" ? "left: 5vw" : null)}
  ${({ position }) => (position === "left" ? "right: 5vw" : null)};
  top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: var(--orange);
    font-size: 3rem;
    margin-bottom: 5rem;
    text-align: center;
  }
  @media (max-width: 1024px) {
    top: 0;
    h3 {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 768px) {
    ${({ position }) => (position === "right" ? "left: 0" : null)};
    ${({ position }) => (position === "left" ? "right: 0" : null)};
    h3 {
      font-size: 2rem;
      margin-left: 3rem;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 512px) {
    right: 0;
    left: 0;
    h3 {
      font-size: 1.5rem;
      margin: 0.5rem;
    }
  }
`
const Button = styled(LinkButton)`
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 512px){
font-size: .5rem;
  }
`

export const TitleLink = ({ className, title, link, background, position }) => (
  <Wrapper className={className} position={position}>
    <h3>{title}</h3>
    <Button background={background}>{link}</Button>
  </Wrapper>
)
