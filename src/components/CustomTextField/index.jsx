import { TextField } from "@mui/material";
import PropTypes from "prop-types";

function CustomTextField({label, id, name, type, onChange, value, touched, errors}) {
  return (
    <div>
      <p className="text-[#607083] font-normal text-xs mb-1">{label}<span className="text-[#ffa9a9]">*</span></p>
      <TextField
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
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
      <p className="text-[#ffa9a9] font-normal text-xs mb-1">{touched && errors ? (
         <div>{errors}</div>
       ) : null}</p>
    </div>
  );
}

CustomTextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string 
};

CustomTextField.defaultProps = {
  label: "", 
  type: "text"
};

export default CustomTextField;
