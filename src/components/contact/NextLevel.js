import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Header } from "../header"

const SectionWrapper = styled(Header)`
  min-height: 0;
  h2 {
    color: var(--orange);
    top: 25%;
    left: 0;
    right: 0;
    text-align: center;
    width: 70%;
    margin: 0 auto;
  }
  p {
    color: white;
    position: absolute;
    bottom: 20%;
    left: 0;
    right: 0;
    text-align: justify;
    width: 70%;
    margin: 0 auto;
    text-transform: initial;
  }
  .image {
    height: 90vh;
  }
  @media (max-width: 1024px) {
    h2 {
      width: 95%;
    }
    p {
      bottom: 10%;
    }
  }
  @media (max-width: 768px) {
    h2 {
      width: 95%;
      top: 5%;
    }
    p {
      bottom: 0%;
      width: 90%;
    }
  }

  @media (max-width: 512px) {
    h2 {
      top: 15%;
    }
    p {
      top: 45%;
      height: auto;
    }
    .image {
      height: 60vh;
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
      />
    }
    title={
      <>
        <h2>ARE YOU READY TO TAKE YOUR BRAND TO THE NEXT LEVEL?</h2>
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
