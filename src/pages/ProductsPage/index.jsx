import { useEffect, useState } from "react";
import API_URLS from "../../config/API_URLS";
import * as yup from "yup";
import SingleProductComponent from "../../components/SingleProductComponent";
import axiosInstance from "../../services/axiosInstance";
import { useFormik } from "formik";
import CustomTextField from "../../components/CustomTextField";
import CustomDropdown from "../../components/CustomDropdown";

function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);

  const formik = useFormik({
    initialValues: {
      category: "",
      price: 0,
      search: "",
    },
    validationSchema: yup.object({
      category: yup.string(),
      price: yup.number("Must be a number"),
      search: yup.string(),
    }),

    onSubmit: (values) => {
      console.log("formik submitted ", values);
      // axiosInstance
      //   .post(`${API_URLS.baseURL}${API_URLS.addProduct}`, values)
      //   .then((response) =>
      //     console.log("Product added successfully: ", response.data)
      //   )
      //   .catch((error) => console.log("Error adding products: ", error));
    },
  });

  useEffect(() => {
    axiosInstance
      .get(API_URLS.getProducts)
      .then((response) => setAllProducts(response?.data))
      .catch((error) => console.log("Error while fetch all products ", error));
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-[40%]">
          <CustomDropdown
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
            value={formik.values.category}
            label="Category"
            touched={formik.touched.category}
            errors={formik.touched.errors}
          />
        </div>
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
          id="search"
          name="search"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.search}
          label="Brand"
          touched={formik.touched.search}
          errors={formik.errors.search}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {allProducts.map((item) => (
          <SingleProductComponent key={item?._id} productInfo={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
