import React from "react"
import styled from "styled-components"
import { LinkButton } from "./index"
import { Sections } from "./Sections"
const Section = styled(Sections)`
  margin: 1rem auto;
  background-color: var(--purple);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    text-transform: uppercase;
    color: white;
    text-align: center;
    padding: 5rem 0;
    font-size: 4rem;
    span {
      color: var(--pink);
    }
  }
  p {
    color: var(--textColor);
    margin: 0 2rem;
    font-size: 2.25rem;
  }
  @media (max-width: 1024px) {
    h1 {
      margin: 0 7rem;
      padding: 0;
    }
  }
  @media (max-width: 512px) {
    h1 {
      margin: 0;
      font-size: 2rem;
    }
    p {
      margin: 0;
      font-size: 1rem;
    }
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 5rem auto 0 auto;
  width: 80%;
`
export const WhatIsSection = () => (
  <Section className="whatIs-section">
    <h1>
      What is
      <span> Atole Tech?</span>
    </h1>
    <p>
      Atole Tech is a digital company offering e-commerce and designs for
      creative entrepreneurs to increase their digital presence and expand their
      businesses. <br />
      <br /> If you are an ambitious, creative business owner who is ready to
      elevate your business, attract high-end clients all while making what you
      dream of, then you are in the right place.
    </p>
    <Buttons>
      <LinkButton to="/404" border="var(--olive)">
        Learn More
      </LinkButton>
      <LinkButton to="/404" background="var(--olive)">
        Contact Us
      </LinkButton>
    </Buttons>
  </Section>
)
