import CustomDropdown from "../../components/CustomDropdown";
import CustomTextField from "../../components/CustomTextField";

const dropdownOptions = [
    { label: "Option 1", value: 'option1' },
    { label: "Option 2", value: 'option2' },
    { label: "Option 3", value: 'option3' },
]

function RoughPage() {
    return (<div className="mt-[50px] mx-[50px]">
        <CustomTextField />
        <div className="mt-[100px]">
            <CustomDropdown dropdownOptions={dropdownOptions} />
        </div>
    </div>)
}

export default RoughPage;