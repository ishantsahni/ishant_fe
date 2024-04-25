import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";

function CustomAutoComplete({ options, label, id, name, value, onChange, onBlur, touched, errors }) {
  return (
    <div>
      <p className="text-[#607083] font-normal text-xs mb-1">
        {label}
        <span className="text-[#ffa9a9]">*</span>
      </p>
      <Autocomplete
        disablePortal
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        options={options}
        renderInput={(params) => <TextField {...params} placeholder="Type here to search..." />}
      />
      <p className="text-[#ffa9a9] font-normal text-xs mb-1">{touched && errors ? (
         <div>{errors}</div>
       ) : null}</p>
    </div>
  );
}

CustomAutoComplete.propTypes = {
  label: PropTypes.string,
};

CustomAutoComplete.defaultProps = {
  label: "",
};

export default CustomAutoComplete;
