import React, { useState } from 'react';

const UseStateGotchaUseCase = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setTimeout(() => {
			setCount((currentState) => currentState + 1);
		}, 3000);
	};
	return (
		<>
			<h1>{count}</h1>
			<button type='button' className='btn' onClick={handleClick}>
				Increase
			</button>
		</>
	);
};
export default UseStateGotchaUseCase;
