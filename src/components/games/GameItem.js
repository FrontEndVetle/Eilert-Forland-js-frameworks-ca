import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function GameItem({ id, name, image, rating, released, addFav }) {
	const history = useHistory();

	return (
		<Card bg='dark'>
			<Card.Img className='card__img' variant='top' src={image} />
			<Card.Body className='d-flex flex-column'>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					<b>Rating:</b> {rating}
					<br></br>
					<b>Release date:</b> {released}
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Row className='d-flex justify-content-center'>
					<Col>
						<Button
							className='card__btn'
							variant='light'
							block
							onClick={() => {
								history.push('game/' + id);
							}}>
							VIEW
						</Button>
					</Col>
					<Col>{addFav}</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
}

GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default GameItem;
