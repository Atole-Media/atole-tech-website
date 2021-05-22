import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { TwoColFlex } from "../TwoColFlex"

const Wrapper = styled.div`
  h2 {
    text-align: center;
    color: var(--red);
  }
  .image {
    width: 30%;
  }
  @media (max-width: 768px) {
    h2 {
      text-align: center;
      margin: 0;
    }
    .image {
      width: 80%;
    }
  }
  @media (max-width: 512px) {
    margin: 0 auto;
    padding: 2rem;
    .image {
      width: 100%;
    }
  }
`
const ImageRight = styled(TwoColFlex)`
  h3 {
    border-bottom: 7px solid var(--orange);
    padding-bottom: 2rem;
    text-transform: uppercase;
    text-align: left;
    margin-right: auto;
  }
  p {
    text-align: left;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
  @media (max-width: 512px) {
  }
`
const ImageLeft = styled(TwoColFlex)`
  h3 {
    border-bottom: 7px solid var(--orange);
    padding-bottom: 2rem;
    text-transform: uppercase;
    text-align: left;
    margin-left: auto;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 512px) {
  }
`
const Card = styled(NewCard)`
  width: 40%;
  text-align: right;
  .top {
    color: white;
  }
  .bottom {
    color: var(--orange);
  }
  .price {
    color: var(--neon);
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 512px) {
    width: 100%;
    padding: 0;
  }
`

export const WhatWeHave = () => (
  <Wrapper size="wide">
    <h2>WHAT YOU CAN FIND IN ATOLE TECH...</h2>
    <ImageRight>
      <Card>
        <h3>Branding</h3>
        <p className="top">
          Take your brand to the next level with our custom packages! We will
          create Logos, printables and graphics that match your business's style
          perfectly. We research your business and in conjunction with the Atole
          Flavor Quiz we create a Brand that exemplifies who you are and puts
          your products at the forefront.
        </p>
        <p className="bottom">
          {" "}
          We also provide pre-made logos and assets in our store if all you need
          is something simple.
        </p>
        <div className="price">STARTING $300</div>
      </Card>
      <StaticImage
        src="../../images/home/nikolai-chernichenko-YIaB-KH8oE0-unsplash@3x.png"
        alt="play button"
        className="image"
      />
    </ImageRight>
    <ImageLeft>
      <StaticImage
        src="../../images/home/jesse-k-Jx-qCTHKvN4-unsplash@3x.png"
        alt="laptop"
        className="image"
      />
      <Card>
        <h3>Design</h3>
        <p className="top">
          We design your site from scratch, from the wireframe, all the way to
          the final composition. We strive to make your site stand out from all
          the other sites on the internet. From there we can either build your
          site in a jiffy or you can take this amazing design to your own
          developers and have them be amazed at your new site's look!
        </p>
        <p className="bottom">
          {" "}
          We also provide pre-made templates in our store. Perfect if you want
          some quicker or already found the perfect layout! Sometimes we read
          minds.
        </p>{" "}
        <div className="price">STARTING $300</div>
      </Card>
    </ImageLeft>
    <ImageRight>
      <Card>
        <h3>Development</h3>
        <p className="top">
          We provide high quality, custom websites that allow you to increase
          your web presence. Our service provides high quality SEO, E-commerce
          and blogging using the latest technologies for a blazing fast,
          extremely secure and modern site.
        </p>
        <p className="bottom">
          {" "}
          For the techies, we use Gatsby, Shopify, and Ghost as our standard
          stack. However since the JAMStack is our forte', we can leverage and
          backend or ecommerce solution that you are already used to and
          integrate it to your new extremely fast Gatsby site.
        </p>{" "}
        <div className="price">STARTING $300</div>
      </Card>
      <StaticImage
        src="../../images/home/alexander-popov-3InMDrsuYrk-unsplash@3x.png"
        alt="rhombus"
        className="image"
      />
    </ImageRight>
    <ImageLeft>
      <StaticImage
        src="../../images/home/startae-team-7tXA8xwe4W4-unsplash@3x.png"
        alt="whiteboard"
        className="image"
      />
      <Card>
        <h3>Video / Photo</h3>
        <p className="top">
          No site or brand is truly complete without actual pictures or videos
          of your business. Stock photos can only take you so far, and to create
          a truly unique experience that will resonate with your customers, we
          provide Photography and videography services of your local business to
          showcase in your blog, YouTube or site!
        </p>
        <p className="bottom">
          {" "}
          That being said sometimes stock photos/videos are needed to get the
          ball rolling. In those situations, we got you covered too! Visit our
          store for more info!
        </p>{" "}
        <div className="price">STARTING $300</div>
      </Card>
    </ImageLeft>
  </Wrapper>
)
