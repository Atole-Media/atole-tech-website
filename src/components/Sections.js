import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  background-color: var(--purple);
  max-width: 1386px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const Sections = ({ children }) => <Wrapper>{children}</Wrapper>
