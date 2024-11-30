import { useFormik } from "formik";
import * as yup from "yup";
import CustomDropdown from "../CustomDropdown";
import CustomTextField from "../CustomTextField";
import { ratingOptions } from "../../helpers";
import { Button } from "@mui/material";

function AddReview() {
  const formik = useFormik({
    initialValues: {
      rating: 0,
      feedback: "",
    },
    validationSchema: yup.object({
      rating: yup.number("Must be a number").required("Required"),
      feedback: yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      console.log("formik submitted ", values);
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
            id="feedback"
            name="feedback"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.feedback}
            label="Feedback"
            touched={formik.touched.feedback}
            errors={formik.errors.feedback}
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
