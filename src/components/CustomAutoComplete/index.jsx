import {
  Autocomplete,
  Checkbox,
  Chip,
  MenuItem,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const handleBlur = (event) => {
    // Delay closing the dropdown to handle click events
    setTimeout(() => {
      setOpen(false);
      onBlur(event);
    }, 100);
  };

  const renderTags = (value, getTagProps) => {
    const firstChip = value[0];
    return (
      <>
        {value.length >= 1 && (
          <Chip
            // key={index}
            label={firstChip}
            // {...getTagProps({ index })}
            onDelete={() => {
              const newValue = value.filter((val) => val !== firstChip);
              formik.setFieldValue(name, newValue);
            }}
          />
        )}
        {value.length >= 2 && <p>{` + ${value.length - 1}`}</p>}
      </>
    );
  };

  // const renderTags = (value, getTagProps) =>
  //   value.map((option, index) => (
  //     <Chip
  //       key={index}
  //       label={label}
  //       // {...getTagProps({ index })}
  //       onDelete={() => {
  //         const newValue = value.filter((val) => val !== option);
  //         formik.setFieldValue(name, newValue);
  //       }}
  //     />
  //   ));

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
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => {}}
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
        onBlur={handleBlur}
        options={
          value.indexOf("Select All") > -1
            ? [{ label: "Unselect All", value: "Unselect All" }, ...options]
            : [{ label: "Select All", value: "Select All" }, ...options]
        }
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
        renderTags={
          multipleSelection
            ? (value, getTagProps) => renderTags(value, getTagProps)
            : undefined
        }
        renderOption={
          multipleSelection
            ? (props, option, { selected }) => (
                <MenuItem
                  disabled={
                    ["Select All", "Unselect All"].indexOf(option.value) > -1
                      ? false
                      : value.indexOf("Select All") > -1
                      ? true
                      : value.indexOf("Unselect All") > -1
                      ? true
                      : false
                  }
                  {...props}
                >
                  <Checkbox
                    checked={value.includes(option.value)}
                    onChange={() => {
                      if (option.value === "Select All") {
                        formik.setFieldValue(name, ["Select All"]);
                      } else if (option.value === "Unselect All") {
                        formik.setFieldValue(name, []);
                      } else {
                        const isSelected = value.includes(option.value);
                        const selectedValues = isSelected
                          ? value.filter((val) => val !== option.value)
                          : [...value, option.value];
                        formik.setFieldValue(name, selectedValues);
                      }
                    }}
                  />
                  {option.label}
                </MenuItem>
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
            onFocus={() => setOpen(true)}
            onBlur={handleBlur}
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
