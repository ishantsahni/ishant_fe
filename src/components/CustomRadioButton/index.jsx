import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
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
      <TableContainer 
       component={Paper}
       className="!w-[550px] !rounded-[16px] !shadow-md"
       >
        <Table aria-label="simple table">
          <TableHead
            // classes={{
              // className= "!bg-red"
            // }}
          >
            <TableRow className="!bg-[#ecf2fb]">
              <TableCell><p className="!text-[#7b8795] !text-[13px] !font-medium">Options</p></TableCell>
              <TableCell><p className="!text-[#7b8795] !text-[13px] !font-medium">Select Rank</p></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: value.length }, (_, index) => {
              return (
                <TableRow key={index} className="!border-t-[2px] !border-red-500">
                  <TableCell>
                    <p>Option {index + 1}</p>
                  </TableCell>
                  <TableCell>
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
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
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
