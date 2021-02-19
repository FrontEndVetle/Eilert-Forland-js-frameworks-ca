import React, { useContext } from 'react';
import Heading from '../layout/Heading';
import { Col, Container, Row } from 'react-bootstrap';
import { FaveContext } from '../GamesContext';
import GameItem from '../games/GameItem';
import Button from 'react-bootstrap/Button';
import { AiFillHeart } from 'react-icons/ai';

function Favorite() {
	//let favorite = JSON.parse(localStorage.getItem('favoriteList'));
	const [fave, setFave] = useContext(FaveContext);

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
		<Container className='content'>
			<Heading title='My Favorite Games'></Heading>
			<Row className='content d-flex justify-content-center'>
				{fave.map((game) => {
					const { name, id, background_image, rating, released } = game;
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
										<AiFillHeart className='card__icon--favorite' />
									</Button>
								}
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default Favorite;
