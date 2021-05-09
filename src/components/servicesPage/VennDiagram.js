import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import venn from "../../images/services/VennDiagram.png"
import { LinkButton } from "../linkButton"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"

const Wrapper = styled(Sections)`
  /* background-image: url(${venn});
  background-position: center 0;
  background-size: cover; */
`
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 30%;
  width: 80%;
`
const Card = styled(NewCard)`
  color: #29cccb;
  h1 {
    font-size: 3rem;
    margin: 0;
  }
  ul {
    margin: 1.5rem 0;
    width: 80%;
  }
`

export const VennDiagram = () => (
  <Wrapper className="venn-diagram" display="flex">
    <StaticImage
      src="../../images/services/VennDiagram.png"
      alt="venn diagram"
      height={800}
    />
    <CardWrapper>
      <Card>
        <h2>Custom Web Services</h2>
        <ul>
          <li>- This is ideal for advanced businesses</li>
          <li>- Launch in as little as 3 weeks </li>
          <li>- Pricing starts at $1400</li>
        </ul>
        <ul>
          <li>Hire a professional team to bring your vision to life.</li>
          <li>Completely customized to make your business unique.</li>
        </ul>{" "}
        <LinkButton>View our work</LinkButton>
      </Card>
      <Card>
        <h1>Atole</h1>
        <h1>Tech</h1>
      </Card>
      <Card>
        <h2>ATOLE’S DIGITAL STORE</h2>
        <ul>
          <li>- This is ideal for new businesses</li>
          <li>- Launch in as little as 1 day</li>
          <li>- Pricing starts at $200</li>
        </ul>
        <ul>
          <li>Webflow templates to finally start your business.</li>
          <li> Professional DIY branding for those business on a budget.</li>
        </ul>
        <LinkButton>Visit our shop</LinkButton>
      </Card>
    </CardWrapper>
  </Wrapper>
)
