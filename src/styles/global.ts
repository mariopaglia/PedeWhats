import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border: 0;
		outline: none;
    }

  html, body {
		width: 100%;
		height: 100%;
    color: ${(props) => props.theme.colors.text};
		font: 400 16px Roboto, sans-serif;
  }

	input:focus {
  	border: 0;
  }

  a {
    color: ${(props) => props.theme.colors.text};
  }
  a:visited {
    color: ${(props) => props.theme.colors.text};
  }
`;
