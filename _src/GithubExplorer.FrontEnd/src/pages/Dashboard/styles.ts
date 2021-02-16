/* eslint-disable prettier/prettier */
/* eslint-disable arrow-parens */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
	hasError: boolean;
}

// Template literals
export const Title = styled.h1`
	font-size: 4.8rem;
	color: #3a3a3a;
	max-width: 45rem;
	line-height: 5.6rem;

	margin-top: 8rem;
`;

// eslint-disable-next-line prettier/prettier
export const Form = styled.form<FormProps>`
	margin-top: 4rem;
	max-width: 70rem;

	display: flex;

	input {
		flex: 1;
		height: 7rem;
		padding: 0 2.4rem;
		border: 0;
		border-radius: 0.5rem 0 0 0.5rem;
		color: #a3a3a3;
		border: .2rem solid #fff;
		border-right: 0;

		${props => props.hasError && css`
				border-color: #c53030;
		`}

		&::placeholder {
			color: #a8a8b3;
		}
	}

	button {
		width: 21rem;
		height: 7rem;
		background: #04d361;
		border-radius: 0 0.5rem 0.5rem 0;
		border: 0;
		color: #fff;
		font-weight: bold;
		transition: background-color 0.2s;

		&:hover {
			background: ${shade(0.2, '#04d361')};
		}
	}
`;

export const Error = styled.span`
	display: block;
	color: #c53030;
	margin-top: 0.8rem;
`;

export const Repositories = styled.div`
	margin-top: 8rem;
	max-width: 70rem;

	a {
		background: #fff;
		border-radius: 0.5rem;
		width: 100%;
		padding: 2.4rem;
		text-decoration: none;

		display: flex;
		align-items: center;
		transition: transform 0.2s;

		&:not(:last-of-type) {
			margin-bottom: 2rem;
		}

		&:hover {
			transform: translateX(1rem);
		}

		img {
			width: 6.4rem;
			height: 6.4rem;
			border-radius: 50%;
		}

		div {
			margin: 0 1.6rem;
			flex: 1;
			strong {
				font-size: 2rem;
				color: #3d3d4d;
			}

			p {
				font-size: 1.8rem;
				color: #a8a8b3;
				margin-top: 0.4rem;
			}
		}

		svg {
			margin-left: auto;
			color: #cbcbd6;
		}
	}
`;
