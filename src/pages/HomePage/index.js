import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomTextField from '../../components/CustomTextField';
import { Button } from '@mui/material';
import axios from 'axios';
import API_URLS from '../../config/API_URLS';

function HomePage() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string().email("Invalid email format").required('Required'),
            password: yup.string().min(6, "Password must be atleast 6 characters").required('Required'),
        }),

        onSubmit: values => {
            console.log("formik submitted ", values);
            // axios.post(`${API_URLS.baseUrl}${API_URLS.addProduct}`, values)
            //     .then(response => console.log("Product added successfully: ", response.data))
            //     .catch(error => console.log("Error adding products: ", error));
        },
    });

    return (
        <div className="mt-[50px] mx-[50px]">
            <form>
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
                <CustomTextField
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    label="Password"
                    touched={formik.touched.password}
                    errors={formik.errors.password}
                />

                <Button onClick={() => formik.handleSubmit()} variant="contained">Sign Up</Button>
            </form>
        </div>
    )
}

export default HomePage;