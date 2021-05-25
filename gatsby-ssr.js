import React from "react"
import { GlobalStyle } from "./src/components/GlobalStyles"

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
