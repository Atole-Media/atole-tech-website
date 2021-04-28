import styled from "styled-components"

export const Sections = styled.section`
  background-color: var(--purple);
  max-width: ${({ size }) => (size === "wide" ? "100%" : "1386px")};
  margin: 0 auto;
  padding: ${({ size }) => (size === "wide" ? "0" : "0 2rem")};
  min-height: 50vh;
  display: ${({ display }) => (display === "flex" ? "flex" : "block")};
  justify-content: space-evenly;
  position: relative;
`
