import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
import { Sections } from "../components/sections"
import { ContactForm } from "../components/contact/ContactForm"
import { Info } from "../components/contact/Info"
import Seo from "../utils/seo"
import { NextLevel } from "../components/contact/NextLevel"
import { ContactHeader } from "../components/contact/ContactHeader"
import { Questions } from "../components/contact/Questions"
import { Newsletter } from "../components/servicesPage/Newsletter"

const ContactSection = styled(Sections)`
  justify-content: space-evenly;
  height: 100vh;
  .dots {
    width: 15%;
  }
  @media (max-width: 1028px) {
    .dots {
      width: 20%;
      margin: 0 1rem;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
  }
`

const FrequentlyAskedQuestions = () => {
  return (
    <Layout>
      <ContactHeader />{" "}
      <ContactSection display="flex">
        <ContactForm className="contact-form" />
        <StaticImage
          src="../images/contact/dots.png"
          alt="dots"
          className="dots"
        />
        <Info />
      </ContactSection>
      <NextLevel />
      {/* <Questions /> */}
      <Newsletter />
      <Seo title="Contact" />
    </Layout>
  )
}
export default FrequentlyAskedQuestions
