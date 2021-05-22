import styled from "styled-components"

export const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
    margin: 2rem 0;
  }
  @media (max-width: 512px) {
    width: 90%;
  }
`
