'use server';

import React from 'react';
import { AdminType } from '../../types';
import Formular, { FormularRegisterUser } from './user.formular';
import { AdminIcon } from '../../components/components';
import { AdminForm } from '../../components/form';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { redirect } from 'next/navigation';


export async function RegisterUser(admin: AdminType) {



	return (
		<>

			<h1 className='mb-3'>
				<AdminIcon name="user" size={48} className='me-3' />
				Register User
			</h1>

			<hr />
			<p className='mb-5'>
				Welcome to EVA GALLERY. Please enter your email to register an account.
			</p>

			<AdminForm method="POST" type="JSON" endpoint="/admin/user/register" admin={{ modul: "user", action: "register" }} >
				<FormularRegisterUser />
				<Row className='justify-content-center'>
					<Col xs={2}>
					</Col>
					<Col xs={4}>
						<Button variant="primary" type="submit">
							Register
							<FontAwesomeIcon icon={faArrowRight} fixedWidth className='ms-2' />
						</Button>
					</Col>
				</Row>
			</AdminForm >
		</>


	);
}

export default RegisterUser;