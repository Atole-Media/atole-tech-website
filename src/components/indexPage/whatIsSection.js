import React from "react"
import styled from "styled-components"

import { LinkButton } from "../linkButton"
import { Sections } from "../sections"

const Section = styled(Sections)`
  margin: 1rem auto;
  background-color: var(--purple);
  flex-direction: column;
  h1 {
    text-transform: uppercase;
    color: var(--lightPurple);
    text-align: center;
    padding: 3rem 0;
    font-size: 4rem;
    span {
      color: var(--pink);
    }
  }
  p {
    color: var(--textColor);
    margin: 0 2rem;
    font-size: 2.25rem;
    width: 70%;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 1.5rem;
      margin: 0 5rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 512px) {
    h1 {
      font-size: 2rem;
    }
    p {
      margin: 0;
    }
  }
`
const Button = styled(LinkButton)`
  font-size: 2rem;
  border-width: 0;
  border-bottom-width: 5px;
  border-radius: 0;
  padding: 0 0 1rem 0;
  margin: 5rem auto 0 auto;
`

export const WhatIsSection = () => (
  <Section className="whatIs-section" display="flex">
    <h1>Welcome to Atole</h1>
    <p>
      Atole Media is a digital company offering e-commerce and designs for
      creative entrepreneurs to increase their digital presence and expand their
      businesses.
    </p>
    <Button to="/404" border="var(--orange)" color="red">
      Learn More
    </Button>
  </Section>
)
