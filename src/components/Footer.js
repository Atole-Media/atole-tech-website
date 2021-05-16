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
  height: 15vh;
  h3 {
    text-align: center;
    display: inline;
    width: 20%;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 512px) {
    h3 {
      font-size: 1rem;
    }
  }
`
const Links = styled(Link)`
  color: var(--orange);
  text-align: center;

  &:visited {
    color: var(--orange);
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`
const Social = styled.span`
  display: grid;
  width: 33%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  justify-items: center;
  align-items: center;
  text-align: center;

  @media (max-width: 512px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
const Grid = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 33%;
  height: 100%;
  justify-items: center;
  align-items: center;
  text-align: center;
  @media (max-width: 512px) {
    grid-template-columns: 1fr 1fr;
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
