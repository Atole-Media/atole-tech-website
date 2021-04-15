import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  h2 {
    color: white;
    position: absolute;
    bottom: 30vh;
    font-size: 5rem;
    left: 10vw;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
      left: 5vw;
    }
  }
  @media (max-width: 512px) {
    font-size: 1.5rem;
  }
`

export const Hero = () => (
  <Wrapper className="HeroImage">
    <StaticImage
      src="../../images/hero.jpg"
      alt="Hero splash!"
      loading="eager"
      layout="fullWidth"
      style={{
        height: "100vh",
      }}
    />

    <h2>
      Take a sip of creativity <br /> and let's do magic!
    </h2>
  </Wrapper>
)

