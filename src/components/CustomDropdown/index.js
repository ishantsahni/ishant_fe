import { InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const itemTypes = [{
    value: "sports",
    label: "Sports"
}, {
    value: "electronics",
    label: "Electronics"
}, {
    value: "food",
    label: "Food"
}, {
    value: "vehicle",
    label: "Vehicle"
}]

function CustomDropdown({ id, name, onChange, onBlur, value, label, touched, errors }) {
    return <div className="!w-full">
        <InputLabel className="w-full" id="demo-multiple-name-label">{label}</InputLabel>
        <Select
            labelId="demo-multiple-name-label"
            id={id}
            className="w-full"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            input={<OutlinedInput label="Category" />}
            MenuProps={MenuProps}
        >
            {itemTypes.map((item) => (
                <MenuItem
                    key={item.value}
                    value={item.value}
                // style={getStyles(name, personName, theme)}
                >
                    {item.label}
                </MenuItem>
            ))}
        </Select>
        <p className="text-[#ffa9a9] font-normal text-xs mb-1">{touched && errors ? (
            <div>{errors}</div>
        ) : null}</p>
    </div>
}

CustomDropdown.propTypes = {
    label: PropTypes.string,
};

CustomDropdown.defaultProps = {
    label: "",
};

export default CustomDropdown;