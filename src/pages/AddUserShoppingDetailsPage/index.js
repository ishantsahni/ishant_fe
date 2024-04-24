import { useFormik } from "formik";
import CustomTextField from "../../components/CustomTextField";
import { Button } from "@mui/material";
import * as Yup from 'yup';

function AddUserShoppingDetailsPage() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: 0,
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            age: Yup.number("Must be a number").required("Required"),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),

        onSubmit: values => {
            console.log("formik submitted ", values);
        },
    });

    console.log("formik values outside ", formik);

    return (
        <div className="mt-[50px] mx-[50px]">
            <form>
                <CustomTextField
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    label="First Name"
                />
                <CustomTextField
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    label="Last Name"
                />
                <CustomTextField
                    id="age"
                    name="age"
                    onChange={formik.handleChange}
                    type="number"
                    value={formik.values.age}
                    label="Age"
                />
                <CustomTextField
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    label="Email"
                />
                <Button onClick={() => formik.handleSubmit()} variant="contained">Contained</Button>
            </form>
        </div>
    )
}

export default AddUserShoppingDetailsPage;