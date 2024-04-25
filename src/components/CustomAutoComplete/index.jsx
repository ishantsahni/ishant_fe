import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";

function CustomAutoComplete({ options }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

CustomAutoComplete.propTypes = {
  //   name: PropTypes.string.isRequired, // Required prop
};

CustomAutoComplete.defaultProps = {
  // formik: () => {}
};

export default CustomAutoComplete;
