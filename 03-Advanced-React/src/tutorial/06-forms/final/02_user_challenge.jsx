import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState(data);

    const handleDelete = (id) => {
        setUser(user.filter(user => user.id!==id))
    }
	const handleSubmit = (e) => {
		e.preventDefault();
        if(!name) return;
        const fakeId = Date.now();
        console.log(fakeId)
        const newUser = {id: fakeId, name}
        setUser([...user, newUser]);
        setName('')
		console.log(name);
	};
	return (
		<>
			<form onSubmit={handleSubmit} className='form'>
				<>
					<h4>Add User</h4>
					<div className='form-row'>
						<label htmlFor='name' className='form-label'>
							Name
						</label>
						<input
							type='text'
							className='form-input'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<button type='submit' className='btn btn-lock'>
						Submit
					</button>
				</>

				{user.map((user) => (
					<div key={user.id}>
						<h2>{user.name}</h2>
						<button type='button' onClick={() => handleDelete(user.id)}>
							Remove
						</button>
					</div>
				))}
			</form>
		</>
	);
};

export default UserChallenge;
