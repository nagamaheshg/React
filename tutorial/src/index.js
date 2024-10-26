import React from 'react'
import ReactDOM from 'react-dom/client'

function Greetings() {
	return (
		<div>
			<Person />
			<Message />
		</div>
	);
}

const Person = () => <h2> John Doe </h2>;
const Message = () => <p> This is my Message </p>;

const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(<Greetings/>);