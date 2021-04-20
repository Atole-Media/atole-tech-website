import React from "react"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: black;
  margin: 0 auto;
  gap: 2rem;
  align-items: stretch;
  justify-items: center;
`

export const ServiceGrid = ({ children }) => (
  <Grid className="services-grid">{children}</Grid>
)
