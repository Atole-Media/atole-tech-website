import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { TwoColFlex } from "../TwoColFlex"
import { TwoColumnGrid } from "../twoColumnGrid"

const Wrapper = styled(Sections)`
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    color: var(--lightPurple);
  }
  h1 {
    font-size: 3rem;
  }
  p {
    text-align: left;
    margin: 1rem 0;
    width: 70%;
  }
`
const LittleGrid = styled(TwoColumnGrid)`
  max-width: 1200px;
`
const MiniFlex = styled(TwoColFlex)`
  width: 100%;
  padding: 0;
  margin: 0;
  ul {
    color: var(--orange);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
`
const Card = styled(NewCard)`
  width: 80%;
  .top {
    color: white;
  }
  .bottom {
    color: turquoise;
  }
`

export const WhyAtole = () => (
  <>
    {" "}
    <Wrapper className="why-us" display="flex">
      <h2>What is our process?</h2>
      <h1>Why us?</h1>
      <p>
        Atole Tech is a digital creative company offering e-commerce and designs
        for creative entrepreneurs to increase their digital presence and expand
        their businesses.
      </p>
      <p>
        {" "}
        We are here to bring your vision to life guiding you every step of the
        way to make sure your logo is memorable and speaks volumes about your
        brand.
      </p>
      <p>
        If you are  an ambitious, creative  business owner who is ready to
        elevate your business, attract high-end clients all while making what
        you dream of,  then you are in the right place
      </p>
    </Wrapper>
    <LittleGrid>
      <MiniFlex>
        <StaticImage
          src="../../images/home/neon cube.png"
          alt="neon cube"
          width={300}
        />
        <ul>
          <li>SECURITY</li>
          <li>INFORMATION</li>
        </ul>
      </MiniFlex>
      <MiniFlex>
        <StaticImage
          src="../../images/home/purple diamond.png"
          alt="diamond"
          width={275}
        />
        <ul>
          <li>SECURITY</li>
          <li>INFORMATION</li>
        </ul>
      </MiniFlex>
      <MiniFlex>
        <StaticImage
          src="../../images/home/orange L.png"
          alt="orange"
          width={265}
        />
        <ul>
          <li>SECURITY</li>
          <li>INFORMATION</li>
        </ul>
      </MiniFlex>
      <MiniFlex>
        <StaticImage
          src="../../images/home/Star.png"
          alt="neon cube"
          width={260}
        />
        <ul>
          <li>SECURITY</li>
          <li>INFORMATION</li>
        </ul>
      </MiniFlex>
    </LittleGrid>
    <LittleGrid>
      <Card>
        <p className="top">
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p className="bottom">
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>
      <Card>
        <p className="top">
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p className="bottom">
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>
      <Card>
        <p className="top">
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p className="bottom">
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>
      <Card>
        <p className="top">
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p className="bottom">
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>
    </LittleGrid>
  </>
)
