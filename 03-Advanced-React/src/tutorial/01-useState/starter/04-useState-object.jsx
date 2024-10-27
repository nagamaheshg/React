import React, { useState } from 'react';
import { data } from '../../../data';

const useStateObjectExample = () => {
	const [name, setName] = useState('Naga Mahesh Gatta');
	const [age, setAge] = useState(31);
	const [hobby, setHobby] = useState('Reading Books');

	const updatePersonDetails = () => {
		setName('Mahesh');
		setAge('32');
		setHobby('Watching Movies');
	};

	return (
		<>
			<h2>{name}</h2>
			<h3>{age}</h3>
			<h4>{hobby}</h4>
			<button type='button' onClick={updatePersonDetails} className='btn'>
				Update Person
			</button>
		</>
	);
};

export default useStateObjectExample;
