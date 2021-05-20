import React from "react"

import Layout from "../components/layout"
import { AddOns } from "../components/servicesPage/AddOns"
import { BrandServiceGrid } from "../components/servicesPage/BrandServiceGrid"
import { ChoicesSection } from "../components/servicesPage/ChoicesSection"
import { Newsletter } from "../components/servicesPage/Newsletter"
import { ServicesHeader } from "../components/servicesPage/ServicesHeader"
// import { VennDiagram } from "../components/servicesPage/VennDiagram"
import Seo from "../utils/seo"

const ServicesPage = () => {
  return (
    <Layout>
      <ServicesHeader />
      <ChoicesSection />
      <BrandServiceGrid />
      <AddOns />
      {/* Might input the venn diagram component later but not now */}
      {/* <VennDiagram /> */}
      <Newsletter />
      <Seo title="Services" />
    </Layout>
  )
}

export default ServicesPage
