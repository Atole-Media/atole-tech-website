import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Sections } from "../components/sections"
import { TitleLink } from "../components/aboutPage/titleLink"
import { Creators } from "../components/aboutPage/Creators"
import { Story } from "../components/aboutPage/story"
import Seo from "../utils/seo"
import { AboutHeader } from "../components/aboutPage/AboutHeader"
import { WhoWeAre } from "../components/aboutPage/WhoWeAre"

const AboutPage = () => {
  return (
    <Layout>
      <AboutHeader />
      <WhoWeAre />
      <Sections size="wide">
        <StaticImage
          src="../images/about/top-globe.png"
          alt="globe"
          layout="fullWidth"
          style={{
            minHeight: "13rem",
          }}
        />
        <TitleLink
          title="Don't know where to start?"
          link="Take Our Quiz!"
          background="var(--orange)"
          position="right"
        />
      </Sections>
      <Story />
      <Sections size="wide">
        <StaticImage
          src="../images/about/bottom-globe.png"
          alt="globe2"
          layout="fullWidth"
        />
        <TitleLink
          title="Have a project in mind?"
          link="Check our services"
          background="var(--orange)"
          position="left"
        />
      </Sections>
      <Creators />
      <Sections size="wide">
        <StaticImage
          src="../images/about/blobs.png"
          alt="globe2"
          layout="fullWidth"
          style={{
            minHeight: "13rem",
          }}
        />
        <TitleLink
          title="TAKE A SIP OF ATOLE LETS DO MAGIC!"
          link="Contact us"
          background="var(--orange)"
        />
      </Sections>
      <Seo title="About" />
    </Layout>
  )
}

export default AboutPage
