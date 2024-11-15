import React, { useState, useEffect } from 'react';

const MultipleReturnsFetchDataSetup = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [user, setUser] = useState(null);
	const url = 'https://api.github.com/users/QuincyLarson';
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					setError(true);
					setIsLoading(false);
					return;
				}
				const data = await response.json();
				console.log(data);
				setUser(data);
			} catch (err) {
				setError(true);
				console.error('Error:', err);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}
	if (error) {
		return <h3>Error fetching data</h3>;
	}
	const { avatar_url, name, bio, company } = user;
	return (
		<div>
			<img src={avatar_url} style={{ width: '150px', borderRadius: '25px' }} alt={name} />
			<h2>{name}</h2>
			<h4>Works at: {company}</h4>
			<p>{bio}</p>
		</div>
	);
};

export default MultipleReturnsFetchDataSetup;
