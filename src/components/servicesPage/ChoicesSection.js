import styled from "styled-components"
import React from "react"

import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { LinkButton } from "../linkButton"

import imageLeft from "../../images/services/daniele-levis-pelusi-Vo6A7rwmAJk-unsplash.png"
import imageRight from "../../images/services/Geometric Venn Diagram (1).png"

const SectionWrapper = styled(Sections)`
  min-height: 80vh;
  align-items: stretch;
  background-position: center;
  background-size: cover;
  .left {
    background-image: url(${imageLeft});
  }
  .right {
    background-image: url(${imageRight});
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`
const ImageCard = styled(NewCard)`
  width: 45%;
  background-size: contain;
  align-items: flex-start;
  justify-content: space-between;
  ul {
    color: white;
    font-size: 1.5rem;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    li {
      list-style-type: disc;
      list-style-position: inside;
    }
  }
  .top-text {
  }
  &.left {
    p {
      color: var(--lightBlue);
    }
  }
  &.right {
    p {
      color: var(--pink);
    }
  }
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`
const Button = styled(LinkButton)`
  width: fit-content;
  align-self: center;
`
export const ChoicesSection = () => (
  <SectionWrapper className="section--choices" display="flex">
    <ImageCard className="left">
      <p className="top-text">
        This service is completely customized to your business's needs.
      </p>
      <p className="top-text">
        In this competitive business the best option is to tailor your business
        according to your clients’ needs.
      </p>
      <p>By hiring us you’ll get consultation and guide to make it happen.</p>
      <ul className="bottom-text">
        <li>This is ideal for advanced businesses</li>
        <li>Launch in as little as 4 weeks</li>
        <li>Pricing starts at  $2000</li>
      </ul>
      <Button background="var(--orange)">Learn More</Button>
    </ImageCard>
    <ImageCard className="right">
      <p className="top-text ">
        Atole Tech’ s mission is to help all entrepreneurs have creative freedom
        by offering different options that will help them get there, by having
        us bring your vision to life.
      </p>
      <p className="bottom-text ">
        We have an affordable path to suit any budget. Atole’s store has DIY 
        web templates to make possible to start your business in less than a
        day.
      </p>
      <p className="bottom-text ">
        This is ideal for new businesses that have some technical knowledge and
        wan to get started by themselves, with little supervision.
      </p>
      <ul>
        <li>This is ideal for new businesses</li>
        <li>Launch in as little as 1 day</li>
        <li>Pricing starts at $20</li>
      </ul>
      <Button background="var(--lightPurple)">Go to store</Button>
    </ImageCard>
  </SectionWrapper>
)
