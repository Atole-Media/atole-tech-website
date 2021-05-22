import React from "react"
import styled from "styled-components"
import { Sections } from "../sections"
import { NewCard } from "../NewCard"
import { TwoColumnGrid } from "../twoColumnGrid"

const Wrapper = styled(Sections)`
  margin: 2rem auto;
  color: var(--orange);

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-top: 10rem;
  }
  h2 {
    color: var(--orange);
  }
`
const Grid = styled(TwoColumnGrid)`
  gap: 0;
`
const ServiceCard = styled(NewCard)`
  justify-content: flex-start;
  padding-top: 0;
  padding-bottom: 0;
  p {
    margin: 0 auto;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`

export const Questions = () => (
  <Wrapper>
    <h1> Frequently Asked Questions</h1>

    <Grid>
      <ServiceCard>
        <h2>Templates vs Jamstack</h2>
        <p>
          Templates are great for anyone who loves doing things by themselves,
          the lone wolves. Templates  are for perfect if you already have some
          techy knowledge of how to edit digital content or program a site. If
          your are an Instagram guru, editing the information of  templates
          won't be difficult for you. Basically, our Atole templates are 
          pre-established designs that any business lacking time to make a
          design from scratch, and just want to add their business information. 
          This is the best option if you are starting with a low budget, but
          still you want to have an online presence.
        </p>
        <p>
          The next step would be hiring us to build your business from scratch
          and make your company unique in this competitive digital world. This
          is the best choice for people who wants to make their brand more
          recognizable and be able to scale their business.
        </p>
        <p>
          Jamstack is the technology ensemble of frameworks, softwares,
          libraries and more to make your web faster, more secure, and easier to
          scale. Jamstack websites do not have limits and you can create
          anything allowing creativity exploration. Our team have the ability,
          technical knowledge and skills to work on any aspect of a particular
          program or technology.
        </p>
      </ServiceCard>
      <ServiceCard>
        <h2>Pricing and refund policies</h2>
        <p>
          Our pricing varies according to  your project.  We give three packages
          options: Starting from: $1000- $6000.00.  You can have more
          information in the HIRE page. 
        </p>
        <p>
          If you have no design or tech background , or simply do not have the
          time and just want to start your business without worrying about
          anything, we provide  the ultimate package. We will maintain the
          digital side of your business by a monthly or yearly fee. Starting
          from $xxxxx. per year. Contact us for more information.
        </p>
        <p>
          Keep in mind that designing and developing  a website is a commitment 
          that  takes a lot of time, energy and effort that we cannot get back.
          For that reason, we do not provide any refunds, However, we provide  3
          revisions in each stage of the process to make sure everything is
          perfectt.  We guarantee you to deliver your projects exactly as you
          envision them.{" "}
        </p>
      </ServiceCard>
      <ServiceCard>
        <h2>Payment process</h2>
        <p>
          Please note that we are on a 50/50 payment plan means that all
          services agreed upon will require 50% deposit upfront before we start
          to work on your unique needs, and the reminder of the payment (
          including any additional charges) to be made just before you receive
          the final designs.
        </p>{" "}
        <p>
          Payment transactions will be through online card payments or bank
          transfers.
        </p>
      </ServiceCard>{" "}
      <ServiceCard>
        <h2>What is our stack?</h2>
        <p>
          Our stack  is very dense. Atole uses multiple layers of technology to
          make any project attainable. When you hire someone for an specific
          project. for complete site build from the ground up. React.JS, Gatsby,
          Ghost and Shopify, and much more are some of the tools Atole Tech uses
          for larger enterprise sites needing a larger and faster site.
        </p>
        <p>
          If you are more interested in DIY websites, Atole Tech has  Webflow &
          SquareSpace templates in our  store , in which you can use and start
          launching your business right away.
        </p>
      </ServiceCard>
      <ServiceCard>
        <h2>Delivery Details</h2>
        <p>
          Our services delivery varies according to your needs.  Heavy projects,
          such as the creation of your brand, the development and launching of
          your website, takes an estimated  2 - 4 weeks from design finalization
          to delivery.  Depending on your needs, the number and size of the
          pages on your website.  The delivery will take less  or more days
          during that timeline. Rush delivery is available for a fee in
          additional Add-ons.
        </p>
        <p>
          When the project is ready we will provide you a video tutorial,
          explaining step by step how to maintain your website and how to add
          your products.  In case you have  further question, our Discord
          account is always open to our loyal customers for answering any
          questions or if you just want to chat!{" "}
        </p>
      </ServiceCard>
      <ServiceCard>
        <h2>Project Process</h2>
        <p>
          To get started, we will meet via Zoom to get a better idea of what
          you’re looking for and discuss the logistics of our services. After
          that we  will ask  you to complete our  Atole Design & Branding 
          Questionnaires, ( this step gives us a sense of what is your brand
          personality, values and mission.  The more info you provide the
          better!)
        </p>
        <p>
          {" "}
          We’ll share your responses with a designer on our team who will take
          the initial step of creating a design according to the direction
          you’ve provided. After you approve our designs, we proceed to the
          development of your website. This stage will take approximately 2
          weeks to deliver. Our last step is delivering all the goodies directly
          to you. We will have our final Zoom meeting to explain the maintenance
          of your website,  answer all your questions and celebrate a sweet,
          delicious atole with you to celebrate  your new journey as an official
          entrepreneur!
        </p>
      </ServiceCard>
    </Grid>
  </Wrapper>
)
