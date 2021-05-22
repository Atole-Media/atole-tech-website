import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"

const Section = styled(Sections)`
  color: white;
  text-align: center;
  background-color: var(--purple);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    width: 40%;
    color: var(--lightPurple);
  }
  p {
    color: white;
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 3rem;
    }
  }
  @media (max-width: 512px) {
    padding: 2rem;
    h3 {
      font-size: 2rem;
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
    }
  }
`
const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
  width: 100%;
  align-items: center;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`
const Card = styled(NewCard)`
  width: 30%;
  box-shadow: 0 1px 3px #edabf5, 0 1px 2px #edabf5;
  transition: 0.2s all ease-out;
  padding: 1.5rem;

  h2 {
    color: var(--neon);
  }
  p {
    text-align: left;
    font-size: 1.2rem;
  }
  &:hover {
    box-shadow: 0 14px 28px #edabf5, 0 10px 10px #edabf5;
  }
  &.small {
    height: 40vh;
  }
  &.big {
    height: 50vh;
  }
  @media (max-width: 768px) {
    width: 90%;
    p {
      width: 100%;
      text-align: center;
    }
    &.small {
      height: auto;
    }
    &.big {
      height: auto;
    }
  }
  @media (max-width: 512px) {
    width: 100%;
    p {
      text-align: justify;
    }
  }
`

export const ServicesSection = () => {
  return (
    <Section className="services-section ">
      <h2>Our services</h2>
      <p>
        We provide three paths that suits your business according to your
        budget.
      </p>
      <Cards>
        <Card className="small left">
          <h3>LEARN</h3>
          <p>Unsure where to start? Get inspired by our courses coming soon!</p>
        </Card>
        <Card className="big center">
          <h3>SHOP</h3>
          <p>
            You need your branding but don't have the time and budget to hire
            someone? Then buy some of our digital products to make your life
            easier!
          </p>
        </Card>
        <Card className="small right">
          <h3>HIRE</h3>
          <p>
            If you have a complex project in mind, we are here to help! We
            provide unique services to develop your site!
          </p>
        </Card>
      </Cards>
    </Section>
  )
}
