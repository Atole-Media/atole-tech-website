import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

import { Header } from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import { Sections } from "../components/sections"
import { Card } from "../components/card"
import { TitleLink } from "../components/aboutPage/titleLink"
import { TwoColumnGrid } from "../components/twoColumnGrid"
import { ServiceCard } from "../components/indexPage/serviceGrid/serviceCard"
import { Story } from "../components/story"

const AboutHeader = styled(Header)`
  h2 {
    top: 50vh;
    text-align: center;
    left: 0;
    right: 0;
  }
  @media (max-width: 512px) {
    h2 {
      font-size: 4rem;
    }
  }
`

const Creators = styled(Sections)`
  margin: 0 auto;
  width: 100%;
  padding: 0 1.5rem;
  h2 {
    color: var(--red);
    text-transform: uppercase;
    text-align: center;
  }
`

const AboutPage = () => {
  return (
    <Layout>
      <AboutHeader
        title={
          <h2>
            atole tech <br />
            about
          </h2>
        }
        image={
          <StaticImage
            src="../images/about/solen-feyissa-aiuCuOcNG4I-unsplash.png"
            alt="About Splash Image"
            layout="fullWidth"
            loading="eager"
            style={{
              height: "100vh",
            }}
          />
        }
      />

      <Sections display="flex">
        <StaticImage src="../images/about/rings.png" alt="rings" />
        <Card
          size="wide"
          title="Who we are"
          displayLink="none"
          content="Atole Tech is  a digital studio specializing in building websites from simple clean sites for creative people to complex sites capable of handling the demands of  startups **or corporations who would like to improve their  brand image in the world wide web. /n 
          Our mission is to elevate your business by casting a spotlight into its meaning and purpose. We create your brand  from scratch and build upon it to attract the ideal clients for your company. /n
          Atole Tech’s goal is to work you to get to the core of your business’s identity and showcase it in a creative yet professional way, optimizing your business and converting new clients."
        />
      </Sections>
      <Sections display="flex" size="wide">
        <StaticImage
          src="../images/about/michael-dziedzic-qDG7XKJLKbs-unsplash.svg"
          alt="globe"
          height={1000}
          width={3000}
        />
        <TitleLink
          title="Don't know where to start?"
          link="Take Our Quiz!"
          background="var(--orange)"
          position="right"
        />
      </Sections>
      <Story>
        <h2>THE STORY BEHIND ATOLE</h2>
        <p>
          Atole Tech surged during the COVID pandemic. This  historic event 
          shifted the world  from a physical to a digital one.  The world 
          didn’t “stop”, but evolved.  The world is  entering to a new
          technological era in which our presence is being reflected in the
          internet.{" "}
        </p>
        <p>
          <br />
          Having a virtual presence is fundamental in our time. The world is
          full of dreamers who need to  display their services in a tangible,
          yet technological way.    The truth is that while the world is slowly
          recuperating,  remote jobs and online services are going to stay and
          flourish.  Making E-commerce the future!! which means you can sell
          anything you aspire to create!
        </p>
      </Story>
      <Sections display="flex" size="wide">
        <StaticImage
          src="../images/about/ball2.svg"
          alt="globe2"
          height={1000}
          width={3000}
        />
        <TitleLink
          title="Have a project in mind?"
          link="Check our services"
          background="var(--orange)"
          position="left"
        />
      </Sections>
      <Creators>
        <h2>Who makes the atole?</h2>
        <TwoColumnGrid>
          <ServiceCard>
            <StaticImage
              src="../images/about/2.png"
              alt="left-triangle"
              width={400}
            />
          </ServiceCard>
          <ServiceCard title="Lena the creative">
            <p>
              A creative in the most pure sense of the word. Lena is always
              finding the artistic side of everything. She believes that when we
              see a film we are transported into another universe, a universe of
              celluloid and metaphors. When she isn’t watching movies you can
              find her drawing, taking gorgeous photos of forests, or figuring
              out how to befriend penguins and Boston terriers.  
            </p>
          </ServiceCard>{" "}
          <ServiceCard title="Lena the creative">
            <p>
              A creative in the most pure sense of the word. Lena is always
              finding the artistic side of everything. She believes that when we
              see a film we are transported into another universe, a universe of
              celluloid and metaphors. When she isn’t watching movies you can
              find her drawing, taking gorgeous photos of forests, or figuring
              out how to befriend penguins and Boston terriers.  
            </p>
          </ServiceCard>{" "}
          <ServiceCard>
            {" "}
            <StaticImage
              src="../images/about/2l.png"
              alt="left-triangle"
              width={400}
            />
          </ServiceCard>
        </TwoColumnGrid>
      </Creators>

      <Sections display="flex" size="wide">
        <StaticImage
          src="../images/about/ball2.svg"
          alt="globe2"
          height={1000}
          width={3000}
        />
        <TitleLink
          title="TAKE A SIP OF ATOLE LETS DO MAGIC!"
          link="Contact us"
          background="var(--orange)"
        />
      </Sections>
      <Seo title="About" />
    </Layout>
  )
}

export default AboutPage
