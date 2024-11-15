import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
	const [user, setUser] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
            try{
            const response = await fetch(url);
			const user = await response.json();
			setUser(user);
            }
            catch(error){
                console.error('Error fetching data:', error);
            }
			
		};
		fetchData();
	}, []);

	return (
		<>
			{user.map((newUser) => (
				<div>
					<img src={newUser.avatar_url} alt={newUser.login} />
					<h3>
						<a href={newUser.url} target='_blank'>
							profile
						</a>
					</h3>
					<h2>{newUser.login}</h2>
				</div>
			))}
		</>
	);
};

export default FetchData;
