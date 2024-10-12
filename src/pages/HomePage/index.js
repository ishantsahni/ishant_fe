import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import CustomTextField from '../../components/CustomTextField';

function HomePage() {
    const [isSignUp, setIsSignUp] = useState(true);

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

                <Button onClick={() => formik.handleSubmit()} variant="contained">{isSignUp ? "Sign Up" : "Sign In"}</Button>
                <p>Already a user, <span onClick={() => setIsSignUp(prev => !false)} className="text-amber-700 cursor-pointer">Sign In</span></p>
            </form>
        </div>
    )
}

export default HomePage;