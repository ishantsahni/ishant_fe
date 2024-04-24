import { TextField } from "@mui/material";
import PropTypes from "prop-types";

function CustomTextField({label, disabled, id, name, type, onChange, onBlur, value, touched, errors}) {
  return (
    <div>
      <p className="text-[#607083] font-normal text-xs mb-1">{label}<span className="text-[#ffa9a9]">*</span></p>
      <TextField
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        fullWidth
        disabled={disabled}
        variant="outlined"
        placeholder="Enter"
        classes={{
          root: "shadow-inputTextFieldShadow"
        }}
        InputProps={{
          classes: {
            root: `h-[48px] ${disabled ? "bg-[#e0e8f6]" : ""}`,
            notchedOutline: `${touched && errors ? "border-[1px] !border-[#ffa9a9]" : "!border-none"}`, // Remove the border outline
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
  type: PropTypes.string,
  disabled: PropTypes.bool
};

CustomTextField.defaultProps = {
  label: "", 
  type: "text",
  disabled: false
};

export default CustomTextField;
