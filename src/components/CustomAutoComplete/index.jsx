import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";

function CustomAutoComplete({ options, label }) {
  return (
    <div>
      <p className="text-[#607083] font-normal text-xs mb-1">
        {label}
        <span className="text-[#ffa9a9]">*</span>
      </p>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        renderInput={(params) => <TextField {...params} placeholder="Type here to search..." />}
      />
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
