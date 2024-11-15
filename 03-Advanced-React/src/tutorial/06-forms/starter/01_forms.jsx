import React, { useState } from 'react';

const SampleForm = () => {

    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        
        event.preventDefault();
        alert("Form submitted Name: " + name);
    }
    

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event)=>setName(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SampleForm;