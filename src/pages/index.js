import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../utils/seo"

import { GetStartedSection } from "../components/indexPage/getStartedSection"
import { WhatIsSection } from "../components/indexPage/whatIsSection"
import { ServicesSection } from "../components/indexPage/servicesSection"
import { Newsletter } from "../components/servicesPage/Newsletter"
import { HomeHeader } from "../components/indexPage/HomeHeader"
import { WhatWeHave } from "../components/indexPage/WhatWeHave"
import { WhyAtole } from "../components/indexPage/WhyAtole"
import { Process } from "../components/indexPage/Process"

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
    <Process />
    <Newsletter />
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
