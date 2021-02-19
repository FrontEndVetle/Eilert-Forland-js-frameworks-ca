import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';

const schema = yup.object().shape({
	firstName: yup
		.string()
		.required('Please write your first name')
		.min(2, 'First Name must have minimum 2 letters'),

	lastName: yup
		.string()
		.required('Please write your last name')
		.min(2, 'Last name must have minimum 2 letters'),

	textArea: yup
		.string()
		.required('Please enter your message')
		.min(10, 'Message must be atleast 10 characters'),

	eMail: yup.string().required('Please write your Email').email(),
});

function ContactForm() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log('data', data);
		Swal.fire('Message sent!', 'We will reply within 48 hours!', 'success');
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<h3 className='validated'>The form has been sent. Thank you</h3>
			<Form.Group>
				<Form.Label>First name</Form.Label>
				<Form.Control
					name='firstName'
					placeholder='Enter your first name'
					ref={register}
					isInvalid={errors.name}
				/>
				<Form.Control.Feedback type='invalid'>
					{errors.name}
				</Form.Control.Feedback>

				{errors.firstName && <p>{errors.firstName.message}</p>}
			</Form.Group>

			<Form.Group>
				<Form.Label>Last name</Form.Label>
				<Form.Control
					name='lastName'
					placeholder='Enter your last name'
					ref={register}
					isInvalid={!!errors.name}
				/>
				{errors.lastName && <p>{errors.lastName.message}</p>}
			</Form.Group>

			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control
					name='eMail'
					placeholder='Enter your Email'
					ref={register}
				/>
				{errors.eMail && <p>{errors.eMail.message}</p>}
			</Form.Group>

			<Form.Group>
				<Form.Label>Send us a message</Form.Label>
				<Form.Control
					name='textArea'
					as='textarea'
					placeholder='Enter your message'
					rows={3}
					ref={register}
				/>
				{errors.textArea && <p>{errors.textArea.message}</p>}
			</Form.Group>

			<Button variant='danger' type='submit'>
				Send
			</Button>
		</Form>
	);
}

export default ContactForm;
