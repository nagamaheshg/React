import React, { useState, useEffect } from 'react';

const ShortCircuitExample = () => {
	const [text, setText] = useState('');
	const [name, setName] = useState('mahesh');
	const [user, setUser] = useState({ name: 'Naga Mahesh Gatta' });
	const [isEditing, setIsEditing] = useState(true);

	return (
		<div>
			<h2>{text || 'default value'}</h2>
			{text && (
				<div>
					<h2> What ever return </h2>
					<h2>{name}</h2>
				</div>
			)}
			{/* {!text && (
				<div>
					<h2> What ever return </h2>
					<h2>{name}</h2>
				</div>
			)} */}
			{user && <SomeComponent name={user.name} />}
			<h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
			<button className='btn'>{isEditing ? 'Edit' : 'Add'}</button>
			{user ? (
				<div>
					<h4> Hello there is user {user.name}</h4>
				</div>
			) : (
				<div>
					<h2>Please Login</h2> 
				</div>
			)}
		</div>
	);
};

const SomeComponent = ({ name }) => {
	return (
		<div>
			<h2> What ever return </h2>
			<h2>Name: {name}</h2>
		</div>
	);
};
export default ShortCircuitExample;
