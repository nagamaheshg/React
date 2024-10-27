import React, { useState } from 'react';
import { data } from '../../../data';

const useStateExample = () => {
	const [persons, setPerson] = useState(data);

	const clearAll = () => {
		setPerson([]);
	};
	const removePerson = (id) => {
		const personsList = persons.filter((person) => person.id !== id);
		setPerson(personsList);
	};
	return (
		<>
			<ul>
				{persons.map((person) => {
					return (
						<div key={person.id}>
							<li key={person.id}>{person.name}</li>
							<button type='button' className='btn' onClick={() => removePerson(person.id)}>
								Remove
							</button>
						</div>
					);
				})}
			</ul>
			<button type='button' className='btn' onClick={clearAll} style={{ margin: '2rem 0', padding: '12px' }}>
				Clear All
			</button>
		</>
	);
};
export default useStateExample;
