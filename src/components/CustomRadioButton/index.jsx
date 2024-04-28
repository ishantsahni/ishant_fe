import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

function CustomRadioButton({name, value, onChange}) {
  const radioCount = 5;
  const [selectedRadio, setSelectedRadio] = useState(0);
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name={name}
        value={value}
        onChange={onChange}
        defaultValue="top"
      >
        {Array.from({ length: radioCount }, (_, index) => (
          <FormControlLabel key={index} labelPlacement="top" value={`${index+1}`} control={<Radio />} label={`${index+1}`} />
        ))}
      </RadioGroup>
    </div>
  );
}

export default CustomRadioButton;
