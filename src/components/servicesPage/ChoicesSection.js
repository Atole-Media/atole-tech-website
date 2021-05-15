import styled from "styled-components"
import React from "react"

import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { LinkButton } from "../linkButton"

import imageLeft from "../../images/services/daniele-levis-pelusi-Vo6A7rwmAJk-unsplash.png"
import imageRight from "../../images/services/Geometric Venn Diagram (1).png"

const SectionWrapper = styled(Sections)`
  min-height: 80vh;
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
  color: white;
  width: 45%;
  background-size: contain;

  .top-text {
    font-weight: 800;
  }
  .purple {
    color: var(--lightPurple);
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
`
export const ChoicesSection = () => (
  <SectionWrapper className="section--choices" display="flex">
    <ImageCard className="left">
      <p className="top-text">
        Atole Tech has the mission to help all the entrepreneurs to have their
        freedom by offering different options that will help them to get. We
        provide two paths that suits your business according to your budget.{" "}
      </p>
      <p className="bottom-text">
        In this competitive business the best option is to tailor your business
        according to your clients’ needs.
      </p>
      <p className="bottom-text">
        By hiring a proffesional you’ll get consultation and guide to make
        things happen.
      </p>
      <Button background="var(--orange)">Learn More</Button>
    </ImageCard>
    <ImageCard className="right">
      <p className="top-text purple">
        Atole Tech has the mission to help all the entrepreneurs to have their
        freedom by offering different options that will help them to get. We
        provide two paths that suits your business according to your budget.
      </p>
      <p className="bottom-text purple">
        If you don’t know where to start and don’t have time and energy to
        create your dream job.
      </p>
      <p className="bottom-text purple">
        We have templates that can help you to start your business right away.
        things happen.
      </p>
      <Button background="var(--orange)">Go to store</Button>
    </ImageCard>
  </SectionWrapper>
)
