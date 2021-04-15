import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  border: 5px solid;
  border-color: ${({ border }) => border || "var(--olive)"};
  border-radius: 30px;
  padding: 0.5rem 2rem;
  font-size: 1.75rem;
  text-transform: uppercase;
  background-color: ${({ color }) => color};
  color: var(--textColor);
`

export const LinkButton = ({ children, to, color, border }) => (
  <Button to={to} color={color} border={border}>
    {children}
  </Button>
)
