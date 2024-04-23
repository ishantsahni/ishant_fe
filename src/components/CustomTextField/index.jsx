import { TextField } from "@mui/material";

function CustomTextField() {
  return (
    <div>
      <p className="text-[#607083] font-normal text-xs mb-1">Label<span className="text-[#ffa9a9]">*</span></p>
      <TextField
        id="outlined-basic"
        fullWidth
        variant="filled"
        placeholder="Enter"
        classes="!border-none !shadow-inputTextFieldShadow"
        // InputProps={{
        //     classes: {
        //       root: '!border-none !shadow-inputTextFieldShadow',
        //     },
        //   }}
      />
    </div>
  );
}

export default CustomTextField;
