import React, { useState } from 'react';

function MyForm() {
	const [formData, setFormData] = useState({
		name: '',
		gender: '',
		hobbies: [],
		country: '',
		message: '',
		age: 18,
		favoriteColor: '#000000',
		birthDate: '',
	});

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;

		if (type === 'checkbox') {
			setFormData((prevData) => ({
				...prevData,
				hobbies: checked ? [...prevData.hobbies, value] : prevData.hobbies.filter((hobby) => hobby !== value),
			}));
		} else {
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		
		if (!formData.name) {
			alert('Name is required');
			return;
		}
		if (!formData.gender) {
			alert('Please select your gender');
			return;
		}
		if (formData.age < 18) {
			alert('Age must be at least 18');
			return;
		}
		if (formData.message.length < 10) {
			alert('Message should be at least 10 characters long');
			return;
		}

		alert(`Form submitted with data: ${JSON.stringify(formData)}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			
			<label>
				Name:
				<input type='text' name='name' value={formData.name} onChange={handleChange} />
			</label>

	
			<div>
				Gender:
				<label>
					<input
						type='radio'
						name='gender'
						value='Male'
						checked={formData.gender === 'Male'}
						onChange={handleChange}
					/>
					Male
				</label>
				<label>
					<input
						type='radio'
						name='gender'
						value='Female'
						checked={formData.gender === 'Female'}
						onChange={handleChange}
					/>
					Female
				</label>
			</div>

		
			<div>
				Hobbies:
				<label>
					<input
						type='checkbox'
						name='hobbies'
						value='Reading'
						checked={formData.hobbies.includes('Reading')}
						onChange={handleChange}
					/>
					Reading
				</label>
				<label>
					<input
						type='checkbox'
						name='hobbies'
						value='Sports'
						checked={formData.hobbies.includes('Sports')}
						onChange={handleChange}
					/>
					Sports
				</label>
			</div>

			
			<label>
				Country:
				<select name='country' value={formData.country} onChange={handleChange}>
					<option value=''>Select Country</option>
					<option value='India'>India</option>
					<option value='USA'>USA</option>
					<option value='UK'>UK</option>
				</select>
			</label>

			
			<label>
				Message:
				<textarea name='message' value={formData.message} onChange={handleChange}></textarea>
			</label>

			
			<label>
				Age: {formData.age}
				<input type='range' name='age' min='10' max='100' value={formData.age} onChange={handleChange} />
			</label>

			
			<label>
				Favorite Color:
				<input type='color' name='favoriteColor' value={formData.favoriteColor} onChange={handleChange} />
			</label>

			
			<label>
				Birth Date:
				<input type='date' name='birthDate' value={formData.birthDate} onChange={handleChange} />
			</label>

			<button type='submit'>Submit</button>
		</form>
	);
}

export default MyForm;
