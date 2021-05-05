import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  height: auto;
  margin: 0 auto;
  width: 33%;
  display: inline-flex;
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
  h1 {
    color: var(--orange);
    font-size: 3rem;
    text-align: center;
    margin: 1rem auto;
  }
  label {
    margin: 0.5rem auto;
    width: 70%;
    text-align: left;
    color: var(--yellow);
    border: none;
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
  }
  label textarea {
    width: 100%;
    background-color: var(--purple);
    color: var(--yellow);
    height: 10rem;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 15px;
    border: 2px solid var(--orange);
  }
  button {
    margin: 3rem auto;
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

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`

export const ContactForm = () => (
  <StyledForm
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <h1>CONTACT US</h1>
    <input type="hidden" name="form-name" value="contact" />

    <label>
      Name
      <input type="text" name="name" required="required" />
    </label>
    <label>
      E-mail
      <input type="email" name="email" required="required" />
    </label>
    <label>
      Message
      <textarea name="message" required="required" />
    </label>
    <button type="submit">Send!</button>
  </StyledForm>
)
