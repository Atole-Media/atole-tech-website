import styled from "styled-components"
import { Sections } from "../components/sections"

export const Story = styled(Sections)`
  padding: 0;

  h2 {
    text-align: center;
    color: var(--orange);
    font-size: 2.5rem;
  }
  p {
    color: var(--red);
    margin-top: 2rem;
    font-size: 1.5rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    p {
      width: 90%;
      padding: 0 1.5rem;
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
  }
  @media (max-width: 512px) {
    p {
      font-size: 1rem;
      line-height: 1.5rem;
      width: 100%;
    }
  }
`
