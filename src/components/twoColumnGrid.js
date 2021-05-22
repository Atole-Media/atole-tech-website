import styled from "styled-components"

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: black;
  margin: 2rem auto;
  gap: 2rem;
  background-color: var(--purple);
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
