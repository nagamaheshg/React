import React, { useState, useEffect } from 'react';

const CleanUpFunction = () => {
	const [state, setState] = useState(false);

	return (
		<>
			<h1>Clean Up Function</h1>
			<button onClick={()=>{setState(!state)}} className='btn'>
				Change State
			</button>
            {state && <SecondComponent />}
		</>
	);
};

const SecondComponent = () => {

    useEffect(() => {
        console.log("This is Interesting!");
        const intId = setInterval(()=>{
            console.log('Hello from Interval')
        },1000)
        return () => {
            console.log("Component Unmounted");
            clearInterval(intId);
        }
    },[])
    return (
        <div>
            <h2>Second Component</h2>
        </div>
    )
}

export default CleanUpFunction;
