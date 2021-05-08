import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import { ServicesHeader } from "../components/servicesPage/ServicesHeader"

const ServicesPage = () => {
  return (
    <Layout>
      <ServicesHeader
        title={
          <>
            <h1 className="textTop">New to atole tech?</h1>
            <br />
            <h2 className="textBottom">Check out our services</h2>
          </>
        }
        image={
          <StaticImage
            src="../images/services/michael-dziedzic-uZr0oWxrHYs-unsplash.png"
            alt="services splash image"
          />
        }
      />
    </Layout>
  )
}

export default ServicesPage
