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
  h3 {
    color: var(--orange);
    font-size: 3rem;
    margin-bottom: 5rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    ${({ position }) => (position === "right" ? "left: 0" : null)};
    ${({ position }) => (position === "left" ? "right: 0" : null)};
    top: 15%;
  }
  @media (max-width: 512px) {
    right: 0;
    left: 0;
    h3 {
      font-size: 2rem;
      margin: 0.5rem;
    }
  }
`

export const TitleLink = ({ className, title, link, background, position }) => (
  <Wrapper className={className} position={position}>
    <h3>{title}</h3>
    <LinkButton background={background}>{link}</LinkButton>
  </Wrapper>
)
