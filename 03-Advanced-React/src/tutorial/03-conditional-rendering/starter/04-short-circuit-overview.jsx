import React,{useState} from "react";

const ShortCircuitOverview = () => {

    const [text, setText] = useState('');
    const [name, setName] = useState('mahesh');

    const codeExample = text || "Hello World!";
    return (
		<div>
			{/* {if(text)} // It won't work if condition not work in jsx */}
			<h2>Short Circuit Overview</h2>
			<h4>Falsy OR: {text || 'Hello World'}</h4>
			<h4>Falsy AND: {text && 'Hello World'}</h4>
			<h4>Truthy OR: {name || 'Hello World'}</h4>
			<h4>Truthy AND: {name && 'Hello World'}</h4> 
            {codeExample}
		</div>
	);

}
export default ShortCircuitOverview;