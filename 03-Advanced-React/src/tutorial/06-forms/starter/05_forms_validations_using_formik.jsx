import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email format').required('Email is required'),
		gender: Yup.string().required('Gender is required'),
		hobbies: Yup.array().min(1, 'Please select at least one hobby'),
		country: Yup.string().required('Country is required'),
		message: Yup.string().required('Message is required'),
	});

	const initialValues = {
		name: '',
		email: '',
		gender: '',
		hobbies: [],
		country: '',
		message: '',
	};

	const onSubmit = (values) => {
		console.log('Form data:', values);
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{(formik) => (
				<Form>
                    
					<div>
						<label>Name:</label>
						<Field type='text' name='name' />
						<ErrorMessage name='name' component='div' className='error' />
					</div>

					<div>
						<label>Email:</label>
						<Field type='email' name='email' />
						<ErrorMessage name='email' component='div' className='error' />
					</div>

					<div>
						<label>Gender:</label>
						<label>
							<Field type='radio' name='gender' value='male' />
							Male
						</label>
						<label>
							<Field type='radio' name='gender' value='female' />
							Female
						</label>
						<ErrorMessage name='gender' component='div' className='error' />
					</div>

					<div>
						<label>Hobbies:</label>
						<label>
							<Field type='checkbox' name='hobbies' value='reading' />
							Reading
						</label>
						<label>
							<Field type='checkbox' name='hobbies' value='traveling' />
							Traveling
						</label>
						<label>
							<Field type='checkbox' name='hobbies' value='gaming' />
							Gaming
						</label>
						<ErrorMessage name='hobbies' component='div' className='error' />
					</div>

					<div>
						<label>Country:</label>
						<Field as='select' name='country'>
							<option value=''>Select your country</option>
							<option value='USA'>USA</option>
							<option value='Canada'>Canada</option>
							<option value='UK'>UK</option>
						</Field>
						<ErrorMessage name='country' component='div' className='error' />
					</div>

					<div>
						<label>Message:</label>
						<Field as='textarea' name='message' />
						<ErrorMessage name='message' component='div' className='error' />
					</div>

					<button type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default MyForm;
