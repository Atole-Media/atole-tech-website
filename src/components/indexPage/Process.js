import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { TwoColFlex } from "../TwoColFlex"

const ProcessWrapper = styled(Sections)`
  h2,
  h3,
  p {
    text-align: center;
  }

`
const Steps = styled(TwoColFlex)`
  height: 170vh;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    width: 100%;
    padding: 0;
  }
`
const Card = styled(NewCard)`
  width: 30%;
  p {
    text-align: left;
  }
  &.left {
    align-self: flex-start;
  }
  &.center {
    align-self: center;
  }
  &.right {
    align-self: flex-end;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 512px) {
    p {
      text-align: justify;
    }
  }
`

export const Process = () => (
  <ProcessWrapper>
    <h2>What is our Process?</h2>
    <p>How does it work?</p>
    <Steps>
      <Card className="left">
        <StaticImage
          src="../../images/home/number1.png"
          alt="number 1"
          height={300}
        />
        <h3>Meet & Strategy</h3>
        <p>
          It all starts with our first meeting  to get to know you and your
          goals so we can find out how to get you there.   Together we will
          review your project's scope, giving you a timeline, logistics and
          pricing and once we are all on the same page, we proceed to the next
          step. We will be contacting you via Zoom at your convenience to get to
          know you and your brand.
        </p>
      </Card>{" "}
      <Card className="center">
        <StaticImage
          src="../../images/home/number2.png"
          alt="number 2"
          height={300}
        />
        <h3>Design & Development</h3>

        <p>
          {" "}
          This is our favorite part of the journey. We get to work and whip up
          some initial prototypes based on our initial meeting.  These include:
          A digital wire-frame, to help visually showcase website layout
          concepts before designing and some logo pre-compositions.   Once
          approved, we add the last little details and we deliver the products
          during 1-2 weeks.  You’ll have 3 revisions.
        </p>
      </Card>{" "}
      <Card className="right">
        <StaticImage
          src="../../images/home/number3.png"
          alt="number 3"
          height={300}
        />
        <h3>Launching & Training</h3>
        <p>
          {" "}
          This is the final step, we make sure you keep updating your website 
          We will  provide you a video training, explaining  how to set up a web
          builder, hosting, and  the rest of the tech terms you may not know.
          Don't worry, we got you.
        </p>
      </Card>{" "}
    </Steps>
  </ProcessWrapper>
)
