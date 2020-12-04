import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	height: 600px;
	object-fit: contain;
	background: url(${({ src }) =>
			src ? `${src}` : '../images/misc/home-bg.jpg'})
		center center / cover no-repeat;

	@media (min-width: 1100px) {
		${({ dontShowOnSmallViewPort }) =>
			dontShowOnSmallViewPort && `background: none;`}
		height: 730px;
	}
`;

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	height: 35px;
	padding: 18px 0;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;

export const FadeBottom = styled.div`
	height: 10.8rem;
	background-image: linear-gradient(
		180deg,
		transparent,
		rgba(37, 37, 37, 0.61),
		#111
	);
`;
export const Link = styled.p`
	color: #fff;
	text-decoration: none;
	margin-right: 30px;
	font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
	cursor: pointer;

	&:hover {
		font-weight: bold;
	}

	&:last-of-type {
		margin-right: 0;
	}
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
`;

export const ButtonLink = styled(ReachRouterLink)`
	display: block;
	background-color: #e50914;
	width: 84px;
	height: fit-content;
	color: white;
	border: 0;
	font-size: 15px;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;
	box-sizing: border-box;

	&:hover {
		background: #f40612;
	}
`;

export const Picture = styled.button`
	background: url(${({ src }) => src});
	background-size: contain;
	border: 0;
	width: 35px;
	height: 35px;
	cursor: pointer;
`;

export const Dropdown = styled.div`
	display: none;
	position: absolute;
	background-color: black;
	padding: 10px;
	width: 120px;
	top: 32px;
	right: 3px;

	${Group}:last-of-type ${Link} {
		cursor: pointer;
	}

	${Group} {
		margin-bottom: 10px;

		&:last-of-type {
			margin-bottom: 0;
		}

		${Link}, ${Picture} {
			cursor: default;
		}
	}

	button {
		margin-right: 10px;
	}

	p {
		font-size: 15px;
		margin-bottom: 0;
		margin-top: 0;
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	position: relative;

	button {
		cursor: pointer;
	}

	&:hover > ${Dropdown} {
		display: flex;
		flex-direction: column;
	}
`;

export const Feature = styled(Container)`
	margin-top: 100px;
	padding: 100px 0 251px 0;
	flex-direction: column;
	align-items: normal;

	@media screen and (max-width: 1100px) {
		margin-top: 0;
		padding: 100px 0 221px 0;
	}
`;

export const FeatureCallOut = styled.h2`
	color: white;
	font-size: 3rem;
	padding-bottom: 0.5rem;
	line-height: normal;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	margin: 0;
`;

export const Text = styled.p`
	color: white;
	width: 45rem;
	max-width: 380px;
	height: 80px;
	padding-top: 1rem;
	font-size: 18px;
	text-align: justify;
	line-height: normal;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Logo = styled.img`
	height: 32px;
	width: 108px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 40px;
		width: 150px;
	}
`;

export const PlayButton = styled.button`
	box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
	background-color: rgba(51, 51, 51, 0.5);
	color: #fff;
	outline: none;
	border: none;
	padding: 10px 20px;
	border-radius: 0.2vw;
	max-width: 130px;
	font-weight: bold;
	font-size: 20px;
	margin-top: 1.5rem;
	margin-right: 1rem;
	cursor: pointer;
	transition: background-color 0.5s ease;

	&:hover {
		background-color: #e6e6e6;
		color: #000;
	}

	@media (max-width: 1100px) {
		font-size: 18px;
		max-width: 110px;
	}
`;
