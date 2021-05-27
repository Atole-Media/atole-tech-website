import styled from "styled-components"
import React from "react"

const InfoWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  color: var(--orange);
  text-align: center;
  justify-content: space-evenly;
  height: 80%;
  padding-bottom: 1.5rem;
  h3 {
    text-transform: uppercase;
    color: var(--orange);
  }
  a {
    color: white;
    font-size: 1.5rem;
  }
  .text {
    color: white;
  }
  
  @media (max-width: 1024px) {
    width: 90%;
    .text {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media (max-width: 512px) {
    width: 100%;
  }
`
export const Info = () => (
  <InfoWrapper>
    <h3>Atole's Location</h3>
    <p>Located in the great city of New York</p>
    <h3>DIRECT CONTACT</h3>
    <a href="mailto:info@atolemedia.com" target="_blank" rel="noreferrer">
      info@atolemedia.com
    </a>
    <h3>HOURS OF AVAILABILITY</h3>
    <p>We will respond within 24 hours</p>
    <p className="text">
      Thank you for reaching out to us through the website. We cannot wait to
      show you everything we have to offer. A member of our team will follow up
      soon, but please take the opportunity to learn more about us here
    </p>
  </InfoWrapper>
)
