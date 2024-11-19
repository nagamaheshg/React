import { useState, useEffect, useRef } from 'react';

const UseRefExample = () => {
	const [count, setCount] = useState(0);
	const refContainer = useRef(null);
	const isMounted = useRef(false);

	console.log(refContainer);

	// useEffect(() => {
	// 	console.log(refContainer);
	// });

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
        console.log('re-render');
	}, [count]);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h4>UseRef Hook</h4>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						name
					</label>
					<input type='text' className='form-input' id='name' ref={refContainer} placeholder='Enter Name' />
				</div>
				<button type='submit' className='btn btnlock'>
					Submit
				</button>
			</form>
			<div>
				<h2>Count: {count}</h2>
				<button onClick={() => setCount(count + 1)}>Increment</button>
			</div>
		</>
	);
};

export default UseRefExample;
