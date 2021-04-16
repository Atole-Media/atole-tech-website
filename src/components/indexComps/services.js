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
  
`

export const Services = () => {
  return (
    <Section className="services-section">
      <h1>Our services</h1>
      <hr />
      <Cards>
        <Card
          title="Brand Design"
          content={[
            "Identity+Positioning",
            " Brand Innovation",
            "Brand Messaging",
            "Guidelines and Systems",
            "VisualLanguage & Art",
            "Direction",
          ]}
        >
          <StaticImage
            src="../../images/brand.png"
            alt="brand-image"
            height={200}
          />
        </Card>
        <Card
          title="Digital Design"
          content={[
            "IA + Wires",
            "User research and testing",
            "eComerce and Websites",
            " Digital Product Services",
            "Prototyping & Optimization",
          ]}
        >
          <StaticImage
            src="../../images/digital.png"
            alt="design-image"
            height={200}
          />
        </Card>
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
        >
          <StaticImage
            src="../../images/code.png"
            alt="brand-image"
            height={200}
          />
        </Card>
      </Cards>
    </Section>
  )
}
