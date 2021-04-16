import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  width: 20%;
`
const ContentWrapper = styled.div`
  background-color: var(--lightPurple);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 70%;
  h2 {
    color: var(--yellow);
    text-transform: uppercase;
    min-height: 10%;
    flex-grow: 1;
  }
  ul {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 0 auto;
    flex-grow: 4;
    li {
      text-align: left;
    }
  }
`
const Links = styled(Link)`
  color: var(--yellow);
  font-size: 1.5rem;
  flex-grow: 1;
`
export const Card = ({ title, children, content, to }) => {
  const features = content.map((item, key) => {
    return <li key={key}>{item}</li>
  })

  return (
    <CardWrapper className="card">
      {children}
      <ContentWrapper>
        <h2>{title}</h2>
        <ul>{features}</ul>
        <Links to={to}>Read More</Links>
      </ContentWrapper>
    </CardWrapper>
  )
}
