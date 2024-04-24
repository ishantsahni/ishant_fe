import CustomTextField from "../../components/CustomTextField";

function AddUserShoppingDetailsPage() {
    return (
        <div className="mt-[50px] mx-[50px]">
            <CustomTextField label="First Name" />
            <CustomTextField label="Last Name" />
            <CustomTextField label="Age" />
            <CustomTextField label="Email" />
        </div>
    )
}

export default AddUserShoppingDetailsPage;