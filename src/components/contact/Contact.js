import React from 'react';
import ContactForm from './ContactForm';
import Heading from './../layout/Heading';
import { Container, Col, Row } from 'react-bootstrap';

export function Contact() {
	return (
		<Container className='content'>
			<Heading title='Contact'></Heading>
			<Row className='d-flex justify-content-center'>
				<Col md={6}>
					<ContactForm />
				</Col>
			</Row>
		</Container>
	);
}

export default Contact;
