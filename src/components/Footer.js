import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--orange);
  height: 10vh;
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  h3 {
    text-align: center;
    display: inline;
    font-weight: 400;
    font-size: 1rem;
    width: 15%;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 512px) {
    h3 {
      font-size: 1rem;
      width: 50%;
    }
  }
`
const Links = styled(Link)`
  color: var(--orange);
  text-align: center;
  font-family: futura-pt, sans-serif;
  font-weight: 400;

  &:visited {
    color: var(--orange);
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`
const Social = styled.span`
  display: grid;
  width: 15%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  justify-items: center;
  align-items: center;
  text-align: center;

  @media (max-width: 512px) {
    width: 50%;
  }
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
const Grid = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  justify-items: center;
  align-items: center;
  text-align: center;
  @media (max-width: 512px) {
    display: none;
  }
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
