import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/Api';
import { Container, Row, Col } from 'react-bootstrap/';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import GenrePlatform from './GenrePlatform';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function GameDetail() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);

	let { id } = useParams();

	const url = BASE_URL + '/' + id;
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setDetail(json))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' />;
	}

	return (
		<Container fluid className='bg-dark'>
			<Container className='content'>
				<h1> {detail.name} </h1>

				<Row className='detail'>
					<Col lg={6} className='detail__img'>
						<div className='row justify-content-center'>
							<Image
								className='detail__img'
								src={detail.background_image}
								roundedCircle
							/>
						</div>
						<Col>
							<div className=' row justify-content-center'>
								<a href={detail.website}>
									<Button variant='danger' className='detail__btn'>
										{' '}
										LINK TO WEBSITE{' '}
									</Button>
								</a>
							</div>
						</Col>
					</Col>
					<Col lg={6}>
						<div
							className='detail__text'
							dangerouslySetInnerHTML={{ __html: detail.description }}
						/>
						;
					</Col>
				</Row>

				<Col className=' mb-5'>
					<GenrePlatform
						key={id}
						platforms={detail.platforms}
						genres={detail.genres}
					/>
				</Col>
			</Container>
		</Container>
	);
}

export default GameDetail;
