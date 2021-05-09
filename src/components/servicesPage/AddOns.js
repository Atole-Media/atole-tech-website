import React from "react"
import styled from "styled-components"

import { NewCard } from "../NewCard"
import { Sections } from "../sections"

import background from "../../images/services/addon-background.png"

const Card = styled(NewCard)`
  color: white;
  width: 33%;
`
const Section = styled(Sections)`
  background-image: url(${background});
`

export const AddOns = () => (
  <Section className="section--addons" display="flex">
    <Card>
      <h2>Learn More</h2>
      <p>
        This is for someone who’s is to have beautiful designs that will help
        them establish credibility and give them a strong digital presence of
        their business.  We do this after a comprehensive brand strategy &
        development approach.
      </p>
      <p>
        {" "}
        Our services include all things needed to define your business’s
        branding and will help those just starting out as entrepreneurs or for
        those in need of a brand reset. Let us help you take your dream brand
        and throw it into action.{" "}
      </p>
      <p>
        Choose between the powerful easy to use CMS of Webflow. Which gives you
        the power of making revisions, edits and updates on your site on demand
        or choose Gatsby, a Fast Static site using the latest technologies.
        Perfect for businesses who are rapidly growing and need a site that will
        scale with them. More secure, faster, better SEO, and more importantly
        highly customizable to meet all your needs.
      </p>
    </Card>
    <Card>
      <h2>Learn More</h2>
      <p>
        This is for someone who’s is to have beautiful designs that will help
        them establish credibility and give them a strong digital presence of
        their business.  We do this after a comprehensive brand strategy &
        development approach.
      </p>
      <p>
        {" "}
        Our services include all things needed to define your business’s
        branding and will help those just starting out as entrepreneurs or for
        those in need of a brand reset. Let us help you take your dream brand
        and throw it into action.{" "}
      </p>
      <p>
        Choose between the powerful easy to use CMS of Webflow. Which gives you
        the power of making revisions, edits and updates on your site on demand
        or choose Gatsby, a Fast Static site using the latest technologies.
        Perfect for businesses who are rapidly growing and need a site that will
        scale with them. More secure, faster, better SEO, and more importantly
        highly customizable to meet all your needs.
      </p>
    </Card>
    <Card>
      <h2>Learn More</h2>
      <p>
        This is for someone who’s is to have beautiful designs that will help
        them establish credibility and give them a strong digital presence of
        their business.  We do this after a comprehensive brand strategy &
        development approach.
      </p>
      <p>
        {" "}
        Our services include all things needed to define your business’s
        branding and will help those just starting out as entrepreneurs or for
        those in need of a brand reset. Let us help you take your dream brand
        and throw it into action.{" "}
      </p>
      <p>
        Choose between the powerful easy to use CMS of Webflow. Which gives you
        the power of making revisions, edits and updates on your site on demand
        or choose Gatsby, a Fast Static site using the latest technologies.
        Perfect for businesses who are rapidly growing and need a site that will
        scale with them. More secure, faster, better SEO, and more importantly
        highly customizable to meet all your needs.
      </p>
    </Card>
  </Section>
)
