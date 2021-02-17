import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
	return (
		<Container fluid className=' p-0'>
			<Row className='footer d-flex justify-content-around'>
				<Col xs={12} md={4}>
					<h5 className='title'>Footer Content</h5>
					<p>
						Here you can use rows and columns here to organize your footer
						content.
					</p>
				</Col>
				<Col xs={12} md={3}>
					<h5 className='title'>Links</h5>
					<ul>
						<li className='list-unstyled'>
							<a href='#!'>Link 1</a>
						</li>
						<li className='list-unstyled'>
							<a href='#!'>Link 2</a>
						</li>
						<li className='list-unstyled'>
							<a href='#!'>Link 3</a>
						</li>
						<li className='list-unstyled'>
							<a href='#!'>Link 4</a>
						</li>
					</ul>
				</Col>
				<Col xs={12} md={3}>
					<h5 className='title'>Links</h5>
					<ul>
						<li className='list-unstyled'>
							<a href='#!'>Link 1</a>
						</li>
						<li className='list-unstyled'>
							<a href='#!'>Link 2</a>
						</li>
						<li className='list-unstyled'>
							<a href='#!'>Link 3</a>
						</li>
						<li className='list-unstyled'>
							<a href='#!'>Link 4</a>
						</li>
					</ul>
				</Col>
			</Row>
			<Container fluid className='footer__c '>
				<Row className='d-flex justify-content-center'>
					<Col className='text-center'>
						<small>
							&copy; {new Date().getFullYear()} Copyright:{' '}
							<a href='https://github.com/FrontEndVetle'>
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
