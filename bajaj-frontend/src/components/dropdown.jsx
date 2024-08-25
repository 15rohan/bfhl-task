import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3']; 

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Choose an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">-- Select --</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default Dropdown;
