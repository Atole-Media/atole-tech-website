import styled from "styled-components"

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80vh;
  background-color: black;
  margin: 2rem auto;
  gap: 2rem;
  background-color: var(--purple);
  /* justify-items: center;
  align-items: center; */
  @media (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`
