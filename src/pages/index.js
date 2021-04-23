import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { GetStartedSection } from "../components/indexPage/getStartedSection"
import { MainHeader } from "../components/indexPage/mainHeader"
import { WhatIsSection } from "../components/indexPage/whatIsSection"
import { ServicesSection } from "../components/indexPage/serviceGrid/servicesSection"
import { Sections } from "../components/sections"
import { ServiceCard } from "../components/indexPage/serviceGrid/serviceCard"
import { TwoColumnGrid } from "../components/twoColumnGrid"

const IndexPage = () => (
  <Layout>
    <MainHeader />
    <WhatIsSection />
    <ServicesSection />
    <Sections>
      <TwoColumnGrid>
        <ServiceCard title="Brand Design">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sed reprehenderit libero. Esse labore tempora reprehenderit
            temporibus aut alias harum aperiam in eveniet, voluptates amet cum
            vero, minima atque doloribus. Molestiae quae doloremque
            exercitationem cum at vel dolorum ipsum rem.
          </p>
          <br /> <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sed reprehenderit libero. Esse labore tempora reprehenderit
            temporibus aut alias harum aperiam in eveniet, voluptates amet cum
            vero, minima atque doloribus. Molestiae quae doloremque
            exercitationem cum at vel dolorum ipsum rem.
          </p>
        </ServiceCard>{" "}
        <ServiceCard image={true}>
          <StaticImage
            src="../images/document.png"
            alt="document"
            width={250}
          />
        </ServiceCard>
        <ServiceCard image={true}>
          <StaticImage
            src="../images/text-box.png"
            alt="document"
            width={250}
          />
        </ServiceCard>
        <ServiceCard title="Digital Design">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sed reprehenderit libero. Esse labore tempora reprehenderit
            temporibus aut alias harum aperiam in eveniet, voluptates amet cum
            vero, minima atque doloribus. Molestiae quae doloremque
            exercitationem cum at vel dolorum ipsum rem.
          </p>
          <br /> <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sed reprehenderit libero. Esse labore tempora reprehenderit
            temporibus aut alias harum aperiam in eveniet, voluptates amet cum
            vero, minima atque doloribus. Molestiae quae doloremque
            exercitationem cum at vel dolorum ipsum rem.
          </p>
        </ServiceCard>
        <ServiceCard title="Technology">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sed reprehenderit libero. Esse labore tempora reprehenderit
            temporibus aut alias harum aperiam in eveniet, voluptates amet cum
            vero, minima atque doloribus. Molestiae quae doloremque
            exercitationem cum at vel dolorum ipsum rem.
          </p>
          <br /> <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sed reprehenderit libero. Esse labore tempora reprehenderit
            temporibus aut alias harum aperiam in eveniet, voluptates amet cum
            vero, minima atque doloribus. Molestiae quae doloremque
            exercitationem cum at vel dolorum ipsum rem.
          </p>
        </ServiceCard>
        <ServiceCard image="image">
          <StaticImage src="../images/code2.png" alt="document" width={250} />
        </ServiceCard>
      </TwoColumnGrid>
    </Sections>
    <GetStartedSection />
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
