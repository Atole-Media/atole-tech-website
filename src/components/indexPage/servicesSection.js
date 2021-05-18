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
  h2 {
    color: white;
    font-size: 2rem;
  }
  h3 {
    text-transform: uppercase;
    color: white;
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 3rem;
    }
  }
  @media (max-width: 512px) {
    h3 {
      font-size: 2rem;
    }
    p {
      width: 80%;
      text-align: left;
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

  @media (max-width: 512px) {
    flex-wrap: wrap;
  }
`
const Card = styled(NewCard)`
  width: 30%;
  box-shadow: 0 1px 3px #edabf5, 0 1px 2px #edabf5;
  transition: 0.2s all ease-out;
  h3 {
    color: var(--neon);
    font-size: 2rem;
  }
  p {
    text-align: left;
    font-size: 1rem;
  }
  &:hover {
    box-shadow: 0 14px 28px #edabf5, 0 10px 10px #edabf5;
  }
  &.small {
    height: 30vh;
  }
  &.big {
    height: 40vh;
  }
  @media (max-width: 512px) {
    width: 80%;
  }
`

export const ServicesSection = () => {
  return (
    <Section className="services-section ">
      <h1>Our services</h1>
      <h3>
        We provide three paths that suits your business according to your
        budget.
      </h3>
      <Cards>
        <Card className="small left">
          <h3>LEARN</h3>
          <p>UNSURE WHERE TO START? GET INSPIRED BY OUR COURSES COMING SOON!</p>
        </Card>
        <Card className="big center">
          <h3>HIRE</h3>
          <p>
            IF YOU HAVE A COMPLEX PROJECT IN MIND, WE ARE HERE TO HELP YOU! WE
            HAVE UNIQUE SERVICES TO DEVELOP YOUR SITE.
          </p>
        </Card>
        <Card className="small right">
          <h3>SHOP</h3>
          <p>
            YOU NEED YOUR BRANDING, BUT DON’T HAVE THE TIME AND BUDGET TO HIRE?
            BUY SOME OF OUR DIGITAL PRODUCTS TO MAKE YOUR LIFE EASIER.
          </p>
        </Card>
      </Cards>
    </Section>
  )
}
