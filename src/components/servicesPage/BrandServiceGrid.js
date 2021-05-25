import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { LinkButton } from "../linkButton"

import { NewCard } from "../NewCard"
import { TwoColFlex } from "../TwoColFlex"

const BrandWrapper = styled(TwoColFlex)`
  background-color: #410e52;
  .image {
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap-reverse;
    .image {
      width: 90%;
      padding: 2rem 0;
    }
  }
`
const WebWrapper = styled(TwoColFlex)`
  background-color: #051865;
  .image {
    width: 40%;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    .image {
      width: 90%;
      padding: 2rem 0;
    }
  }
`

const TextCard = styled(NewCard)`
  color: var(--orange);
  width: 40%;
  .image {
    width: 40%;
  }
  .button {
    font-size: 2rem;
  }
  h3 {
    text-align: center;
    margin: 1.5rem 0;
    color: var(--red);
  }
  p {
    margin: 1rem 0;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const BrandServiceGrid = () => (
  <>
    <BrandWrapper>
      <TextCard>
        <h3>CUSTOM LOGO & BRANDING SERVICE</h3>
        <p>
          This is for someone who wants to have beautiful designs that will help
          them establish credibility and give them a strong digital presence of
          their business.
        </p>
        <p>
          We do this after a comprehensive brand strategy & development
          approach.
        </p>
        <LinkButton color="var(--pink)" className="button">
          BUY $ 550
        </LinkButton>
      </TextCard>
      <StaticImage
        src="../../images/services/ball.png"
        alt="ball"
        className="image"
      />
    </BrandWrapper>
    <WebWrapper>
      <StaticImage
        src="../../images/services/pyramid.png"
        alt="pyramid"
        aspectRatio={3 / 4}
        className="image"
      />
      <TextCard>
        <h3>CUSTOM WEB DESIGN & DEVELOPMENT SERVICE</h3>
        <p>
          Perfect for businesses who are rapidly growing and need a site that
          will scale with them. More secure, faster, better SEO, and more
          importantly highly customizable to meet all your needs.
        </p>
        <LinkButton color="var(--pink)" className="button">
          BUY $ 2000
        </LinkButton>
      </TextCard>
    </WebWrapper>
  </>
)
