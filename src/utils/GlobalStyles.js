import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  ${"" /* @import url("https://use.typekit.net/asr8zfy.css"); */}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  li{
    list-style:none;
    font-style: normal; 
    
    }
  a{
    text-decoration:none;
    font-weight: 400;
    font-style: normal;

  }
  
  body {
    --niceBlue: #2766A9;
    --lightBlue:#BEB8F0;
    --purple: #1A042B;
    --lightPurple:#8E40A1;
    --pink: #F4A4BA;
    --olive: #92941A;
    --textColor: #E2E3ED;
    --tablet: 768px;
    --yellow: #E8CB51;
    --orange: #FFAB03;
    --red: #D06273;
    --neon: #29CCCB;
    background-color: #1A042B;
    animation: fadeInAnimation ease-in 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}

  }
  p {
    line-height: 1.5em;
    font-size: 24px;
    color: white;
    font-weight: 400;
    font-style: normal;
  }
  h1 {
    color: var(--orange);
    font-weight: 700;
    font-style: normal;
    font-size: 6rem;
  }

  h2 {
    font-weight: 500;
    font-size: 4rem;
    color: var(--red);
    margin: 1.25rem 0;
    font-style: normal;
  }
  h3,
  h4,
  h5 {
    color: var(--neon);
    margin: 1.25rem 0;
    font-weight: 500;
    font-style: normal;
    font-size: 2.5rem;
  }
  h1,h2,h3,h4,h5 {
    font-family: itc-benguiat, serif;
  }
  p,li,a {
    font-family: futura-pt, sans-serif;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
    h3,
    h4,
    h5 {
    }
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 512px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`
