import { useFormik } from "formik";
import CustomTextField from "../../components/CustomTextField";
import { Button } from "@mui/material";
import * as Yup from 'yup';
import axios from "axios";
import { useEffect } from "react";
import API_URLS from "../../config/API_URLS";

function ProductDetailsPage() {

    const formik = useFormik({
        initialValues: {
            userName: '',
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .required('Required'),
        }),

        onSubmit: values => {
            console.log("formik user product details ", values);
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
                    id="userName"
                    name="userName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                    label="User Name"
                    touched={formik.touched.userName}
                    errors={formik.errors.userName}
                />
                <Button onClick={() => {
                    axios.get(`${API_URLS.baseUrl}${API_URLS.getProductDetails}`, {
                        params: { name: formik.values.userName }
                    }).then(response => {
                        console.log("get user data response ", response);
                    }).catch(error => {
                        console.error('Error fetching data: ', error);
                    })
                }} >Submit </Button>
            </form>

        </div>
    )
}

export default ProductDetailsPage;