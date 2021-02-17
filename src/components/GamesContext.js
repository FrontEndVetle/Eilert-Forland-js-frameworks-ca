import React, { useState, useEffect, createContext } from 'react';
import { BASE_URL } from './constants/Api';
import Spinner from 'react-bootstrap/Spinner';

const GamesContext = createContext();

const GamesProvider = (props) => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(BASE_URL)
			.then((response) => response.json())
			//  .then(json => console.dir(json))
			.then((json) => {
				setGames(json.results);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner animation='border' className='spinner' variant='danger' />;
	}
	console.log(games);

	return (
		<GamesContext.Provider value={[games, setGames]}>
			{props.children}
		</GamesContext.Provider>
	);
};
export { GamesProvider, GamesContext };
