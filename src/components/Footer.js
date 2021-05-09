import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--orange);
  h3 {
    text-align: center;
    display: inline;
    width: 30%;
    font-size: 2rem;
  }
`
const Links = styled(Link)`
  margin: 1rem;
  color: var(--orange);
  text-align: center;

  &:visited {
    color: var(--orange);
  }
`
const Social = styled.span`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
`
const Grid = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 30%;
`
export const Footer = () => (
  <Wrapper className="footer">
    <Grid>
      <Links to="/questionsPage">Contact</Links>
      <Links>Privacy</Links>
      <Links>Legal</Links>
      <Links>About</Links>
      <Links>FAQ</Links>
      <Links>Terms of Use</Links>
    </Grid>
    <h3>Atole Tech &#169; {new Date().getFullYear()} </h3>
    <Social>
      <Icon icon={faLinkedin} />
      <Icon icon={faFacebookSquare} />
      <Icon icon={faInstagram} />
    </Social>
  </Wrapper>
)
