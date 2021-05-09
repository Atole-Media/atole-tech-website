import React from "react"
import styled from "styled-components"
import { LinkButton } from "../linkButton"

const Wrapper = styled.div`
  margin: 8rem auto;
  text-align: center;
  width: 30vw;
  h1 {
    color: var(--orange);
    width: 100%;
    display: inline;
  }
`
const NewsBox = styled.div`
  margin: 0 auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  input {
    height: 2.5rem;
    color: var(--purple);
    border: none;
    width: 50%;
    margin-left: 1rem;
    font-size: 0.65rem;
  }
  input:focus {
    outline: none;
    text-decoration: underline;
    text-decoration-color: var(--neon);
  }
  input::placeholder {
    /* Chrome/Opera/Safari */
    color: var(--neon);
    text-transform: uppercase;
  }
`
const Button = styled(LinkButton)`
  margin: 1rem;
  font-size: 1rem;
`
export const Newsletter = () => (
  <Wrapper className="newsletter">
    <h1>Subscribe to our Newsletter!</h1>
    <NewsBox>
      <input
        type="email"
        name="email"
        id="newsletter"
        placeholder="Your Email Address Goes Here"
      />
      <Button background="var(--orange)">Subscribe</Button>
    </NewsBox>
  </Wrapper>
)
