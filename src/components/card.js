import React from "react"
import styled from "styled-components"
import { LinkButton } from "./linkButton"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: ${({ size }) => (size === "wide" ? "45%" : "20%")};
  

  @media (max-width: 1024px) {
    width: ${({ size }) => (size === "wide" ? "45%" : "30%")};
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  @media (max-width: 512px) {
    width: 80%;
    margin: 2rem 0;
  }
`
const ContentWrapper = styled.div`
  background-color: ${({ background }) =>
    background ? background : "var(--purple)"};
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
    font-size: 2rem;
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
    margin: 2rem auto 0 auto;
  }
  @media (max-width: 768px) {
    padding: 1.5rem 0;
    p {
      width: 100%;
    }
  }
  @media (max-width: 512px) {
    padding: 0;
    margin: 0 auto;
    p {
      padding: 0;
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
  displayLink,
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
      return content.split("/n").map((item, i) => <p key={i}>{item}</p>)
    }
  }
  return (
    <CardWrapper className="card" size={size}>
      {image}
      <ContentWrapper background={background}>
        <h2>{title}</h2>
        <div>{features(content)}</div>
        <LinkButton
          color={linkColor}
          background={linkBackground}
          display={displayLink}
          to={to}
        >
          {link}
        </LinkButton>
      </ContentWrapper>
    </CardWrapper>
  )
}
