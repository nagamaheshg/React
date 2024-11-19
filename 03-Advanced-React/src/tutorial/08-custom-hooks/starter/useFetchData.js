import { useState, useEffect } from 'react';

const useFetchData = (url) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setError] = useState(false);
	const [user, setUser] = useState(null);

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

	return { isLoading, isError, user };
};

export default useFetchData;
