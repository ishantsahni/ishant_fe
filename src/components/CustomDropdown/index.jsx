import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Select, MenuItem, FormControl, InputLabel, Checkbox } from "@mui/material";

function CustomDropdown({
  label,
  dropdownOptions,
  id,
  name,
  value,
  onChange,
  onBlur,
  touched,
  errors,
  multiple
}) {
  // const [selectedOption, setSelectedOption] = useState("");
  const [isSelectState, setIsSelectState] = useState(false);

  // const handleChange = (event) => {
  //   console.log("event value ", event.target.value);
  //   setSelectedOption(event.target.value);
  // };

  return (
    <div>
      <FormControl fullWidth>
        <p className="text-[#607083] font-normal text-xs mb-1">
          {label}
          <span className="text-[#ffa9a9]">*</span>
        </p>
        <Select
          labelId="dropdown-label"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          multiple={multiple}
          classes={{
            root: "h-[48px]"
          }}
          onOpen={() => setIsSelectState(true)}
          onClose={() => setIsSelectState(false)}
          displayEmpty // Show the empty option as a placeholder
          renderValue={(selected) => {
            console.log("selected value ", selected);
            if(multiple) {
              if(selected.length === 0) {
                return <em>Select a value</em>
              }
            } else {
              if (!selected) {
                return <em>Select</em>;
              }
            }
            
            return selected;
          }}
          // inputProps={{ className: "!border-red-500 !border" }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: `${touched && errors ? "#ff0000" : ""}`, // Change the border color
            },
          }}
          IconComponent={() => (
            isSelectState ? <FaAngleUp className="mr-[20px]" /> : <FaAngleDown className="mr-[20px]" />
          )}
        >
          <MenuItem value="">Select</MenuItem>
          {dropdownOptions.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {multiple ? (
                <Checkbox checked={value.indexOf(item.value) > -1} /> // Check if the item value is present in the selected values array
              ) : null}
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <p className="text-[#ffa9a9] font-normal text-xs mb-1">
          {touched && errors ? <div>{errors}</div> : null}
        </p>
      </FormControl>
    </div>
  );
}

CustomDropdown.propTypes = {
  //   name: PropTypes.string.isRequired, // Required prop
  label: PropTypes.string,
  multiple: PropTypes.bool
};

CustomDropdown.defaultProps = {
  label: "",
  multiple: false
};

export default CustomDropdown;
