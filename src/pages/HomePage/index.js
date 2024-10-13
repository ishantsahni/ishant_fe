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
            ...(isSignUp && {
                name: '',
                address: '',
                city: '',
                postalCode: '',
                country: ''
            })
        },
        validationSchema: yup.object({
            email: yup.string().email("Invalid email format").required('Required'),
            password: yup.string().min(6, "Password must be atleast 6 characters").required('Required'),
            ...(isSignUp && {
                name: yup.string().required('Required'),
                address: yup.string().required('Required'),
                city: yup.string().required('Required'),
                postalCode: yup.string().matches(/^\d{6}$/, "Postal code must be exactly 6 digits").required('Required'),
                country: yup.string().required('Required')
            })
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
                {isSignUp && <CustomTextField
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    label="Name"
                    touched={formik.touched.name}
                    errors={formik.errors.name}
                />}
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
                {isSignUp && <>
                    <CustomTextField
                        id="address"
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        label="Address"
                        touched={formik.touched.address}
                        errors={formik.errors.address}
                    />
                    <CustomTextField
                        id="city"
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                        label="City"
                        touched={formik.touched.city}
                        errors={formik.errors.city}
                    />
                    <CustomTextField
                        id="postalCode"
                        name="postalCode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.postalCode}
                        label="Postal Code"
                        touched={formik.touched.postalCode}
                        errors={formik.errors.postalCode}
                    />
                    <CustomTextField
                        id="country"
                        name="country"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                        label="Country"
                        touched={formik.touched.country}
                        errors={formik.errors.country}
                    />
                </>}

                <Button onClick={() => formik.handleSubmit()} variant="contained">{isSignUp ? "Sign Up" : "Sign In"}</Button>
                <p>Already a user, <span onClick={() => setIsSignUp(false)} className="text-amber-700 cursor-pointer">Sign In</span></p>
            </form>
        </div>
    )
}

export default HomePage;