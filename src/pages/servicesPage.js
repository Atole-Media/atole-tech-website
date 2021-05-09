import React from "react"

import Layout from "../components/layout"
import { AddOns } from "../components/servicesPage/AddOns"
import { BrandServiceGrid } from "../components/servicesPage/BrandServiceGrid"
import { ChoicesSection } from "../components/servicesPage/ChoicesSection"
import { Newsletter } from "../components/servicesPage/Newsletter"
import { ServicesHeader } from "../components/servicesPage/ServicesHeader"
import { VennDiagram } from "../components/servicesPage/VennDiagram"

const ServicesPage = () => {
  return (
    <Layout>
      <ServicesHeader />
      <ChoicesSection />
      <BrandServiceGrid />
      <AddOns />
      <VennDiagram />
      <Newsletter />
    </Layout>
  )
}

export default ServicesPage
