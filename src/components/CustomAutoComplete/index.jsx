import { Autocomplete, Checkbox, TextField } from "@mui/material";
import PropTypes from "prop-types";

function CustomAutoComplete({
  options,
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  touched,
  errors,
  formik,
  multiple,
}) {
  const getOptionLabel = (option) => {
    console.log("option ", option);
    // Ensure that `option` is a valid object and return its label property
    return option && typeof option === "object" ? option.label || "" : "";
  };

  return (
    <div>
      <p className="text-[#607083] font-normal text-xs mb-1">
        {label}
        <span className="text-[#ffa9a9]">*</span>
      </p>
      <Autocomplete
        disablePortal
        id={id}
        classes={{
          inputRoot: `h-[48px] !pt-[5px]`,
        }}
        name={name}
        value={value}
        onChange={(event, newValue) => {
          console.log("event value ", event, newValue);
          if (multiple) {
            formik.setFieldValue(name, [...value, newValue.value]);
          } else {
            formik.setFieldValue(name, newValue?.value); // Update formik state
          }
        }}
        onBlur={onBlur}
        options={options}
        getOptionLabel={
          multiple
            ? (option) =>
                option && typeof option === "object" ? option.label || "" : ""
            : undefined
        }
        renderOption={
          multiple
            ? (props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={<span className="MuiCheckbox-icon" />}
                    checkedIcon={<span className="MuiCheckbox-icon" />}
                    style={{ marginRight: 8 }} // Adjust spacing as needed
                    checked={selected}
                  />
                  {option.label}
                </li>
              )
            : undefined
        }
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: touched && errors ? "#ffa9a9" : "", // Conditional border color
              },
            }}
            placeholder="Type here to search..."
          />
        )}
      />
      <p className="text-[#ffa9a9] font-normal text-xs mb-1">
        {touched && errors ? <div>{errors}</div> : null}
      </p>
    </div>
  );
}

CustomAutoComplete.propTypes = {
  label: PropTypes.string,
  multiple: PropTypes.bool,
};

CustomAutoComplete.defaultProps = {
  label: "",
  multiple: false,
};

export default CustomAutoComplete;
