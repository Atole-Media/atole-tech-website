import React from "react"
import styled from "styled-components"
import { Sections } from "../sections"

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
    <h2>WOULD YOU LIKE TO START YOUR BUSINESS?</h2>
    <p>
      We know starting a business can sound overwhelming, but Atole Tech  is
      here to help and guide you in figuring out what services you can sell in
      your website and define your brand. We want to help you diversify your
      income streams with online products, subscriptions and more! {" "}
    </p>
    <p>
      Our team loves exploring new ideas, and we want the chance to conduct that
      exploration alongside other creative people such as yourself. We believe
      every business and every website is unique, we are committed to knowing 
      your product and enhancing it by giving it the image and personality you
      desire.
    </p>
  </StoryWrapper>
)
