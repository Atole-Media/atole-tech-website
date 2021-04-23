import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { Sections } from "../sections"
import { Card } from "../card"

const StyledSection = styled(Sections)`
  display: flex;
  justify-content: space-evenly;
  color: red;
  @media (max-width: 512px) {
    flex-wrap: wrap;
  }
`
export const GetStartedSection = () => (
  <>
    <StaticImage src="../images/lines.png" alt="lines" />

    <StyledSection className="get-started">
      <Card
        title="Get Started"
        background="var(--purple)"
        size="wide"
        link="take Quiz Now"
        linkBackground="var(--olive)"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed reprehenderit libero. Esse labore tempora reprehenderit temporibus aut alias harum aperiam in eveniet, voluptates amet cum vero, minima atque doloribus. Molestiae quae doloremque exercitationem cum at vel dolorum ipsum rem."
      />
      <Card
        title="More Questions?"
        background="var(--purple)"
        size="wide"
        link="Ask Away!"
        linkBackground="var(--olive)"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed reprehenderit libero. Esse labore tempora reprehenderit temporibus aut alias harum aperiam in eveniet, voluptates amet cum vero, minima atque doloribus. Molestiae quae doloremque exercitationem cum at vel dolorum ipsum rem."
      />
    </StyledSection>
    <StaticImage src="../images/lines.png" alt="lines" />
  </>
)
