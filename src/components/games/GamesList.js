import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../constants/Api';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameItem from './GameItem';
import Search from './Search';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { GamesContext } from '../GamesContext';

function GameList() {
	const [games, setGames] = useContext(GamesContext);
	const [filteredGames, setFilteredGames] = useState([]);
	//	const [games, setGames] = useState([]);
	//	const [filteredGames, setFilteredGames] = useState([]);

	/*useEffect(() => {
		fetch(BASE_URL)
			.then((response) => response.json())
			//  .then(json => console.dir(json))
			.then((json) => {
				setGames(json.results);
				setFilteredGames(json.results);
			})
			.catch((error) => console.log(error));
	}, []);*/

	const filterGames = function (e) {
		const searchValue = e.target.value.toLowerCase();
		const filteredArray = games.filter(function (char) {
			const lowerCaseName = char.name.toLowerCase();

			if (lowerCaseName.includes(searchValue)) {
				return true;
			}
			return false;
		});

		setFilteredGames(filteredArray);
	};

	const favoriteList = [];

	//add game to favorite
	const toggleFav = (game) => {
		console.log(game);

		favoriteList.push(game);

		//let savedFavorite = JSON.parse(localStorage.getItem(id));
		localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
	};
	console.log(games);
	return (
		<>
			<Search handleSearch={filterGames} />
			<Row>
				{filteredGames.map((game) => {
					const { id, name, background_image, rating, released } = game;
					return (
						<Col sm={6} lg={3} key={id} className='d-flex '>
							<GameItem
								id={id}
								name={name}
								image={background_image}
								rating={rating}
								released={released}
								addFav={
									<Button variant='danger' onClick={() => toggleFav(game)}>
										<AiFillHeart className='card__icon' />
									</Button>
								}
							/>
						</Col>
					);
				})}
			</Row>
		</>
	);
}

export default GameList;
