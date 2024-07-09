import { useFormik } from "formik";
import CustomTextField from "../../components/CustomTextField";
import { Button } from "@mui/material";
import * as Yup from 'yup';
import axios from "axios";
import { useEffect } from "react";
import API_URLS from "../../config/API_URLS";

function UsersPage() {

    // const fetchUserData = () => {

    // }

    const postUserData = async (values) => {
        try {
            const response = await axios.post(`${API_URLS.baseUrl}${API_URLS.postUserData}`, {
                ...values
            })
            console.log("response ", response);

        } catch (error) {
            console.error("Error: ", error);
        }
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: 0,
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                // .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                // .max(20, 'Must be 20 characters or less')
                .required('Required'),
            age: Yup.number("Must be a number").required("Required"),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),

        onSubmit: values => {
            console.log("formik submitted ", values);
            postUserData(values);
        },
    });

    console.log("formik values outside ", formik);

    useEffect(() => {
        axios.get(`${API_URLS.baseUrl}${API_URLS.firstApi}`).then(response => {
            console.log("first api response ", response);
        }).catch(error => {
            console.error('Error fetching data: ', error);
        })
    }, []);

    return (
        <div className="mt-[50px] mx-[50px]">
            <form>
                <CustomTextField
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    label="First Name"
                    touched={formik.touched.firstName}
                    errors={formik.errors.firstName}
                />
                <CustomTextField
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    label="Last Name"
                    touched={formik.touched.lastName}
                    errors={formik.errors.lastName}
                />
                <CustomTextField
                    id="age"
                    name="age"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="number"
                    value={formik.values.age}
                    label="Age"
                    touched={formik.touched.age}
                    errors={formik.errors.age}
                />
                <CustomTextField
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    label="Email"
                    touched={formik.touched.email}
                    errors={formik.errors.email}
                />
                <Button onClick={() => formik.handleSubmit()} variant="contained">Submit</Button>
            </form>
            <Button onClick={() => {
                axios.get(`${API_URLS.baseUrl}${API_URLS.getUserData}`, {
                    params: {
                        // email: formik.values.email
                        email: "ishant@gmail.com"
                    }
                }).then(response => {
                    console.log("get user data response ", response);
                }).catch(error => {
                    console.error('Error fetching data: ', error);
                })
            }} >Submit 2 </Button>
        </div>
    )
}

export default UsersPage;