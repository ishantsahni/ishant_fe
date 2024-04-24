import { useFormik } from "formik";
import CustomTextField from "../../components/CustomTextField";
import { Button } from "@mui/material";

function AddUserShoppingDetailsPage() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: 0,
            email: '',
        },
        onSubmit: values => {
            console.log("formik submitted ", formik);
        },
    });

    console.log("formik values outside ", formik);

    return (
        <div className="mt-[50px] mx-[50px]">
            <form>
                <CustomTextField id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} label="First Name" />
                <CustomTextField id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} label="Last Name" />
                <CustomTextField id="age" name="age" onChange={formik.handleChange} type="number" value={formik.values.age} label="Age" />
                <CustomTextField id="email" name="email" onChange={formik.handleChange} value={formik.values.email} label="Email" />
                <Button onClick={() => formik.handleSubmit()} variant="contained">Contained</Button>
            </form>
        </div>
    )
}

export default AddUserShoppingDetailsPage;