import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

function GameItem({ id, name, image, rating, released, addFav }) {
	return (
		<Card bg='secondary'>
			<Card.Img className='card__img' variant='top' src={image} />
			<Card.Body className='d-flex flex-column'>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					<b>Rating:</b> {rating}
					<br></br>
					<b>Release date:</b> {released}
				</Card.Text>
				<Row>
					<Col>
						<Link to={'game/' + id}>
							<Button className='card__btn' variant='dark' block>
								View
							</Button>
						</Link>
					</Col>
					<Col>{addFav}</Col>
				</Row>
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
