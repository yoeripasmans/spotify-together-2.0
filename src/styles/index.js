import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:400,600,700');

  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body {
      font-family: 'Open Sans', sans-serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      background-color: #000;
      color: #fff;
      -webkit-font-smoothing: antialiased;
  }

  main {
      max-width: 77rem;
      margin: 0 auto;
      padding: 0 1rem;
  }

  h1 {
      font-size: 2.5rem;
  }

  h3 {
      font-size: 1.7em;
      font-weight: 600;
  }

  input[type=search] {
      -webkit-appearance: none;
  }
`;
