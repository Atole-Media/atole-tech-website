import styled from "styled-components"
import { Sections } from "../components/sections"

export const Story = styled(Sections)`
  h2 {
    text-align: center;
    color: var(--orange);
  }
  p {
    color: var(--red);
    padding: 0 5rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
