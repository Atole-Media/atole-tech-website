import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Header } from "../header"

const SectionWrapper = styled(Header)`
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
    top: 30%;
    left: 0;
    right: 0;
    text-align: left;
    width: 90%;
    margin: 0 auto;
  }
  .image {
    height: 80vh;
  }
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
      />
    }
    title={
      <>
        <h1>ARE YOU READY TO TAKE YOUR BRAND TO THE NEXT LEVEL?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
          amet et quis autem reprehenderit voluptate consequuntur nisi ipsum
          repudiandae pariatur, dolore distinctio, laudantium deleniti, ipsam
          tempora? Deleniti tenetur iure quidem ea tempore officia consectetur
          ratione doloribus quae. Est illo quaerat dignissimos inventore nemo
          modi dolorem quia saepe suscipit placeat. Facere recusandae deserunt
       
        </p>
      </>
    }
  />
)
