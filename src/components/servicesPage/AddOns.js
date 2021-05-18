import React from "react"
import styled from "styled-components"

import { NewCard } from "../NewCard"
import { Sections } from "../sections"

import background from "../../images/services/addon-background.png"
import { LinkButton } from "../linkButton"

const Card = styled(NewCard)`
  color: white;
  width: 33%;
  text-align: left;
  height: 90%;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 512px) {
    width: 100%;
    padding: 0;
  }
`
const Section = styled(Sections)`
  h1 {
    color: var(--red);
  }
  background: none;
  height: 70vh;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`
const Wrapper = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  text-align: center;
`

export const AddOns = () => (
  <Wrapper className="section--addons">
    <h1>PACKAGE ADD-ONS</h1>
    <Section display="flex">
      <Card>
        <h2>RUSH</h2>
        <p>You need your designs and website as soon as possible.</p>
        <p> We can accelerate the process with a fee. </p>
        <LinkButton color="var(--pink)">ADD 30% TO TOTAL PRICE</LinkButton>
      </Card>
      <Card>
        <h2>MORE PAGES</h2>
        <p>
          Our  web development package includes  the 5 essential pages every
          website needs. 
        </p>
        <p>However if you would like to add another page. We got you!</p>
        <LinkButton color="var(--pink)">ADD $300 PER PAGE</LinkButton>
      </Card>
      <Card>
        <h2>Learn More</h2>
        <p>
          You have more important stuff to do like getting the products,
          providers, distributors and so on, not code and maintain a site!
        </p>
        <p>Like, what the hell is an HTML anyway right?</p>
        <p>
          Well, we have the option to maintain your digital business throughout
          the year.
        </p>
        <LinkButton color="var(--pink)">ADD $500 A MONTH</LinkButton>
      </Card>
    </Section>
  </Wrapper>
)
