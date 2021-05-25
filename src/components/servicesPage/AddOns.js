import React from "react"
import styled from "styled-components"

import { NewCard } from "../NewCard"
import { Sections } from "../sections"

import background from "../../images/services/addon-background.png"
import { LinkButton } from "../linkButton"

const Card = styled(NewCard)`
  color: white;
  width: 30%;
  text-align: left;
  height: 70vh;
  justify-content: space-between;
  .button {
    font-size: 2rem;
  }
  h3 {
    text-transform: uppercase;
  }
  @media (max-width: 1024px) {
    width: 50%;
    padding: 1rem 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`
const Section = styled(Sections)`
  h2 {
    color: var(--red);
  }
  background: none;
  align-items: stretch;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
  }
`
const Wrapper = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  text-align: center;
  min-height: 100vh;
`

export const AddOns = () => (
  <Wrapper className="section--addons">
    <h2>PACKAGE ADD-ONS</h2>
    <Section display="flex">
      <Card>
        <h3>RUSH</h3>
        <p>You need your designs and website as soon as possible.</p>
        <p> We can accelerate the process with a fee. </p>
        <LinkButton color="var(--pink)" className="button">
          ADD 30% TO TOTAL PRICE
        </LinkButton>
      </Card>
      <Card>
        <h3>MORE PAGES</h3>
        <p>
          Our  web development package includes  the 5 essential pages every
          website needs. 
        </p>
        <p>However if you would like to add another page. We got you!</p>
        <LinkButton color="var(--pink)" className="button">
          ADD $300 PER PAGE
        </LinkButton>
      </Card>
      <Card>
        <h3>Convenience</h3>
        <p>
          You have more important stuff to do like getting the products,
          providers, distributors and so on, not code and maintain a site!
        </p>
        <p>Like, what the hell is an HTML anyway right?</p>
        <p>
          Well, we have the option to maintain your digital business throughout
          the year.
        </p>
        <LinkButton color="var(--pink)" className="button">
          ADD $500 A MONTH
        </LinkButton>
      </Card>
    </Section>
  </Wrapper>
)
