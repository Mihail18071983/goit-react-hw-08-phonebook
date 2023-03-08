import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  font-style: normal;
}

img {
  max-width: 100%;
  display: block;
  height: auto;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
