import React, { useState, useEffect } from 'react';

const MultipleReturnBasics = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	if (isLoading) {
		return <h2>Loading ...</h2>;
	}
	return (
		<div>
			<h2>Multiple Return Basics</h2>
		</div>
	);
};

export default MultipleReturnBasics;
