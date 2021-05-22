import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  height: 80%;
  width: 33%;
  display: inline-flex;
  justify-content: space-evenly;
  flex-direction: column;
  border: 3px solid var(--orange);
  border-radius: 15px;
  /* font-family: ${({ theme }) => theme.font.text}; */
  font-size: 1.5rem;
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  h2 {
    color: var(--orange);
    font-size: 2rem;
    text-align: center;
    margin: 0 auto;
  }
  label {
    margin: 0 auto;
    width: 70%;
    text-align: left;
    color: var(--yellow);
    border: none;
    font-family: futura-pt, sans-serif;
    font-weight: 400;
  }
  label input {
    width: 100%;
    height: 3rem;
    background-color: var(--purple);
    color: var(--yellow);
    border-radius: 15px;
    border: 2px solid var(--orange);
    font-size: 2rem;
    padding: 1rem;
    font-family: futura-pt, sans-serif;
    font-weight: 400;
  }
  label textarea {
    width: 100%;
    background-color: var(--purple);
    color: var(--yellow);
    height: 10rem;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 15px;
    border: 2px solid var(--orange);
    font-family: futura-pt, sans-serif;
    font-weight: 400;
  }
  button {
    margin: 0 auto;
    padding: 1rem 0;
    background-color: var(--orange);
    border-radius: 10px;
    color: white;
    transition: 0.2s;
    font-size: 1.5rem;
    border: none;
    width: 50%;
    &:hover {
      box-shadow: 0 3px 6px var(--yellow), 0 3px 6px var(--yellow);
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    width: 40%;
    label {
      width: 90%;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 512px) {
    width: 100%;
  }
`

export const ContactForm = () => (
  <StyledForm
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <h2>CONTACT US</h2>
    <input type="hidden" name="form-name" value="contact" />

    <label>
      <input type="text" name="name" required="required" placeholder="Name" />
    </label>
    <label>
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Email"
      />
    </label>
    <label>
      <textarea name="message" required="required" placeholder="Message" />
    </label>
    <button type="submit">Send!</button>
  </StyledForm>
)
