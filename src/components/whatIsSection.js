import React from "react"
import styled from "styled-components"
import { LinkButton } from "./index"

const Section = styled.section`
  width: 100%;
  height: 100vh;
  /* position: relative;
  top: 100vh; */
  margin: 0 auto;
  z-index: 10;
  margin-top: 100vh;
  background-color: var(--purple);
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
    margin: 0 auto;
    width: var(--maxContent);
    font-size: 2.25rem;
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
