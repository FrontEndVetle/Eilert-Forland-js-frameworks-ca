import React from 'react';
import FavoriteList from './FavoriteList';
import Heading from '../layout/Heading';
import { Container } from 'react-bootstrap';

function Favorite() {
	return (
		<Container className='content'>
			<Heading title='My Favorite Games'></Heading>
			<FavoriteList />
		</Container>
	);
}

export default Favorite;
