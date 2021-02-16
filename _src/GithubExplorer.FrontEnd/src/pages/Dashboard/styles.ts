/* eslint-disable prettier/prettier */
/* eslint-disable arrow-parens */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
	hasError: boolean;
}

// Template literals
export const Title = styled.h1`
	font-size: 3rem;
	color: #3a3a3a;
	line-height: 3.6rem;
	margin-top: 8rem;

	@media (min-width: 768px) {
		font-size: 4.8rem;
		line-height: 5.6rem;
		max-width: 45rem;
	}
`;

// eslint-disable-next-line prettier/prettier
export const Form = styled.form<FormProps>`
	margin-top: 4rem;
	max-width: 70rem;

	display: flex;
	flex-wrap: wrap;

	@media (min-width: 768px) {
		flex-wrap: nowrap;
	}
	input {
		flex: 1;
		width: 100%;
		height: 7rem;
		padding: 0 2.4rem;
		border: 0;
		border-radius: 0.5rem 0 0 0.5rem;
		color: #a3a3a3;
		border: .2rem solid #fff;

		@media (min-width: 768px) {
			width: auto;
			border-right: 0;
		}

		${props => props.hasError && css`
				border-color: #c53030;
		`}

		&::placeholder {
			color: #a8a8b3;
		}
	}

	button {
		width: 100%;
		height: 7rem;
		background: #04d361;
		border-radius: 0.5rem;
		border: 0;
		color: #fff;
		font-weight: bold;
		transition: background-color 0.2s;

		@media (min-width: 768px) {
			max-width: 21rem;
			border-radius: 0 0.5rem 0.5rem 0;
		}

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
		padding: 1rem;
		text-decoration: none;

		@media (min-width: 768px) {
			padding: 2.4rem;
		}

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
			width: 0;
			height: 0;
			border-radius: 50%;

			@media (min-width: 768px) {
				width: 6.4rem;
				height: 6.4rem;
			}
		}

		div {
			margin: 0 1.6rem;
			flex: 1;
			strong {
				font-size: 1.6rem;
				color: #3d3d4d;

				@media (min-width: 768px) {
					font-size: 2rem;
				}
			}

			p {
				font-size: 1.4rem;
				color: #a8a8b3;
				margin-top: 0.4rem;

				@media (min-width: 768px) {
					font-size: 1.8rem;
				}
			}
		}

		svg {
			margin-left: auto;
			color: #cbcbd6;
		}
	}
`;
