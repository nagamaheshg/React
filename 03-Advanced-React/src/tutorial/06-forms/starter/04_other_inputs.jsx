import { useState } from 'react';

const frameWorks = ['react', 'angular', 'vue', 'svelte'];


const OtherInput = () => {
	const [shipping, setShipping] = useState(false);
    const [framework, setFramework] = useState(false);

    const handleShipping = (e) => {
		console.log(e.target.checked);
		setShipping(e.target.checked);
	};
    const handleFrameWork = (e) => {
		setFramework(e.target.value);
	};
	const handleSubmit = (e) => {
        e.preventDefault();
    };
	return (
		<>
			<div>
				<form className='form' onSubmit={handleSubmit}>
					<h4>Other Form Elements</h4>
					<div className='form-row' style={{ textAlign: 'left' }}>
						<label htmlFor='shipping'>Free Shipping </label>
						<input
							type='checkbox'
							id='shipping'
							value={shipping}
							name='shipping'
							checked={shipping}
							onChange={handleShipping}
						/>
						<div className='form-row' style={{ textAlign: 'left' }}>
							<label htmlFor='framework'>Framework </label>
							<select name='framework' id='framework' value={framework} onChange={handleFrameWork}>
								{frameWorks.map((frameWork) => (
									<option key={frameWork} value={frameWork}>
										{frameWork}
									</option>
								))}
							</select>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default OtherInput;
