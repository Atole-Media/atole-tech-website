import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: black;
`

export const Sections = ({ children }) => <Wrapper>{children}</Wrapper>
