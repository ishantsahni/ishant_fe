import CustomDropdown from "../../components/CustomDropdown";
import CustomTextField from "../../components/CustomTextField";

function RoughPage() {
    return (<div className="mt-[50px] mx-[50px]">
        <CustomTextField />
        <div className="mt-[100px]">
            <CustomDropdown />
        </div>
    </div>)
}

export default RoughPage;