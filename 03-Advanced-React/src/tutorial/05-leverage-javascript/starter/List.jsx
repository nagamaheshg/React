import { Person } from './person';
import React from 'react';
import { people } from '../../../data';
const List = () => {
	return (
		<div>
			{people.map((person) => (
				<Person key={person.id} {...person} />
			))}
		</div>
	);
};

export default List;
