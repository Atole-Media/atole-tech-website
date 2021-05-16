import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Header } from "../header"

const WrapperHeader = styled(Header)`
  .header-image {
    min-height: 100vh;
  }
`

export const ContactHeader = () => (
  <WrapperHeader
    title={
      <>
        <h1>atole tech</h1>
        <h2>Faq and contact</h2>
      </>
    }
    image={
      <StaticImage
        src="../../images/faq/Heroimage.png"
        alt="Contact hero image"
        layout="fullWidth"
        loading="eager"
        className="header-image"
      />
    }
  />
)
