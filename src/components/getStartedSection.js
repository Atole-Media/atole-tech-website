import React from "react"
import { Sections, Card } from "../components/index"
import { StaticImage } from "gatsby-plugin-image"


export const GetStartedSection = () => (
  <>
    <StaticImage src="../images/lines.png" alt="lines" />

    <Sections>
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
    </Sections>
    <StaticImage src="../images/lines.png" alt="lines" />
  </>
)
