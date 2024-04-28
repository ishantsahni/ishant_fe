import { FormControlLabel, Paper, Radio, RadioGroup, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import PropTypes from "prop-types";

function CustomRadioButton({ name, value, onChange, formik, group }) {
  const handleChange = (event, index) => {
    console.log("event change ", event);
    const rankings = [...value];
    if (group && rankings.indexOf(event.target.value) > -1) {
      rankings[rankings.indexOf(event.target.value)] = "";
    }
    rankings[index] = event.target.value;
    formik.setFieldValue(name, rankings);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Options</TableCell>
            <TableCell>Select Rank</TableCell>
          </TableRow>
        </TableHead>
          {Array.from({ length: value.length }, (_, index) => {
            return (
              <div key={index} className="flex">
                <p>Option {index + 1}</p>
                <RadioGroup
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name={name}
                  value={value[index]}
                  onChange={(event) => handleChange(event, index)}
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
              </div>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
}

CustomRadioButton.propTypes = {
  group: PropTypes.bool,
};

CustomRadioButton.defaultProps = {
  group: false,
};

export default CustomRadioButton;
