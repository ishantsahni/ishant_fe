import React, { useState } from "react";
import PropTypes from "prop-types";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function CustomDropdown({ dropdownOptions }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    console.log("event value ", event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <p className="text-[#607083] font-normal text-xs mb-1">
          Select an option<span className="text-[#ffa9a9]">*</span>
        </p>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedOption}
          onChange={handleChange}
          displayEmpty // Show the empty option as a placeholder
          renderValue={(selected) => {
            if (!selected) {
              return <em>Select</em>;
            }
            return selected;
          }}
        >
          <MenuItem value="">Select</MenuItem>
          {dropdownOptions.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

CustomDropdown.propTypes = {
  //   name: PropTypes.string.isRequired, // Required prop
};

CustomDropdown.defaultProps = {};

export default CustomDropdown;
