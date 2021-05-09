import styled from "styled-components"

export const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  h1,
  h2 {
    text-align: center;
    margin: 1.5rem 0;
  }
  p {
    margin: 1rem 0;
  }
  @media (max-width: 1024px) {
    width: 45%;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 512px) {
    width: 90%;
    margin: 2rem 0;
  }
`
