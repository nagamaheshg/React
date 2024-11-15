import React, { useState } from 'react';

function MultiFieldForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		const newErrors = {};

		if (name.length < 3) newErrors.name = 'Name must be at least 3 characters long';
		if (!email.includes('@')) newErrors.email = 'Please enter a valid email';
		if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

		setErrors(newErrors);

		// If there are no errors, submit the form
		if (Object.keys(newErrors).length === 0) {
			alert(`Form submitted! Name: ${name}, Email: ${email}`);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type='text' value={name} onChange={(event) => setName(event.target.value)} />
			</label>
			{errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

			<label>
				Email:
				<input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
			</label>
			{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

			<label>
				Password:
				<input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
			</label>
			{errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

			<button type='submit'>Submit</button>
		</form>
	);
}

export default MultiFieldForm;
