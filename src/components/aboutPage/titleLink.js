import React from "react"
import styled from "styled-components"
import { LinkButton } from "../linkButton"

const Wrapper = styled.div`
  position: absolute;
  ${({ position }) => (position === "right" ? "right: 10vw" : null)}
  ${({ position }) => (position === "left" ? "left: 10%" : null)};
  top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: var(--orange);
    font-size: 3rem;
    width: 80vw;
    margin-bottom: 5rem;
    text-align: center;
  }
`

export const TitleLink = ({ className, title, link, background, position }) => (
  <Wrapper className={className} position={position}>
    <h3>{title}</h3>
    <LinkButton background={background}>{link}</LinkButton>
  </Wrapper>
)
