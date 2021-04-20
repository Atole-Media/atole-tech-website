import React from "react"
import styled from "styled-components"
import { LinkButton } from "./index"

const CardWrapper = styled.div`
  width: 20%;
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
`

export const Card = ({
  title,
  image,
  content,
  background,
  to,
  linkColor,
  linkBackground,
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
    <CardWrapper className="card" background={background}>
      {image}
      <ContentWrapper>
        <h2>{title}</h2>
        {features(content)}
        <LinkButton color={linkColor} linkBackground={linkBackground} />
      </ContentWrapper>
    </CardWrapper>
  )
}
