import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  border: ${({ border, background }) =>
    border || background ? "5px solid" : "none"};
  border-color: ${({ border, background }) => (border ? border : background)};
  border-radius: 10px;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  text-align: center;
  display: ${({ display }) => (display === "none" ? "none" : "inline")};
  margin: 1rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 512px) {
    font-size: 1rem;
  }
`

export const LinkButton = ({
  children = "Read More",
  to,
  color = "white",
  border,
  background,
  display,
  className
}) => (
  <Button
    to={to}
    color={color}
    border={border}
    background={background}
    display={display}
    className={className}
  >
    {children}
  </Button>
)
