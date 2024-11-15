import React, { useState } from 'react';

const UserChallenge = () => {
	const [user, setUser] = useState(null);

	const login = () => {
		setUser({ name: 'naga mahesh gatta' });
	};
	const logout = () => {
		setUser(null);
	};

	return (
		<>
			<h1>User Challenge</h1>
			{user ? (
				<div>
					<h4>Hello There, {user.name}</h4>
					<button onClick={logout} className='btn'>
						Logout
					</button>
				</div>
			) : (
				<div>
					<h4>Please Login</h4>
					<button onClick={login} className='btn'>
						Login
					</button>
				</div>
			)}
		</>
	);
};

export default UserChallenge;
