import { Radio, RadioGroup } from "@mui/material";

function CustomRadioButton() {
  const radioCount = 5;
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        {Array.from({ length: radioCount }, (_, index) => (
          <Radio
            key={index}
            value={`option-${index + 1}`}
            inputProps={{ "aria-label": `Option ${index + 1}` }}
          />
        ))}
      </RadioGroup>
    </div>
  );
}

export default CustomRadioButton;
