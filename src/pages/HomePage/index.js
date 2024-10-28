/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomTextField from "../../components/CustomTextField";
import API_URLS from "../../config/API_URLS";

function HomePage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const getSignInInitailValues = () => ({
    email: "",
    password: "",
  });

  const getSignUpInitailValues = () => ({
    email: "",
    password: "",
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const getSignInValidationSchema = () =>
    yup.object({
      email: yup.string().email("Invalid email format").required("Required"),
      password: yup
        .string()
        .min(6, "Password must be atleast 6 characters")
        .required("Required"),
    });

  const getsignUpValidationSchema = () =>
    yup.object({
      email: yup.string().email("Invalid email format").required("Required"),
      password: yup
        .string()
        .min(6, "Password must be atleast 6 characters")
        .required("Required"),
      name: yup.string().required("Required"),
      address: yup.string().required("Required"),
      city: yup.string().required("Required"),
      postalCode: yup
        .string()
        .matches(/^\d{6}$/, "Postal code must be exactly 6 digits")
        .required("Required"),
      country: yup.string().required("Required"),
    });

  const formik = useFormik({
    initialValues: isSignUp
      ? getSignUpInitailValues()
      : getSignInInitailValues(),
    validationSchema: isSignUp
      ? getsignUpValidationSchema
      : getSignInValidationSchema(),
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("formik submitted ", values);
      axios
        .post(
          `${API_URLS.baseURL}${isSignUp ? API_URLS.signUp : API_URLS.signIn}`,
          values
        )
        .then((response) => {
          sessionStorage.setItem("accessToken", response?.data?.accessToken);
          navigate("/products");
        })
        .catch((error) => console.log("Error occurred ", error));
    },
  });

  return (
    <div className="mt-[50px] mx-[50px]">
      <form>
        {isSignUp && (
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
        )}
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
        {isSignUp && (
          <>
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
          </>
        )}

        <Button onClick={() => formik.handleSubmit()} variant="contained">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <p>
          Already a user,{" "}
          <span
            onClick={() => setIsSignUp(false)}
            className="text-amber-700 cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}

export default HomePage;
