import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { Col, Row } from 'react-bootstrap';

function GenrePlatform({ platforms, genres }) {
	const genreList = genres.map((genre, index) => {
		return (
			<Badge pill variant='success' key={index}>
				{genre.name}
			</Badge>
		);
	});
	const platformList = platforms.map((type, i) => {
		return (
			<Badge pill variant='info' key={i}>
				{type.platform.name}
			</Badge>
		);
	});

	return (
		<Row className='d-flex justify-content-around text-center'>
			<Col xs={12} md={6}>
				<h3 className='detail__heading'> Genres </h3> <> {genreList} </>
			</Col>
			<Col xs={12} md={6}>
				<h3 className='detail__heading'> Platforms </h3> <> {platformList} </>
			</Col>
		</Row>
	);
}

GenrePlatform.propTypes = {
	genres: PropTypes.string.isRequired,
	platforms: PropTypes.string.isRequired,
};

export default GenrePlatform;
