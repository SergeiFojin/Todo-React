import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
    padding: 40px;
    background-color: whitesmoke;
  }
`;
