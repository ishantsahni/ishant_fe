import { useFormik } from "formik";
import * as yup from "yup";
import CustomTextField from "../../components/CustomTextField";
import { Button } from "@mui/material";
import FileUpload from "../FileUpload";
import API_URLS from "../../config/API_URLS";
import CustomDropdown from "../../components/CustomDropdown";
import axiosInstance from "../../services/axiosInstance";
import { categoryOptions } from "../../helpers";

function AddProductPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      category: "",
      brand: "",
      stock: 0,
      image: null,
    },
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      description: yup.string().required("Required"),
      price: yup.number("Must be a number").required("Required"),
      category: yup.string().required("Please select a value"),
      brand: yup.string().required(),
      stock: yup.number("Must be a number").required("Required"),
      image: yup.mixed().required("Image is required"),
    }),

    onSubmit: (values) => {
      console.log("formik submitted ", values);
      axiosInstance
        .post(`${API_URLS.baseURL}${API_URLS.addProduct}`, values)
        .then((response) =>
          console.log("Product added successfully: ", response.data)
        )
        .catch((error) => console.log("Error adding products: ", error));
    },
  });

  console.log("added");

  const handleFileUpload = (file) => {
    formik.setFieldValue("image", file);
  };

  console.log("add product formik ", formik.values);

  return (
    <div className="mt-[50px] mx-[50px]">
      <form>
        <CustomTextField
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          label="Product Name"
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
        <CustomDropdown
          id="category"
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          value={formik.values.category}
          options={categoryOptions}
          label="Category"
          touched={formik.touched.category}
          errors={formik.touched.errors}
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
          onFileUpload={handleFileUpload} // Pass handleFileUpload to FileUpload
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="text-red-500">{formik.errors.image}</div>
        ) : null}
        <Button onClick={() => formik.handleSubmit()} variant="contained">
          Submit
        </Button>
      </form>
      {/* <Button
                onClick={() => {
                    axios.get(`${API_URLS.baseURL}${API_URLS.getUserData}`, {
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
  );
}

export default AddProductPage;
