import React, {useState} from 'react';

const ToggleChallenge = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = () => {
        setIsVisible(!isVisible);
    }

    return (
		<>
			<button className='btn' type='button' onClick={handleVisible}>
				Show Component
			</button>
			{isVisible && <SomeComponent />}
		</>
	);
}


const SomeComponent = () => {
    return (
        <div>
            <h2>This is a hidden component</h2>
        </div>
    )
}
export default ToggleChallenge;