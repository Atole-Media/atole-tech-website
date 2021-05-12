import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { Sections } from "../sections"
import { Card } from "../card"
import { Header } from "../header"
import { LinkButton } from "../linkButton"


const Splash = styled(Header)`
  h1 {
    font-size: 2.5rem;
    top: 40%;
    left: 60%;
    display: inline;
  }
  .buttons {
    right: 17%;
    bottom: 40%;
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
