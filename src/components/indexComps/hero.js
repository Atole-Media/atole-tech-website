import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const HeroImage = styled.div`
  position: relative;
  h2 {
    color: white;
    position: absolute;
    bottom: 30vh;
    font-size: 5rem;
    left: 10vw;
  }
`

const Hero = () => (
  <HeroImage>
    <StaticImage
      src="../../images/hero.jpg"
      alt="Hero splash!"
      loading="eager"
      layout="fullWidth"
    />
    <h2>
      Take a sip of creativity <br /> and let's do magic!
    </h2>
  </HeroImage>
)

export default Hero
