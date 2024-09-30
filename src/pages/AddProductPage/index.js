import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomTextField from '../../components/CustomTextField';
import { Button } from '@mui/material';

function AddProductPage() {

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: 0,
            category: '',
            brand: '',
            stock: 0,
            images: ''
        },
        validationSchema: yup.object({
            name: yup.string().required('Required'),
            description: yup.string().required('Required'),
            price: yup.number("Must be a number").required("Required"),
            category: yup.string().required('Required'),
            brand: yup.string().required(),
            stock: yup.number("Must be a number").required("Required"),
            images: yup.string().required()
        }),

        onSubmit: values => {
            console.log("formik submitted ", values);
        },
    });
    return (
        <div className="mt-[50px] mx-[50px]">
            <form>
                <CustomTextField
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    label="Name"
                    touched={formik.touched.name}
                    errors={formik.errors.name}
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
                <CustomTextField
                    id="images"
                    name="images"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.images}
                    label="Images"
                    touched={formik.touched.images}
                    errors={formik.errors.images}
                />
                <Button onClick={() => formik.handleSubmit()} variant="contained">Submit</Button>
            </form>
            <Button
            // onClick={() => {
            //     axios.get(`${API_URLS.baseUrl}${API_URLS.getUserData}`, {
            //         params: {
            //             // email: formik.values.email
            //             email: "ishant@gmail.com"
            //         }
            //     }).then(response => {
            //         console.log("get user data response ", response);
            //     }).catch(error => {
            //         console.error('Error fetching data: ', error);
            //     })
            // }} 
            >Submit 2 </Button>
        </div>
    )
}

export default AddProductPage;