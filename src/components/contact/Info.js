import styled from "styled-components"
import React from 'react';

const InfoWrapper = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  color: var(--orange);
  text-align: center;
  justify-content: space-evenly;
  height: 80vh;
  h3 {
    text-transform: uppercase;
  }
  .text {
    color: white;
  }
`
export const Info = () => (
  <InfoWrapper>
    <h3>Atole's Location</h3>
    <p>Located in the great city of New York</p>
    <h3>ATOLE’S BUSINESS EMAIL/ DIRECT CONTACT</h3>
    <a href="mailto:lena@atolemedia.com" target="_blank" rel="noreferrer">
      lena@atolemedia.com
    </a>
    <a href="mailto:Julian@atolemedia.com" target="_blank" rel="noreferrer">
      julianv@atolemedia.com
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
