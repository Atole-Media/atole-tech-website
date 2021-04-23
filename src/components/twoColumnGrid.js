import styled from "styled-components"

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: black;
  margin: 0 auto;
  gap: 2rem;
  background-color: var(--purple);
  @media (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`
