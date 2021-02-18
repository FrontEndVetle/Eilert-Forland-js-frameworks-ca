import React from 'react';
import Heading from '../layout/Heading';
import GameList from '../games/GamesList';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

function Home() {
	return (
		<>
			<Carousel>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100 carousel__img'
						src='https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
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
						src='https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
						alt='Second slide'
					/>
					<Carousel.Caption>
						<h2>Add to favorite</h2>
						<p>Add your favorite games to your "favorite" list</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img
						className='d-block w-100  carousel__img'
						src='https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
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
			<Container>
				<Heading title='Games'></Heading>
				<GameList />
			</Container>
		</>
	);
}

export default Home;
