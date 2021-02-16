import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function GameItem({ id, name, image, rating, released }) {
	const favoriteList = [];

	//add game to favorite
	const addToFavorite = () => {
		const favorite = {
			name: name,
			image: image,
			id: id,
			released: released,
			rating: rating,
		};
		console.log(favorite);

		favoriteList.push(favorite);

		//let savedFavorite = JSON.parse(localStorage.getItem(id));
		localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
	};
	return (
		<Card>
			<Card.Img variant='top' src={image} />
			<Card.Body className='d-flex flex-column'>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					<b>Rating:</b> {rating}
					<br></br>
					<b>Release date:</b> {released}
				</Card.Text>
				<div className='mt-auto'>
					<Button
						type='button'
						onClick={addToFavorite}
						variant='secondary'
						block>
						Add to favorite
					</Button>
					<Link to={'game/' + id}>
						<Button variant='secondary' block>
							View
						</Button>
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
}

GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default GameItem;
