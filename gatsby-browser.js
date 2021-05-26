import React from "react"
import { GlobalStyle } from "./src/utils/GlobalStyles"

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
