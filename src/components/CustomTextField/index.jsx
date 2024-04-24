import { TextField } from "@mui/material";

function CustomTextField() {
  return (
    <div>
      <p className="text-[#607083] font-normal text-xs mb-1">Label<span className="text-[#ffa9a9]">*</span></p>
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

export default CustomTextField;
