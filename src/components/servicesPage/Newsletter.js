import React from "react"
import styled from "styled-components"
import { LinkButton } from "../linkButton"

const Wrapper = styled.div`
  margin: 8rem auto;
  text-align: center;
  width: 50vw;
  padding: 3rem;
  background-color: var(--lightPurple);
  border-radius: 30px;
  height: auto;

  h2 {
    color: var(--orange);
    width: 100%;
    margin-top: 0;
  }
  p {
    margin-bottom: 2rem;
  }
  @media (max-width: 1024px) {
    width: 60vw;
    padding: 2.5rem;
  }
  @media (max-width: 768px) {
    width: 80vw;
    padding: 2rem;
  }
  @media (max-width: 512px) {
    min-height: 40vh;
  }
`
const NewsBox = styled.div`
  margin: 0 auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 4rem;
  border-radius: 15px;
  border: none;

  input {
    height: 2.5rem;
    color: var(--purple);
    border: none;
    border-radius: 15px;
    width: 50%;
    margin-left: 1rem;
    font-size: 1.5 rem;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    /* Chrome/Opera/Safari */
    color: var(--orange);
    text-transform: uppercase;
    text-align: center;
  }
  @media (max-width: 1024px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width:90%;
  }

  @media (max-width: 512px) {
    width: 100%;
    flex-wrap: wrap;
    height: 3rem;
    input {
      width: 100%;
      margin: 0;
    }
  }
`
const Button = styled(LinkButton)`
  margin: 1rem;
  font-size: 1rem;
  
  @media (max-width: 512px) {
    margin: 1rem auto;
  }
`
export const Newsletter = () => (
  <Wrapper className="newsletter">
    <h2>Subscribe to our Newsletter!</h2>
    <p>Stay up to date with our latest products!</p>
    <NewsBox>
      <input
        type="email"
        name="email"
        id="newsletter"
        placeholder="Your Email Here"
      />
      <Button background="var(--orange)" className="desktop">
        Subscribe
      </Button>
    </NewsBox>
  </Wrapper>
)
