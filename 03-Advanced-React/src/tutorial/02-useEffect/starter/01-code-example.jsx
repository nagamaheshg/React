import React, { useEffect, useState } from 'react';

const CodeExample = () => {
	const [value, setValue] = useState(0);
	const sayHello = () => {
		console.log('Hello There');
        // be careful, you will  have infinite loop if we update state value inside the of the function
        setValue(value+1)
	};

	sayHello();
	return (
		<div>
			<h1>Value: {value}</h1>
			<button type='button' className='btn' onClick={() => setValue(value + 1)}>
				Increment
			</button>
		</div>
	);
};
export default CodeExample;
