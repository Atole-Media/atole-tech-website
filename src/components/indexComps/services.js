import React from "react"
import styled from "styled-components"
import { Card } from "../index"

import { StaticImage } from "gatsby-plugin-image"

const Section = styled.section`
  height: 100vh;
  width: 100%;
  color: white;
  text-align: center;
  background-color: var(--purple);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  h1 {
    padding: 2rem 0;
    margin: 0 auto;
    font-size: 2.5rem;
    text-transform: uppercase;
    width: 40%;
  }
  hr {
    margin: 0 auto;
    height: 5px;
    background-color: var(--yellow);
    border: none;
    width: 15rem;
  }
`
const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow:1;
`

export const Services = () => {
  return (
    <Section className="services-section">
      <h1>Our services</h1>
      <hr />
      <Cards>
        <Card
          title="Brand Design"
          image={
            <StaticImage
              src="../../images/brand.png"
              alt="brand-image"
              height={200}
            />
          }
          content={[
            "Identity+Positioning",
            " Brand Innovation",
            "Brand Messaging",
            "Guidelines and Systems",
            "VisualLanguage & Art",
            "Direction",
          ]}
        />

        <Card
          title="Digital Design"
          content={[
            "IA + Wires",
            "User research and testing",
            "eComerce and Websites",
            " Digital Product Services",
            "Prototyping & Optimization",
          ]}
          image={
            <StaticImage
              src="../../images/digital.png"
              alt="design-image"
              height={200}
            />
          }
        />

        <Card
          title="Technology"
          content={[
            "SEO Optimization",
            "Full-Stack Development",
            "API and CMS",
            "Faster Loading Times",
            "Design Implemention",
            "Quality Assurance",
          ]}
          image={
            <StaticImage
              src="../../images/code.png"
              alt="brand-image"
              height={200}
            />
          }
        />
      </Cards>
    </Section>
  )
}
