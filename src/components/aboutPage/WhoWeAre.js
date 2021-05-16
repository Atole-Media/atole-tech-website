import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Sections } from "../sections"
import { NewCard } from "../NewCard"

const SectionWrapper = styled(Sections)`
  @media (max-width: 768px) {
    .rings {
      width: 40%;
    }
  }
  @media (max-width: 512px) {
    flex-wrap: wrap;
    .rings {
      width: 70%;
    }
  }
`
const Card = styled(NewCard)`
  h1 {
    font-size: 3rem;
  }
  width: 80%;
  
  @media (max-width: 512px) {
    width: 100%;
  }
`

export const WhoWeAre = () => (
  <SectionWrapper className="section-who" display="flex">
    <StaticImage
      src="../images/about/rings.png"
      alt="rings"
      className="rings"
    />
    <Card>
      <h1>Who we are</h1>
      <p>
        Atole Tech is a digital studio specializing in building websites from
        simple clean sites for creative people to complex sites capable of
        handling the demands of  startups **or corporations who would like to
        improve their  brand image in the world wide web.{" "}
      </p>
      <p>
        Our mission is to elevate your business by casting a spotlight into its
        meaning and purpose. We create your brand  from scratch and build upon
        it to attract the ideal clients for your company. 
      </p>
      <p>
        {" "}
        Atole Tech’s goal is to work you to get to the core of your business’s
        identity and showcase it in a creative yet professional way, optimizing
        your business and converting new clients.
      </p>
    </Card>
  </SectionWrapper>
)
