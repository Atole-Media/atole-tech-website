import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import { Header } from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import { Sections } from "../components/sections"
import { TwoColumnGrid } from "../components/twoColumnGrid"
import { ServiceCard } from "../components/indexPage/serviceGrid/serviceCard"
import { ContactForm } from "../components/contact/ContactForm"
import { Info } from "../components/contact/Info"
import Seo from "../utils/seo"
import { NextLevel } from "../components/contact/NextLevel"

const FaqHeader = styled(Header)`
  h1 {
    left: 0;
    right: 0;
    text-align: center;
  }
  h2 {
    text-align: center;
    left: 0;
    right: 0;
  }
`
const Questions = styled(Sections)`
  margin: 2rem auto;
  color: var(--orange);

  h1 {
    text-align: center;
    font-size: 3rem;
  }
  h2 {
    color: var(--orange);
  }
`
const ContactSection = styled(Sections)``

const FrequentlyAskedQuestions = () => {
  return (
    <Layout>
      <FaqHeader
        title={
          <>
            <h1>atole tech</h1>
            <h2>Faq and contact</h2>
          </>
        }
        image={
          <StaticImage
            src="../images/faq/Heroimage.png"
            alt="Faq hero image"
            layout="fullWidth"
            loading="eager"
            style={{
              height: "100vh",
            }}
          />
        }
      />
      <Questions className="questions">
        <h1> Frequently Asked Questions</h1>

        <TwoColumnGrid>
          <ServiceCard title="Templates vs Jamstack">
            <p>
              All Eliqs orders are delivered directly to our customers, however
              craft beer delivery is limited to California and Oregon, while
              wine orders are available nationwide to 40 states. We are actively
              working to expand the markets we serve, so please sign up for our
              Newsletter to stay up to date on our plans and all things Eliqs!
            </p>
          </ServiceCard>
          <ServiceCard title="Pricing and order quantities">
            <p>
              Custom and Personalized Designs: ~2 weeks from design finalization
              to delivery. Rush delivery is available - contact hello@eliqs.com
              for more information. Eliqs Pre-set Designs: ~1 week from purchase
              date to delivery.
            </p>
          </ServiceCard>
          <ServiceCard title="Design Process">
            <p>
              To get started, we’d like to get a better idea of what you’re
              looking for in a custom design by having you complete our Eliqs
              Design Questionnaire. This gives us a sense of what you want in
              terms of the colors / aesthetic / pictures / text / etc. The more
              info you provide the better!
            </p>
            <br />
            <p>
              {" "}
              We’ll share your responses with a designer on our team who will
              take an initial pass at creating a design according to the
              direction you’ve provided. After we share your v1 design, you will
              have the opportunity to provide a round of feedback before the
              design is finalized. We then take care of the rest by putting your
              order together and delivering it directly to you.
            </p>
          </ServiceCard>
          <ServiceCard title="Payment process">
            <p>
              Please note that we are on a 50/50 payment plan means that all
              services agreed upon will require 50% deposit upfront before we
              start to work on your unique needs, and the reminder of the
              payment ( including any additional charges) to be made just before
              you receive the final designs. You will be receiving before each
              payment to be made. Payment transactions will be through online
              card payments or bank transfers.
            </p>
          </ServiceCard>
          <ServiceCard title="Delivery Details">
            <p>
              All orders are delivered directly to our customers. We are
              actively working to expand the markets we serve. Custom and
              Personalized Designs: ~2 weeks from design finalization to
              delivery. Rush delivery is available for a fee. Additional
              Add-ons.
            </p>
          </ServiceCard>
          <ServiceCard title="What is our stack?">
            <p>
              Our stacks depends on your needs. If you have no design background
              and just want to start your business without worrying about the
              design. Webflow for complete site build from the ground up
              Squarespace if you need to edit an existing Squarespace site
              Gatsby and Shopify for larger enterprise sites needing a larger
              and faster site
            </p>
          </ServiceCard>
        </TwoColumnGrid>
      </Questions>
      <NextLevel />
      <ContactSection display="flex">
        <ContactForm />
        <StaticImage src="../images/contact/dots.png" alt="dots" />
        <Info />
      </ContactSection>

      <Seo title="Contact" />
    </Layout>
  )
}
export default FrequentlyAskedQuestions
