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
  font-weight: 600;

  display: ${({ display }) => (display === "none" ? "none" : "inline")};
  margin: 1rem;
  font-size: 1rem;
  transition: 0.2s all ease-out;
  &:hover {
    ${({ hover }) =>
      hover ? `box-shadow: 0 14px 28px ${hover}, 0 10px 10px ${hover};` : null}
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 512px) {
    font-size: 0.75rem;
    padding: 0.25rem 1rem;
  }
`

export const LinkButton = ({
  children = "Read More",
  to,
  color = "white",
  border,
  background,
  display,
  className,
  hover,
}) => (
  <Button
    to={to}
    color={color}
    border={border}
    background={background}
    display={display}
    className={className}
    hover={hover}
  >
    {children}
  </Button>
)
