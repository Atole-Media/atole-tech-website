import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  border: ${({ border, background }) =>
    border || background ? "5px solid" : "none"};
  border-color: ${({ border, background }) => (border ? border : background)};
  border-radius: 30px;
  padding: 0.5rem 2rem;
  font-size: 1.75rem;
  text-transform: uppercase;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
`

export const LinkButton = ({
  children = "Read More",
  to,
  color = "var(--textColor)",
  border,
  background,
}) => (
  <Button to={to} color={color} border={border} background={background}>
    {children}
  </Button>
)
