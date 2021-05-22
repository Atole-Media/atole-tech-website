import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { TwoColumnGrid } from "../twoColumnGrid"

import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled(Sections)`
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    width: 60%;
    text-align: center;
  }

  p {
    text-align: center;
    margin: 1rem 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 512px) {
    p {
      width: 100%;
    }
  }
`
const LittleGrid = styled(TwoColumnGrid)`
  width: 70%;
  &.icons {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 2rem;
  }
  @media (max-width: 512px) {
    width: 100%;
    text-align: justify;
  }
`
const MiniFlex = styled.div`
  width: 100%;
  text-align: center;
`
const Card = styled(NewCard)`
  width: 80%;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
  .cube {
    width: 50%;
  }
  .top {
    text-transform: uppercase;
  }
  .bottom {
    color: white;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 512px) {
    .bottom {
      width: 100%;
    }
  }
`

export const WhyAtole = () => (
  <>
    <Wrapper className="why-us" display="flex">
      <h2>Why us?</h2>
      <p>A look at our company values and what makes us unique.</p>
    </Wrapper>
    {/* <LittleGrid className="icons">
      <MiniFlex>
        <h3>BOLD</h3>
      </MiniFlex>
      <MiniFlex>
        <h3>PLAYFUL</h3>
      </MiniFlex>
      <MiniFlex>
        <h3>INNOVATIVE</h3>
      </MiniFlex>
      <MiniFlex>
        <h3>CREATIVE</h3>
      </MiniFlex>
    </LittleGrid> */}
    <LittleGrid>
      <Card>
        {" "}
        <StaticImage
          src="../../images/home/neon cube@3x.png"
          alt="neon cube"
          className="cube"
        />
        <h3 className="top">bold</h3>
        <p className="bottom">
          At Atole we are not afraid to push boundaries, to go outside the
          status quo.
        </p>
      </Card>
      <Card>
        {" "}
        <StaticImage
          src="../../images/home/purple diamond@3x.png"
          alt="purple diamond"
          className="cube"
        />
        <h3 className="top">playful</h3>
        <p className="bottom">
          Let's be honest,  business can be dull and robotic at times. Here at
          Atole we believe that fun and magic can be found in any place, even in
          invoices and customer conversion rates, yay!
        </p>
      </Card>
      <Card>
        <StaticImage
          src="../../images/home/orange L@3x.png"
          alt="orange L"
          className="cube"
        />

        <h3 className="top">innovative</h3>
        <p className="bottom">
          Always looking into the future, we are constantly updating our
          skillset and services to be on the cutting edge of technology.
        </p>
      </Card>
      <Card>
        <StaticImage
          src="../../images/home/Star@3x.png"
          alt="yellow star"
          className="cube"
        />
        <h3 className="top">Creative</h3>
        <p className="bottom">
          Art is everywhere. We want to democratize creativity and give
          businesses the tools to be able to show their vision to the worlds
        </p>
      </Card>
    </LittleGrid>
  </>
)
