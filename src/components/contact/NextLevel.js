import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Header } from "../header"

const SectionWrapper = styled(Header)`
  min-height: 0;
  h1 {
    color: var(--orange);
    font-size: 2.5rem;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;
  }
  p {
    color: white;
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    text-align: left;
    width: 90%;
    margin: 0 auto;
    text-transform: initial;
  }
  /* .image {
    height: 80vh;
  } */
  @media (max-width: 512px) {
    h1 {
      font-size: 1.75rem;
      top: 5%;
    }
    p {
      top: 25%;
      font-size: 1rem;
    }
  }
`

export const NextLevel = () => (
  <SectionWrapper
    className="next-level"
    image={
      <StaticImage
        src="../../images/contact/phone.png"
        alt="phone"
        className="image"
        layout="fullWidth"
        aspectRatio={16 / 3}
      />
    }
    title={
      <>
        <h1>ARE YOU READY TO TAKE YOUR BRAND TO THE NEXT LEVEL?</h1>
        <p>
          We are excited to hear all about your juicy business ideas and help
          you take them to the next level by making them profitable. Contact us
          if you have any further questions about Atole's creative process, we
          are here to guide you step by step on how we are going to create your
          unique brand identity and bring it to life by developing a powerful
          website you can use to attract future clients and expand your
          business.
        </p>
      </>
    }
  />
)
