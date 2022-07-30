import { createGlobalStyle } from 'styled-components';

import GithubBg from '~/assets/svg/github-bg.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${GithubBg})  ${({ theme }) => theme.colors['gray-100']};
    background-repeat: no-repeat;
    background-position: top center;
    background-position-x: 60%;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  input {
    outline: none;
  }

  body,
input,
textarea,
select,
a,
button {
  font: 400 1rem 'Roboto', sans-serif;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
