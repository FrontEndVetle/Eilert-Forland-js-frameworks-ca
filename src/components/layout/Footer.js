import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineLink } from 'react-icons/ai';

function Footer() {
	return (
		<Container fluid className=' p-0'>
			<Row className='footer d-flex justify-content-around'>
				<Col xs={12} md={3}>
					<h4 className='title'>SearchGames</h4>
					<hr className='footer__hr' />

					<p>
						Search games lets you search for your favorite games, check out
						information about them and add them to your favorites list.
					</p>
				</Col>
				<Col xs={12} md={3}>
					<h5 className='title'>Links</h5>
					<hr className='footer__hr' />

					<ul>
						<li className='list-unstyled'>
							<a href='/'>Home</a>
							<AiOutlineLink />
						</li>
						<li className='list-unstyled'>
							<a href='/contact'>Contact</a>
							<AiOutlineLink />
						</li>
						<li className='list-unstyled'>
							<a href='/favorite'>Favorite</a>
							<AiOutlineLink />
						</li>
					</ul>
				</Col>
				<Col xs={12} md={3}>
					<h5 className='title'>Social media</h5>
					<hr className='footer__hr' />
					<ul>
						<li className='list-unstyled'>
							<a href='https://www.facebook.com/'>Facebook</a>
							<AiOutlineLink />
						</li>
						<li className='list-unstyled'>
							<a href='https://www.instagram.com/'>Instagram</a>
							<AiOutlineLink />
						</li>
						<li className='list-unstyled'>
							<a href='https://twitter.com/'>Twitter</a>
							<AiOutlineLink />
						</li>
					</ul>
				</Col>
			</Row>
			<Container fluid className='footer__c '>
				<Row className='d-flex justify-content-center'>
					<Col className='text-center'>
						<small>
							&copy; {new Date().getFullYear()} Copyright:{' '}
							<a className='footer__c ' href='https://github.com/FrontEndVetle'>
								Eilert Vetle Førland{' '}
							</a>
						</small>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Footer;
