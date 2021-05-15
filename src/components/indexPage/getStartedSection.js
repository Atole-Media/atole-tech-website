import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Header } from "../header"
import { LinkButton } from "../linkButton"

const Splash = styled(Header)`
  h1 {
    font-size: 2.5rem;
    right: 15vh;
  }
  .buttons {
    right: 15vh;
    top: 60vh;
  }
  @media (max-width: 1024px) {
    min-height: 0;
    h1 {
      top: 30vh;
      right: 10vh;
    }
    .buttons {
      top: 45vh;
    }
  }
  @media (max-width: 768px) {
    h1 {
      top: 10vh;
    }
    .buttons {
      top: 20vh;
    }
  }
  @media (max-width: 512px) {
    h1 {
      top: 5vh;
      left: 0;
      right: 0;
    }
    .buttons {
      left: 0;
      right: 0;
    }
  }
`

export const GetStartedSection = () => (
  <>
    <Splash
      image={
        <StaticImage
          src="../../images/home/neon-phone.png"
          alt="neon phone"
          layout="fullWidth"
          
        />
      }
      title={
        <>
          <h1>Let's Work Together</h1>
        </>
      }
      buttons={<LinkButton background="var(--orange)">Get Started</LinkButton>}
    />
  </>
)
