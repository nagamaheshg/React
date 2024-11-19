import React, { useState } from 'react';

const MultipleInputs = () => {
	const [user, setUser] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        // console.log(e.target.name);
        setUser({...user, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // do something
        console.log(user);
    }
	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<h4>Multiple Inputs</h4>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						className='form-input'
						id='name'
						placeholder='Enter Name'
						value={user.name}
						onChange={handleChange}
                        name="name"
					/>
				</div>
				<div className='form-row'>
					<label htmlFor='email' className='form-label'>
						Email
					</label>
					<input
						type='email'
						className='form-input'
						id='email'
						value={user.email}
						placeholder='Enter email'
						onChange={handleChange}
                        name='email'
					/>
				</div>
				<div className='form-row'>
					<label htmlFor='email' className='form-label'>
						Password
					</label>
					<input
						type='password'
						className='form-input'
						id='password'
						value={user.password}
						placeholder='Enter Password'
						onChange={handleChange}
                        name='password'
					/>
				</div>
                <button type='submit' className='btn btn-lock'>Submit</button>
			</form>
		</>
	);
};

export default MultipleInputs;
