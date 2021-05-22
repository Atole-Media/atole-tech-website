import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Header } from "../header"
import { LinkButton } from "../linkButton"

const Splash = styled(Header)`
  h2 {
    right: 15vh;
    top: 20%;
  }
  .buttons {
    right: 15vh;
    top: 35%;
  }
  @media (max-width: 1024px) {
    min-height: 0;
    h2 {
      top: 30vh;
      right: 10vh;
    }
    .buttons {
      top: 45vh;
    }
  }
  @media (max-width: 768px) {
    h2 {
      top: 10vh;
    }
    .buttons {
      top: 30vh;
    }
  }
  @media (max-width: 512px) {
    h2 {
      top: 5vh;
      left: 0;
      right: 0;
    }
    .buttons {
      top: 15vh;
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
          <h2>Let's Work Together</h2>
        </>
      }
      buttons={
        <LinkButton background="var(--orange)" hover="red">
          Get Started
        </LinkButton>
      }
    />
  </>
)
