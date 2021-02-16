import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #a8a8b3;
		transition: color 0.2s;

		&:hover {
			color: #666;
		}

		svg {
			margin-right: 0.4rem;
		}
	}
`;
export const RepositoryInfo = styled.section`
	margin-top: 0.8rem;

	header {
		display: flex;
		align-items: center;

		img {
			width: 0;
			height: 0;
			border-radius: 50%;

			@media (min-width: 768px) {
				width: 12rem;
				height: 12rem;
			}
		}

		div {
			@media (min-width: 768px) {
				margin-left: 2.4rem;
			}

			strong {
				font-size: 2.8rem;
				color: #3d3d4d;

				@media (min-width: 768px) {
					font-size: 3.6rem;
				}
			}

			p {
				font-size: 1.4rem;
				color: #737380;
				margin-top: 0.4rem;

				@media (min-width: 768px) {
					font-size: 1.8rem;
				}
			}
		}
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin-top: 4rem;

		@media (min-width: 768px) {
			flex-wrap: nowrap;
		}

		li {
			&:not(:last-of-type) {
				margin-right: 8rem;
			}

			strong {
				display: block;
				font-size: 2.8rem;
				color: #3d3d4d;

				@media (min-width: 768px) {
					font-size: 3.6rem;
				}
			}

			span {
				display: block;
				margin-top: 0.4rem;
				color: #6c6c80;
			}
		}
	}
`;

export const Issues = styled.div`
	margin-top: 5rem;

	@media (min-width: 768px) {
		margin-top: 8rem;
	}

	a {
		background: #fff;
		border-radius: 0.5rem;
		width: 100%;
		padding: 1.5rem;
		text-decoration: none;

		display: flex;
		align-items: center;
		transition: transform 0.2s;

		@media (min-width: 768px) {
			padding: 2.4rem;
		}

		&:not(:last-of-type) {
			margin-bottom: 2rem;
		}

		&:hover {
			transform: translateX(1rem);
		}

		div {
			margin: 0 1.6rem;
			flex: 1;
			overflow: auto;

			strong {
				font-size: 1.6rem;
				color: #3d3d4d;

				@media (min-width: 768px) {
					font-size: 2rem;
				}
			}

			p {
				font-size: 1.2rem;
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
