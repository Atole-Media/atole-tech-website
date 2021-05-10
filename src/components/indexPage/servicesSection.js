import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
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
  }
  h2 {
    color: white;
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    h1 {
      width: 60%;
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
    color: var(--lightPurple);
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
`

export const ServicesSection = () => {
  return (
    <Section className="services-section ">
      <h3>Our services</h3>
      <p>
        We provide three paths that suits your business according to your
        budget.
      </p>
      <Cards>
        <Card className="small left">
          <h3>LEARN</h3>
          <p>GET INSPIRED BY OUR COURSES COMING SOON</p>
        </Card>
        <Card className="big center">
          <h3>HIRE</h3>
          <p>
            YOU DON’T HAVE TIME OR ENERGY AND YOU DON’T WANT TO WORRY ABOUT
            ANYTHING HIRE OUR.TEAM!
          </p>
        </Card>
        <Card className="small right">
          <h3>SHOP</h3>
          <p>BUY SOME OF OUR DIGITAL PRODUCTS TO MAKE YOUR LIFE EASIER.</p>
        </Card>
        {/* <Card
          title="Brand Design"
          image={
            <StaticImage
              src="../../../images/home/brand.png"
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
          linkColor="var(--yellow)"
          background="var(--lightPurple)"
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
              src="../../../images/home/digital.png"
              alt="design-image"
              height={200}
            />
          }
          linkColor="var(--yellow)"
          background="var(--lightPurple)"
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
              src="../../../images/home/code.png"
              alt="brand-image"
              height={200}
            />
          }
          linkColor="var(--yellow)"
          background="var(--lightPurple)"
        /> */}
      </Cards>
    </Section>
  )
}
