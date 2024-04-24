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
        // sx={{
        //   '& .MuiOutlinedInput-root fieldset': {
        //     border: 'none', // Remove the border
        //     boxShadow: 'inset -3px -3px 4px #FFFFFFE6' // Add custom box shadow
        //   }
        // }}
      />
    </div>
  );
}

export default CustomTextField;
