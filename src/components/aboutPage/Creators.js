import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { TwoColFlex } from "../TwoColFlex"

const SectionWrapper = styled(Sections)`
  width: 100%;
  h2 {
    color: var(--red);
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
  }
`
const Flex = styled(TwoColFlex)`
  justify-content: space-between;
  .triangle {
    width: 45%;
  }

  @media (max-width: 768px) {
    &.wrap {
      flex-wrap: wrap;
    }
    &.reverse {
      flex-wrap: wrap-reverse;
      justify-content: flex-end;
    }
  }
`
const Card = styled(NewCard)`
  width: 45%;
  h3 {
    color: #f7cf7f;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Creators = () => (
  <SectionWrapper>
    <h2>Who makes the atole?</h2>
    <Flex className="wrap">
      <StaticImage
        src="../../images/about/2.png"
        alt="left-triangle"
        className="triangle"
      />
      <Card className="right">
        <h3>Lena, the creative</h3>
        <p>
          A creative in the most pure sense of the word. Lena is always finding
          the artistic side of everything. She believes that when we see a film
          we are transported into another universe, a universe of celluloid and
          metaphors. When she isn’t watching movies you can find her drawing,
          taking gorgeous photos of forests, or figuring out how to befriend
          penguins and Boston terriers.  
        </p>
      </Card>{" "}
    </Flex>
    <Flex className="reverse">
      <Card>
        <h3>Julian, the techie</h3>
        <p>
          Loves watching movies, playing videogames and eating tacos. Has
          encyclopedic knowledge of movie quotes, even movies he hasn’t seen. Is
          constantly building or learning something new, like making kombucha,
          or making a robot, or drawing penguins.
        </p>
      </Card>{" "}
      <StaticImage
        src="../../images/about/2l.png"
        alt="left-triangle"
        className="triangle"
      />
    </Flex>
  </SectionWrapper>
)
