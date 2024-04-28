import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

function CustomRadioButton({ name, value, onChange }) {
  const radioCount = value.length;
  return (
    <div>
      {Array.from({ length: value.length }, (_, index) => {
        return (<div key={index} className="flex">
          <p>Option {index + 1}</p>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name={name}
            value={value[index]}
            onChange={onChange}
            defaultValue="top"
          >
            {Array.from({ length: value.length }, (_, radioIndex) => (
              <FormControlLabel
                key={radioIndex}
                labelPlacement="top"
                value={`${radioIndex + 1}`}
                control={<Radio />}
                label={`${radioIndex + 1}`}
              />
            ))}
          </RadioGroup>
        </div>);
      })}
    </div>
  );
}

export default CustomRadioButton;
