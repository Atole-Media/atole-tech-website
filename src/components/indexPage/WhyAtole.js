import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { TwoColFlex } from "../TwoColFlex"
import { TwoColumnGrid } from "../twoColumnGrid"

// import neonCube from "../../images/home/neon cube.svg"
// import purpleDiamond from "../../images/home/purple diamond.svg"
// import orangeL from "../../images/home/orange L.svg"
// import star from "../../images/home/Star.svg"
import { StaticImage } from "gatsby-plugin-image"

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
  @media (max-width: 512px) {
    p {
      width: 100%;
    }
  }
`
const LittleGrid = styled(TwoColumnGrid)`
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
`
const MiniFlex = styled(TwoColFlex)`
  width: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
 
  ul {
    color: var(--orange);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
  .cube{
    width:30%;
  }
`
const Card = styled(NewCard)`
  width: 60%;
  margin: 0;
  padding: 0;
  .top {
    color: white;
  }
  .bottom {
    color: turquoise;
  }
  @media (max-width: 768px) {
    width: 100%;
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
        {/* <img src={neonCube} alt="neon cube" /> */}
        <StaticImage
          src="../../images/home/neon cube@3x.png"
          alt="neon cube"
          className="cube"
        />
        <ul>
          <li>SECURITY</li>
          <li>INFORMATION</li>
        </ul>
      </MiniFlex>
      <MiniFlex>
        
        {/* <img src={purpleDiamond} alt="purple diamond" /> */}
        <StaticImage
          src="../../images/home/purple diamond@3x.png"
          alt="purple diamond"
          className="cube"
        />
        <ul>
          <li>SECURITY</li>
          <li>INFORMATION</li>
        </ul>
      </MiniFlex>
      <MiniFlex>
        {/* <img src={orangeL} alt="orange L" /> */}
        <StaticImage
          src="../../images/home/orange L@3x.png"
          alt="orange L"
          className="cube"
        />
        <ul>
          <li>SECURITY</li>
          <li>INFORMATION</li>
        </ul>
      </MiniFlex>
      <MiniFlex>
        {/* <img src={star} alt="star" /> */}
        <StaticImage
          src="../../images/home/Star@3x.png"
          alt="yellow star"
          className="cube"
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
