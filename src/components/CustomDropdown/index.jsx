import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function CustomDropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    console.log("event value ", event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
      <p className="text-[#607083] font-normal text-xs mb-1">Select an option<span className="text-[#ffa9a9]">*</span></p>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedOption}
          onChange={handleChange}
          displayEmpty // Show the empty option as a placeholder
          renderValue={(selected) => {
            if(!selected) {
                return <em>Select</em>
            }
            return selected;
          }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomDropdown;
