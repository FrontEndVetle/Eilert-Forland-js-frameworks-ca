import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../constants/Api';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameItem from './GameItem';
import Search from '../../ui/Search';
import { AiFillHeart } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { FaveContext, GamesContext } from '../GamesContext';

function GameList() {
	const [games, setGames] = useContext(GamesContext);
	const [fave, setFave] = useContext(FaveContext);

	const [filteredGames, setFilteredGames] = useState([]);

	useEffect(() => {
		setFilteredGames(games);
	}, [games]);

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

	//add game to favorite
	const toggleFav = (game) => {
		console.log(fave);
		const found = fave.some((el) => el.name === game.name);

		if (!found) {
			game.class = 'card__icon--favorite';
			setFave((prevFave) => [...prevFave, game]);
			console.log(game);
		}

		if (found) {
			const newArray = fave.filter((el) => el.name !== game.name);
			{
				game.class = 'card__icon';

				setFave(newArray);
			}
		}
	};
	return (
		<>
			<Search handleSearch={filterGames} />
			<Row>
				{filteredGames.map((game) => {
					const { id, name, background_image, rating, released } = game;
					if (game.class === undefined) {
						game.class = 'card__icon';
					}
					return (
						<Col sm={6} lg={3} key={id} className='d-flex '>
							<GameItem
								id={id}
								name={name}
								image={background_image}
								rating={rating}
								released={released}
								addFav={
									<Button
										className='card__btn'
										variant='danger'
										onClick={() => toggleFav(game)}>
										<AiFillHeart className={game.class} />
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
