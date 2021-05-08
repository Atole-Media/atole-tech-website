import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

import { Header } from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import { Sections } from "../components/sections"
import { TwoColumnGrid } from "../components/twoColumnGrid"
import { ServiceCard } from "../components/indexPage/serviceGrid/serviceCard"
import { Story } from "../components/story"
import { ContactForm } from "../components/contact/ContactForm"
import { Info } from "../components/contact/Info"

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
      <Story>
        <h2>ARE YOU READY TO TAKE YOUR BRAND TO THE NEXT LEVEL?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
          amet et quis autem reprehenderit voluptate consequuntur nisi ipsum
          repudiandae pariatur, dolore distinctio, laudantium deleniti, ipsam
          tempora? Deleniti tenetur iure quidem ea tempore officia consectetur
          ratione doloribus quae. Est illo quaerat dignissimos inventore nemo
          modi dolorem quia saepe suscipit placeat. Facere recusandae deserunt
          necessitatibus perspiciatis voluptatem reprehenderit, libero ex
          temporibus, tempora, dignissimos iure distinctio. Exercitationem ipsa
          quas eveniet pariatur sed consequatur delectus, reiciendis rem ullam,
          ex tempora corporis impedit voluptatum deserunt nobis natus non, a sit
          libero excepturi. Provident, voluptas placeat. Cum officiis cumque
          optio veniam exercitationem eligendi earum aliquam dolorum ut adipisci
          natus aperiam consequatur excepturi libero enim, qui quod pariatur!
          Laudantium maxime ex dignissimos. Iure odit voluptatibus magnam,
          dolorum autem esse odio similique temporibus alias dolor velit
          provident ratione nobis accusantium illum perspiciatis corrupti ullam.
          Veritatis laboriosam pariatur nostrum rem deserunt vero similique
          quaerat, odit blanditiis dignissimos? Labore, quo minus nam quisquam
          commodi in ad eveniet perferendis id ex magni, quod modi nisi magnam
          doloremque saepe laudantium consectetur recusandae? Exercitationem,
          omnis. Culpa quaerat nobis saepe laborum quis error a molestias vero
          mollitia. Debitis, officia quidem. Sequi, quae officiis placeat modi
          reiciendis, distinctio eveniet accusamus, impedit eius beatae iusto.
        </p>
      </Story>
      <ContactSection display="flex">
        <ContactForm />
        <StaticImage src="../images/contact/dots.png" alt="dots" />
        <Info>
          <h3>Atole's Location</h3>
          <p>Located in the great city of New York</p>
          <h3>ATOLE’S BUSINESS EMAIL/ DIRECT CONTACT</h3>
          <a href="mailto:lena@atolemedia.com" target="_blank" rel="noreferrer">
            lena@atolemedia.com
          </a>
          <a
            href="mailto:Julian@atolemedia.com"
            target="_blank"
            rel="noreferrer"
          >
            julianv@atolemedia.com
          </a>
          <h3>HOURS OF AVAILABILITY</h3>
          <p>We will respond within 24 hours</p>
          <p className="text">
            Thank you for reaching out to us through the website. We cannot wait
            to show you everything we have to offer. A member of our team will
            follow up soon, but please take the opportunity to learn more about
            us here
          </p>
        </Info>
      </ContactSection>

      <Seo title="FAQ" />
    </Layout>
  )
}
export default FrequentlyAskedQuestions
