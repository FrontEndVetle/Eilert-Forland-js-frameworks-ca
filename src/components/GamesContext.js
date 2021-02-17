import React, { useState, useEffect, createContext } from 'react';
import { create } from 'yup/lib/array';
import { BASE_URL } from './constants/Api';

const GamesContext = createContext();

const GamesProvider = (props) => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		fetch(BASE_URL)
			.then((response) => response.json())
			//  .then(json => console.dir(json))
			.then((json) => {
				setGames(json.results);
			})
			.catch((error) => console.log(error));
	}, []);

	console.log(games);

	return (
		<GamesContext.Provider value={[games, setGames]}>
			{props.children}
		</GamesContext.Provider>
	);
};
export { GamesProvider, GamesContext };
