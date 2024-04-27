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
  multipleSelection,
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
        multiple={multipleSelection}
        value={value}
        onChange={(event, newValue) => {
          console.log("event value ", event, newValue);
          if (multipleSelection) {
            console.log("setting multiple movies ", value, newValue);
            const newValueArray = newValue.map((item) => {
              if (item instanceof Object) {
                return item.value;
              }
              return item;
            });
            console.log("newValueArray", newValueArray);
            formik.setFieldValue(name, [...newValueArray]);
          } else {
            formik.setFieldValue(name, newValue?.value); // Update formik state
          }
        }}
        onBlur={onBlur}
        options={options}
        getOptionLabel={
          multipleSelection
            ? (option) => {
                console.log("multiple option ", option);
                if (typeof option === "string") {
                  return option; // Return string directly for string options
                } else if (option && typeof option === "object") {
                  return option.label || ""; // Return label property for object options
                }
                return "";
              }
            : undefined
        }
        renderOption={
          multipleSelection
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
  multipleSelection: PropTypes.bool,
};

CustomAutoComplete.defaultProps = {
  label: "",
  multipleSelection: false,
};

export default CustomAutoComplete;
