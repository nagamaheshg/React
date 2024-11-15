import React, { useState } from 'react';

function ValidatedForm() {
	const [name, setName] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (name.length < 3) {
			setError('Name must be at least 3 characters long');
		} else {
			setError('');
			alert(`Form submitted! Name: ${name}`);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type='text' value={name} onChange={(event) => setName(event.target.value)} />
			</label>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<button type='submit'>Submit</button>
		</form>
	);
}

export default ValidatedForm;
