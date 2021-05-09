import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Sections } from "../sections"

const SectionWrapper = styled(Sections)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: var(--orange);
    position: absolute;
    font-size: 2.5rem;
    top: 20%;
  }
  p {
    color: white;
    position: absolute;
    top: 45%;
    width: 90%;
    display: block;
  }
`

export const NextLevel = () => (
  <SectionWrapper className="next-level">
    <StaticImage src="../../images/contact/phone.png" alt="phone" />
    <h1>ARE YOU READY TO TAKE YOUR BRAND TO THE NEXT LEVEL?</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit amet et
      quis autem reprehenderit voluptate consequuntur nisi ipsum repudiandae
      pariatur, dolore distinctio, laudantium deleniti, ipsam tempora? Deleniti
      tenetur iure quidem ea tempore officia consectetur ratione doloribus quae.
      Est illo quaerat dignissimos inventore nemo modi dolorem quia saepe
      suscipit placeat. Facere recusandae deserunt necessitatibus perspiciatis
      voluptatem reprehenderit, libero ex temporibus, tempora, dignissimos iure
      distinctio. Exercitationem ipsa quas eveniet pariatur sed consequatur
      delectus, reiciendis rem ullam, ex tempora corporis impedit voluptatum
      deserunt nobis natus non, a sit libero excepturi. Provident, voluptas
      placeat. Cum officiis cumque optio veniam exercitationem eligendi earum
      aliquam dolorum ut adipisci natus aperiam consequatur excepturi libero
    </p>
  </SectionWrapper>
)
