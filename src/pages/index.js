import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
// import { Link } from "gatsby"
import {
  MainHeader,
  WhatIsSection,
  ServicesSection,
  ServiceGrid,
  ServiceCard,
  Sections,
  Card,
} from "../components/index"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <MainHeader />
    <WhatIsSection />
    <ServicesSection />
    <ServiceGrid>
      <ServiceCard title="Brand Design">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sed reprehenderit libero. Esse labore tempora reprehenderit temporibus
          aut alias harum aperiam in eveniet, voluptates amet cum vero, minima
          atque doloribus. Molestiae quae doloremque exercitationem cum at vel
          dolorum ipsum rem.
        </p>
        <br /> <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sed reprehenderit libero. Esse labore tempora reprehenderit temporibus
          aut alias harum aperiam in eveniet, voluptates amet cum vero, minima
          atque doloribus. Molestiae quae doloremque exercitationem cum at vel
          dolorum ipsum rem.
        </p>
      </ServiceCard>{" "}
      <ServiceCard image={true}>
        <StaticImage src="../images/document.png" alt="document" width={250} />
      </ServiceCard>
      <ServiceCard image={true}>
        <StaticImage src="../images/text-box.png" alt="document" width={250} />
      </ServiceCard>
      <ServiceCard title="Digital Design">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sed reprehenderit libero. Esse labore tempora reprehenderit temporibus
          aut alias harum aperiam in eveniet, voluptates amet cum vero, minima
          atque doloribus. Molestiae quae doloremque exercitationem cum at vel
          dolorum ipsum rem.
        </p>
        <br /> <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sed reprehenderit libero. Esse labore tempora reprehenderit temporibus
          aut alias harum aperiam in eveniet, voluptates amet cum vero, minima
          atque doloribus. Molestiae quae doloremque exercitationem cum at vel
          dolorum ipsum rem.
        </p>
      </ServiceCard>
      <ServiceCard title="Technology">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sed reprehenderit libero. Esse labore tempora reprehenderit temporibus
          aut alias harum aperiam in eveniet, voluptates amet cum vero, minima
          atque doloribus. Molestiae quae doloremque exercitationem cum at vel
          dolorum ipsum rem.
        </p>
        <br /> <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sed reprehenderit libero. Esse labore tempora reprehenderit temporibus
          aut alias harum aperiam in eveniet, voluptates amet cum vero, minima
          atque doloribus. Molestiae quae doloremque exercitationem cum at vel
          dolorum ipsum rem.
        </p>
      </ServiceCard>
      <ServiceCard image={true}>
        <StaticImage src="../images/code2.png" alt="document" width={250} />
      </ServiceCard>
    </ServiceGrid>
    <Sections>
      <StaticImage src="../images/lines.png" alt="lines" />
    </Sections>
    <Sections>
      <Card
        title="Get Started"
        background="black"
        size="wide"
        link="take Quiz Now"
        linkBackground="var(--olive)"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed reprehenderit libero. Esse labore tempora reprehenderit temporibus aut alias harum aperiam in eveniet, voluptates amet cum vero, minima atque doloribus. Molestiae quae doloremque exercitationem cum at vel dolorum ipsum rem."
      />
      <Card
        title="More Questions?"
        background="black"
        size="wide"
        link="Ask Away!"
        linkBackground="var(--olive)"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed reprehenderit libero. Esse labore tempora reprehenderit temporibus aut alias harum aperiam in eveniet, voluptates amet cum vero, minima atque doloribus. Molestiae quae doloremque exercitationem cum at vel dolorum ipsum rem."
      />
    </Sections>
    <Sections>
      <StaticImage src="../images/lines.png" alt="lines" />
    </Sections>

    <Seo title="Home" />
  </Layout>
)

export default IndexPage
