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
  height: 170vh;

  @media (max-width: 512px) {
    flex-wrap: wrap;
    height: auto;
  }
`
const Card = styled(NewCard)`
  width: 30%;
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
    width: 30%;
    padding: 0;
  }
  @media (max-width: 512px) {
    width: 90%;
    /* margin: 0 auto; */
    padding: 0;
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
        <h2>MEET & STRATEGY</h2>
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
        <h2>DESIGN & DEVELOPMENT</h2>

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
        <h2>LAUNCHING & TRAINING</h2>
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
