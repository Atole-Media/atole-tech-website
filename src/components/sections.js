import styled from "styled-components"

export const Sections = styled.section`
  background-color: var(--purple);
  max-width: ${({ size }) => (size === "wide" ? "100%" : "1386px")};
  margin: 5rem auto;
  padding: ${({ size }) => (size === "wide" ? "0" : "0 2rem")};
  /* min-hei ght: 30vh; */
  display: ${({ display }) => (display === "flex" ? "flex" : "inline-block")};
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    /* width: 100%; */
    h2 {
      font-size: 2.4rem;
    }
    p {
      padding: 0;
      width: 100%;
    }
  }
  @media (max-width: 512px) {
    width: 90%;
    margin: 2rem auto;
    padding: 0;
  }
`
