import { useFormik } from "formik";
import CustomTextField from "../../components/CustomTextField";
import { Button } from "@mui/material";
import * as Yup from 'yup';
import axios from "axios";
import { useEffect } from "react";
import API_URLS from "../../config/API_URLS";

function UserShoppingDetails() {

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
            email: '',
            product: '',
            quantity: 0,
            price: 0,
        },
        validationSchema: Yup.object({
            product: Yup.string()
                .required('Required'),
            quantity: Yup.number("Must be a number").required("Required"),
            price: Yup.number("Must be a number").required("Required"),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),

        onSubmit: values => {
            console.log("formik user shopping details ", values);
            // postUserData(values);
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
                    id="product"
                    name="product"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.product}
                    label="Product"
                    touched={formik.touched.product}
                    errors={formik.errors.product}
                />
                <CustomTextField
                    id="quantity"
                    name="quantity"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.quantity}
                    type="number"
                    label="Quantity"
                    touched={formik.touched.quantity}
                    errors={formik.errors.quantity}
                />
                <CustomTextField
                    id="price"
                    name="price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="number"
                    value={formik.values.price}
                    label="Price"
                    touched={formik.touched.price}
                    errors={formik.errors.price}
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
                axios.get(`${API_URLS.baseUrl}${API_URLS.getUserData}`).then(response => {
                    console.log("get user data response ", response);
                }).catch(error => {
                    console.error('Error fetching data: ', error);
                })
            }} >Submit 2 </Button>
        </div>
    )
}

export default UserShoppingDetails;