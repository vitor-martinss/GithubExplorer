import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		background: url(${githubBackground}) no-repeat 70% top #f0f0f5;
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font: 1.6rem Roboto, sans-serif;
	}

	#root {
		max-width: 96rem;
		margin: 0 auto;
		padding: 4rem 2rem;
	}
`;
