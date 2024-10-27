import React, { useState } from 'react';

const useStateGotcha = () => {
	const [count, setCount] = useState(0);

	const increaseCount = () => {
		setCount(count + 1);
		console.log(count);
	};

	return (
		<>
			<h2>{count}</h2>
			<button type='button' className='btn' onClick={increaseCount}>
				Increase
			</button>
		</>
	);
};

export default useStateGotcha;
