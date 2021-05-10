import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../utils/seo"

import { GetStartedSection } from "../components/indexPage/getStartedSection"
import { WhatIsSection } from "../components/indexPage/whatIsSection"
import { ServicesSection } from "../components/indexPage/servicesSection"
import { Sections } from "../components/sections"
import { TwoColumnGrid } from "../components/twoColumnGrid"
import { HomeHeader } from "../components/indexPage/HomeHeader"
import { ServiceCard } from "../components/indexPage/serviceCard"
import { WhatWeHave } from "../components/indexPage/WhatWeHave"
import { WhyAtole } from "../components/indexPage/WhyAtole"

const IndexPage = () => (
  <Layout>
    <HomeHeader />
    <WhatIsSection />
    <ServicesSection />
    <WhatWeHave />
    <StaticImage
      src="../images/home/waves.png"
      alt="waves"
      layout="fullWidth"
    />
    <WhyAtole />
    <GetStartedSection />
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
