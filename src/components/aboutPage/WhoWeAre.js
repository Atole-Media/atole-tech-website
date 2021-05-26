import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Sections } from "../sections"
import { NewCard } from "../NewCard"

const SectionWrapper = styled(Sections)`
  @media (max-width: 768px) {
    flex-wrap: wrap;
    .rings {
      width: 80%;
    }
  }
  @media (max-width: 512px) {
    .rings {
      width: 70%;
    }
  }
`
const Card = styled(NewCard)`
  width: 60%;
  padding-left: 1rem;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

export const WhoWeAre = () => (
  <SectionWrapper className="section-who" display="flex">
    <StaticImage
      src="../../images/about/rings.png"
      alt="rings"
      className="rings"
    />
    <Card>
      <h2>The story behind atole</h2>
      <p>
        In the year 2021, Atole Tech  finally opened  its digital doors in New
        York City.  Atole-tech a digital studio specializing in building
        websites: from simple clean designs aimed at creative people, to complex
        enterprise sites capable of handling the demands of  up and coming
        startups.{" "}
      </p>
      <p>
        Atole Tech emerged during the COVID pandemic. This historic
        event shifted the world from a physical to a digital one.  The world
        didn’t “stop”, but evolved. The world is entering a new technological
        era in which our digital presence is becoming increasingly necessary. 
        Atole knows the world is full of dreamers who need to display their
        services in a tangible, yet technological way.  
      </p>
      <p>
        {" "}
        The truth is that while the world is slowly recuperating,  remote jobs
        and online services are going to stay and flourish.  Making E-commerce
        the future!! Meaning you can sell anything you aspire to create from
        anywhere!
      </p>
      <p>
        Our mission is to elevate your business by casting a spotlight into its
        meaning and purpose. We create your brand  from scratch and build upon
        it to attract the ideal clients for your company.  Atole Tech's goal is
        to work you to get to the core of your business's identity and showcase
        it in a creative yet professional way, optimizing your business and
        converting new clients.{" "}
      </p>
    </Card>
  </SectionWrapper>
)
