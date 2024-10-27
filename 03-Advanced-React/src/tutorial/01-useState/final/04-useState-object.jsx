import React, { useState } from 'react';
import { data } from '../../../data';

const useStateObjectExample = () => {
	
    const [person, setPerson] = useState({
        name: 'Mahesh',
        age: 24,
        hobby: 'read books'
    })

	const updatePersonDetails = () => {
		//setPerson({name: 'john', age: 28, hobby: 'Scream at the computer'});
        //setPerson('shakeAndBake'); app will not break because it not an object
        //setPerson({name: 'Naga Mahesh Gatta'});
        setPerson({ ...person, name: 'Naga Mahesh Gatta' });

	};

	return (
		<>
			<h2>{person.name}</h2>
			<h3>{person.age}</h3>
			<h4>{person.hobby}</h4>
			<button type='button' onClick={updatePersonDetails} className='btn'>
				Update Person
			</button>
		</>
	);
};

export default useStateObjectExample;
