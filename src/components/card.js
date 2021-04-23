import React from "react"
import styled from "styled-components"
import { LinkButton } from "./index"

const CardWrapper = styled.div`
  width: ${({ size }) => (size === "wide" ? "45%" : "20%")};
  @media (max-width: 1024px) {
    width: ${({ size }) => (size === "wide" ? "45%" : "30%")};
  }
  @media (max-width: 512px) {
    width: 80%;
    margin: 2rem 0;
  }
`
const ContentWrapper = styled.div`
  background-color: ${({ background }) =>
    background ? background : "var(--lightPurple)"};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 60%;
  color: white;
  text-align: center;

  h2 {
    color: var(--yellow);
    text-transform: uppercase;
    min-height: 10%;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 0 auto;
    flex-grow: 1;
    li {
      text-align: left;
    }
  }
  p {
    text-align: left;
    width: 80%;
    margin: 2rem auto;
  }
  @media (max-width: 512px) {
    padding: 1.5rem 0;
    p {
      width: 100%;
    }
  }
`

export const Card = ({
  title,
  image,
  content,
  background,
  to,
  linkColor,
  linkBackground,
  size,
  link,
}) => {
  const features = content => {
    if (typeof content === "object") {
      return (
        <ul>
          {content.map((item, key) => {
            return <li key={key}>{item}</li>
          })}
        </ul>
      )
    } else {
      return <p>{content}</p>
    }
  }
  return (
    <CardWrapper className="card" size={size}>
      {image}
      <ContentWrapper background={background}>
        <h2>{title}</h2>
        {features(content)}
        <LinkButton color={linkColor} background={linkBackground} to={to}>
          {link}
        </LinkButton>
      </ContentWrapper>
    </CardWrapper>
  )
}
