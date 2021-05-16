import React from "react"
import styled from "styled-components"
import { Sections } from "./sections"

const StoryWrapper = styled(Sections)`
  padding: 0;

  h2 {
    text-align: center;
    color: var(--orange);
    font-size: 2.5rem;
  }
  p {
    color: var(--red);
    margin-top: 2rem;
    font-size: 1.5rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    p {
      width: 90%;
      padding: 0 1.5rem;
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
  }
  @media (max-width: 512px) {
    p {
      font-size: 1rem;
      line-height: 1.5rem;
      width: 100%;
    }
  }
`

export const Story = () => (
  <StoryWrapper>
    <h2>THE STORY BEHIND ATOLE</h2>
    <p>
      Atole Tech surged during the COVID pandemic. This  historic event  shifted
      the world  from a physical to a digital one.  The world  didn’t “stop”,
      but evolved.  The world is  entering to a new technological era in which
      our presence is being reflected in the internet.{" "}
    </p>
    <p>
      <br />
      Having a virtual presence is fundamental in our time. The world is full of
      dreamers who need to  display their services in a tangible, yet
      technological way.    The truth is that while the world is slowly
      recuperating,  remote jobs and online services are going to stay and
      flourish.  Making E-commerce the future!! which means you can sell
      anything you aspire to create!
    </p>
  </StoryWrapper>
)
