import { useFormik } from "formik";
import * as yup from "yup";
import CustomDropdown from "../CustomDropdown";
import CustomTextField from "../CustomTextField";
import { ratingOptions } from "../../helpers";
import { Button } from "@mui/material";
import axiosInstance from "../../services/axiosInstance";
import API_URLS from "../../config/API_URLS";

function AddReview({ productId, refetchReviews, setRefetchReviews }) {
  const formik = useFormik({
    initialValues: {
      rating: 0,
      comment: "",
    },
    validationSchema: yup.object({
      rating: yup
        .number("Must be a number")
        .min(1, "Rating must be given")
        .required("Required"),
      comment: yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      console.log("post request added ", {
        ...values,
        productId,
        userId: sessionStorage.getItem("userId"),
      });
      axiosInstance
        .post(`${API_URLS.baseURL}${API_URLS.addReview}`, {
          ...values,
          productId,
          userId: sessionStorage.getItem("userId"),
        })
        .then((response) => {
          console.log("Review added successfully: ", response.data);
          formik.setFieldValue("rating", 0);
          formik.setFieldValue("comment", "");
          setRefetchReviews(!refetchReviews);
        })
        .catch((error) => console.log("Error adding review: ", error));
    },
  });
  return (
    <div className="bg-yellow-200 rounded-xl p-2">
      <form>
        <CustomDropdown
          id="rating"
          name="rating"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          value={formik.values.rating}
          options={ratingOptions}
          label="Rating"
          touched={formik.touched.rating}
          errors={formik.touched.errors}
        />
        <div className="my-4">
          <CustomTextField
            id="comment"
            name="comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
            label="Feedback"
            touched={formik.touched.comment}
            errors={formik.errors.comment}
          />
        </div>

        <Button
          onClick={() => formik.handleSubmit()}
          className="mt-4"
          variant="contained"
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddReview;
