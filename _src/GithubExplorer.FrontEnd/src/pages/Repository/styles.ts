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
			width: 12rem;
			height: 12rem;
			border-radius: 50%;
		}

		div {
			margin-left: 2.4rem;

			strong {
				font-size: 3.6rem;
				color: #3d3d4d;
			}

			p {
				font-size: 1.8rem;
				color: #737380;
				margin-top: 0.4rem;
			}
		}
	}
	ul {
		display: flex;
		list-style: none;
		margin-top: 4rem;

		li {
			&:not(:last-of-type) {
				margin-right: 8rem;
			}

			strong {
				display: block;
				font-size: 3.6rem;
				color: #3d3d4d;
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
	margin-top: 8rem;

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
