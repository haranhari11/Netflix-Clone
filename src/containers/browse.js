import React, { useState, useEffect, useContext } from 'react';
import { Header, Loading, Row } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import requests from '../api/requests';
import axios from '../api/axios';

export function BrowseContainer() {
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);

	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.lenght > n ? str.substr(0, n - 1) + '...' : str;
	}

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

			<Header
				src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
				bg={true}
			>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
					</Header.Group>
					<Header.Group>
						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName}</Header.TextLink>
								</Header.Group>
								<Header.Group>
									<Header.TextLink onClick={() => firebase.auth().signOut()}>
										Sign out
									</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>

				<Header.Feature>
					<Header.FeatureCallOut>
						{movie?.title || movie?.name || movie?.original_name}
					</Header.FeatureCallOut>
					<Header.Group>
						<Header.PlayButton>Play</Header.PlayButton>
						<Header.PlayButton>My List</Header.PlayButton>
					</Header.Group>
					<Header.Text>{truncate(movie?.overview, 450)}</Header.Text>
				</Header.Feature>
				<Header.FadeBottom />
			</Header>
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>

			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	);
}
