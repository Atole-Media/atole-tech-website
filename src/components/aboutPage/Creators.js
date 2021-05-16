import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { NewCard } from "../NewCard"
import { Sections } from "../sections"
import { TwoColFlex } from "../TwoColFlex"

const SectionWrapper = styled(Sections)`
  margin: 0 auto;
  width: 100%;
  h2 {
    color: var(--red);
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
  }
`
const Flex = styled(TwoColFlex)`
  .triangle {
    width: 50%;
  }

  @media (max-width: 512px) {
    &.wrap {
      flex-wrap: wrap;
    }
    &.reverse {
      flex-wrap: wrap-reverse;
    }
  }
`
const Card = styled(NewCard)`
  width: 60%;
  h2 {
    color: #f7cf7f;
  }
  @media (max-width: 512px) {
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
      <Card>
        <h2>Lena, the creative</h2>
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
        <h2>Julian, the techie</h2>
        <p>
          A creative in the most pure sense of the word. Lena is always finding
          the artistic side of everything. She believes that when we see a film
          we are transported into another universe, a universe of celluloid and
          metaphors. When she isn’t watching movies you can find her drawing,
          taking gorgeous photos of forests, or figuring out how to befriend
          penguins and Boston terriers.  
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
