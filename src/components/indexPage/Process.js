import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { TwoColFlex } from "../TwoColFlex"

const ProcessWrapper = styled(Sections)`
  h1,
  h2 {
    text-align: center;
  }
  h2 {
    color: var(--lightPurple);
  }
  h1 {
    font-size: 2rem;
  }
`
const Steps = styled(TwoColFlex)`
  height: 150vh;
`
const Card = styled(NewCard)`
  width: 25%;
  &.left {
    align-self: flex-start;
  }
  &.center {
    align-self: center;
  }
  &.right {
    align-self: flex-end;
  }
`

export const Process = () => (
  <ProcessWrapper>
    <h2>What is our Process?</h2>
    <h1>How does it work?</h1>
    <Steps>
      <Card className="left">
        <StaticImage
          src="../../images/home/number1.png"
          alt="number 1"
          height={300}
        />
        <p>
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p>
          {" "}
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>{" "}
      <Card className="center">
        <StaticImage
          src="../../images/home/number2.png"
          alt="number 2"
          height={300}
        />
        <p>
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p>
          {" "}
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>{" "}
      <Card className="right">
        <StaticImage
          src="../../images/home/number3.png"
          alt="number 3"
          height={300}
        />
        <p>
          If you are  an ambitious, creative  business owner who is ready to
          elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
        <p>
          {" "}
          Elevate your business, attract high-end clients all while making what
          you dream of,  then you are in the right place.
        </p>
      </Card>{" "}
    </Steps>
  </ProcessWrapper>
)
