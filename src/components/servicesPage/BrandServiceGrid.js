import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import { NewCard } from "../NewCard"
import { TwoColFlex } from "../TwoColFlex"

const BrandWrapper = styled(TwoColFlex)`
  background-color: #410e52;
`
const WebWrapper = styled(TwoColFlex)`
  background-color: #051865;
`

const TextCard = styled(NewCard)`
  color: var(--orange);
  width: 40%;
  h2 {
    font-size: 2rem;
    text-align: center;
    margin: 1.5rem 0;
  }
  p {
    font-size: 1.25rem;
    margin: 1rem 0;
  }
`

export const BrandServiceGrid = () => (
  <>
    <BrandWrapper>
      <TextCard>
        <h2>CUSTOM LOGO & BRANDING SERVICE</h2>
        <p>
          This is for someone who’s is to have beautiful designs that will help
          them establish credibility and give them a strong digital presence of
          their business.  We do this after a comprehensive brand strategy &
          development approach.
        </p>
        <p>
          Our services include all things needed to define your business’s
          branding and will help those just starting out as entrepreneurs or for
          those in need of a brand reset. Let us help you take your dream brand
          and throw it into action.
        </p>
        <p>
          Choose between the powerful easy to use CMS of Webflow. Which gives
          you the power of making revisions, edits and updates on your site on
          demand or choose Gatsby, a Fast Static site using the latest
          technologies. Perfect for businesses who are rapidly growing and need
          a site that will scale with them. More secure, faster, better SEO, and
          more importantly highly customizable to meet all your needs.
        </p>
      </TextCard>
      <StaticImage
        src="../../images/services/ball.png"
        alt="ball"
        width={500}
      />
    </BrandWrapper>
    <WebWrapper>
      <StaticImage
        src="../../images/services/pyramid.png"
        alt="pyramid"
        aspectRatio={3 / 4}
        width={600}
      />
      <TextCard>
        <h2>CUSTOM WEB DESIGN & DEVELOPMENT SERVICE</h2>
        <p>
          This is for someone who’s is to have beautiful designs that will help
          them establish credibility and give them a strong digital presence of
          their business.  We do this after a comprehensive brand strategy &
          development approach.
        </p>
        <p>
          Our services include all things needed to define your business’s
          branding and will help those just starting out as entrepreneurs or for
          those in need of a brand reset. Let us help you take your dream brand
          and throw it into action.
        </p>
        <p>
          Choose between the powerful easy to use CMS of Webflow. Which gives
          you the power of making revisions, edits and updates on your site on
          demand or choose Gatsby, a Fast Static site using the latest
          technologies. Perfect for businesses who are rapidly growing and need
          a site that will scale with them. More secure, faster, better SEO, and
          more importantly highly customizable to meet all your needs.
        </p>
      </TextCard>
    </WebWrapper>
  </>
)
