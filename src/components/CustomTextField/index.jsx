import { TextField } from "@mui/material";
import PropTypes from "prop-types";

function CustomTextField({label}) {
  return (
    <div>
      <p className="text-[#607083] font-normal text-xs mb-1">{label}<span className="text-[#ffa9a9]">*</span></p>
      <TextField
        id="outlined-basic"
        fullWidth
        variant="outlined"
        placeholder="Enter"
        classes={{
          root: "shadow-inputTextFieldShadow"
        }}
        InputProps={{
          classes: {
            notchedOutline: '!border-none', // Remove the border outline
          },
        }}
      />
    </div>
  );
}

CustomTextField.propTypes = {
  label: PropTypes.string, 
};

CustomTextField.defaultProps = {
  label: "", 
};

export default CustomTextField;
