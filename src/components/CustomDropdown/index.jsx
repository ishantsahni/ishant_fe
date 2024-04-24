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
        <InputLabel id="dropdown-label">Select an option</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedOption}
          onChange={handleChange}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomDropdown;
