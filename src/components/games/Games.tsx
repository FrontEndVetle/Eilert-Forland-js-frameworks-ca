import React from 'react';
import Heading from '../layout/Heading';
import GameList from './GamesList';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

function Games() {
	return (
		<>
			<Carousel>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100 carousel__img'
						src='../images/gamer.jpg'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h2>Search Games</h2>
						<p>The games website lets you search for you favorite games.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100  carousel__img'
						src='../images/keyboard.jpg'
						alt='Second slide'
					/>
					<Carousel.Caption>
						<h2>Add favorites</h2>
						<p>Add your favorite games to your "favorite" list</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100  carousel__img'
						src='../images/controller.jpg'
						alt='Third slide'
					/>
					<Carousel.Caption>
						<h2>Game information</h2>
						<p>
							View which platforms the games are on and what genres they are.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Container className='content'>
				<Heading title='Games'></Heading>
				<GameList />
			</Container>
		</>
	);
}

export default Games;
