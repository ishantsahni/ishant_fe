import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomTextField from '../../components/CustomTextField';
import { Button } from '@mui/material';
import FileUpload from '../FileUpload';
import axios from 'axios';
import API_URLS from '../../config/API_URLS';

function AddProductPage() {

    const formik = useFormik({
        initialValues: {
            productName: '',
            description: '',
            price: 0,
            category: '',
            brand: '',
            stock: 0,
            images: null
        },
        validationSchema: yup.object({
            productName: yup.string().required('Required'),
            description: yup.string().required('Required'),
            price: yup.number("Must be a number").required("Required"),
            category: yup.string().required('Required'),
            brand: yup.string().required(),
            stock: yup.number("Must be a number").required("Required"),
            images: yup.mixed().required("Image is required")
        }),

        onSubmit: values => {
            console.log("formik submitted ", values);
            axios.post(`${API_URLS.baseUrl}${API_URLS.getUserData}`, values)
                .then(response => console.log("Product added successfully: ", response.data))
                .catch(error => console.log("Error adding products: ", error));
        },
    });

    const handleFileUpload = (file) => {
        formik.setFieldValue('images', file)
    }

    console.log("add product formik ", formik.values);

    return (
        <div className="mt-[50px] mx-[50px]">
            <form>
                <CustomTextField
                    id="productName"
                    name="productName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.productName}
                    label="Product Name"
                    touched={formik.touched.productName}
                    errors={formik.errors.productName}
                />
                <CustomTextField
                    id="description"
                    name="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    label="Description"
                    touched={formik.touched.description}
                    errors={formik.errors.description}
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
                    id="category"
                    name="category"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                    label="Category"
                    touched={formik.touched.category}
                    errors={formik.errors.category}
                />
                <CustomTextField
                    id="brand"
                    name="brand"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.brand}
                    label="Brand"
                    touched={formik.touched.brand}
                    errors={formik.errors.brand}
                />
                <CustomTextField
                    id="stock"
                    name="stock"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="number"
                    value={formik.values.stock}
                    label="Stock"
                    touched={formik.touched.stock}
                    errors={formik.errors.stock}
                />
                <FileUpload
                    onFileUpload={handleFileUpload}  // Pass handleFileUpload to FileUpload
                />
                {formik.touched.images && formik.errors.images ? (
                    <div className="text-red-500">{formik.errors.images}</div>
                ) : null}
                <Button onClick={() => formik.handleSubmit()} variant="contained">Submit</Button>
            </form>
            {/* <Button
                onClick={() => {
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
                }}
            >Submit 2 </Button> */}
        </div>
    )
}

export default AddProductPage;