import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { TwoColFlex } from "../TwoColFlex"
import { TwoColumnGrid } from "../twoColumnGrid"

const Wrapper = styled.div`
  h1 {
    text-align: left;
    margin-left: 5rem;
    color: var(--neon);
  }
`
const ImageRight = styled(TwoColFlex)`
  h2 {
    border-bottom: 7px solid var(--orange);
    padding-bottom: 2rem;
    text-transform: uppercase;
    font-size: 2rem;
    text-align: left;
    margin-right: auto;
  }
`
const ImageLeft = styled(TwoColFlex)`
  h2 {
    border-bottom: 7px solid var(--orange);
    padding-bottom: 2rem;
    text-transform: uppercase;
    font-size: 2rem;
    text-align: left;
    margin-left: auto;
  }
`
const Card = styled(NewCard)`
  width: 40%;
  .top {
    color: white;
    font-weight: 800;
  }
  .bottom {
    color: var(--orange);
  }
`

export const WhatWeHave = () => (
  <Wrapper size="wide">
    <h1>WHAT YOU CAN FIND IN ATOLE TECH...</h1>
    <ImageRight>
      <Card>
        <h2>Design</h2>
        <p className="top">
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p className="bottom">
          {" "}
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>
      <StaticImage src="../../images/home/play-button.png" alt="play button" />
    </ImageRight>
    <ImageLeft>
      <StaticImage src="../../images/home/laptop.png" alt="laptop" />
      <Card>
        <h2>Branding</h2>
        <p className="top">
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p className="bottom">
          {" "}
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>
    </ImageLeft>
    <ImageRight>
      <Card>
        <h2>Development</h2>
        <p className="top">
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p className="bottom">
          {" "}
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>
      <StaticImage src="../../images/home/blue-rhombus.png" alt="rhombus" />
    </ImageRight>
    <ImageLeft>
      <StaticImage src="../../images/home/whiteboard.png" alt="whiteboard" />
      <Card>
        <h2>Pointing</h2>
        <p className="top">
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p className="bottom">
          {" "}
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>
    </ImageLeft>
  </Wrapper>
)