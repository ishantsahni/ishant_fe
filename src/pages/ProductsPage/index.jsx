import { useEffect, useState } from "react";
import API_URLS from "../../config/API_URLS";
import * as yup from "yup";
import SingleProductComponent from "../../components/SingleProductComponent";
import axiosInstance from "../../services/axiosInstance";
import { useFormik } from "formik";
import CustomTextField from "../../components/CustomTextField";
import CustomDropdown from "../../components/CustomDropdown";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/actions/cartActions";

function ProductsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    onSubmit: () => {},
  });

  useEffect(() => {
    const requestBody = {};

    if (formik.values.category) requestBody.category = formik.values.category;
    if (formik.values.price) requestBody.price = formik.values.price;
    if (formik.values.search) requestBody.search = formik.values.search;

    axiosInstance
      .post(API_URLS.getProducts, requestBody)
      .then((response) => setAllProducts(response?.data))
      .catch((error) => console.log("Error while fetch all products ", error));
  }, [formik.values]);

  useEffect(() => {
    dispatch(emptyCart());
  }, []);

  return (
    <div>
      <div className="mx-20 my-10 flex justify-between">
        <div className="w-[20%]">
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
          label="Search"
          touched={formik.touched.search}
          errors={formik.errors.search}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {allProducts.map((item) => (
          <SingleProductComponent key={item?.productId} productInfo={item} />
        ))}
      </div>
      <div>
        <button
          className="w-full bg-lime-400 h-20"
          onClick={() => navigate("/cart")}
        >
          Go To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductsPage;
