import React, { useState } from 'react';

const UseStateBasics = () => {
	//console.log(useState(1));
	// const value = useState('hello')[0];
	// const func = useState('hello')[1];

	// console.log(value)
	// console.log(func)

	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<h4>You Clicked {count} Times</h4>
			<button type='button' onClick={handleClick} className='btn'>
				Increase
			</button>
		</div>
	);
};
export default UseStateBasics;
