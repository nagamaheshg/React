import React, { useEffect, useState } from 'react';

const MultipleEffects = () => {
	const [value, setValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);

	useEffect(() => {
		console.log('Hello from first useEffect');
	}, [value]);
	useEffect(() => {
		console.log('Hello from Second useEffect');
	}, [secondValue]);

	return (
		<div>
			<h1>Value: {value}</h1>
			<button type='button' className='btn' onClick={() => setValue(value + 1)}>
				Value
			</button>
			<h1>Second Value: {secondValue}</h1>
			<button type='button' className='btn' onClick={() => setSecondValue(secondValue + 1)}>
				Second Value
			</button>
		</div>
	);
};
export default MultipleEffects;
 