import axios from "axios";
import { useEffect } from "react";
import API_URLS from "./config/API_URLS";
import { useFormik } from "formik";
import * as yup from 'yup';

function App() {

  useEffect(() => {
    axios.get(`${API_URLS.baseUrl}${API_URLS.firstApi}`).then(response => {
      console.log("first api response ", response);
    }).catch(error => {
      console.error('Error fetching data: ', error);
    })
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      dish: '',
      color: '',
      city: ''
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      dish: yup.string().required(),
      color: yup.string().required(),
      city: yup.string().required(),
    }),
    onSubmit: values => {
      console.log("formik values ", values);
    },
  });

  return (
    <div>
      <p >Home Page Changed</p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="dish">Dish</label>
          <input
            id="dish"
            name="dish"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.dish}
          />
          <label htmlFor="color">Color</label>
          <input
            id="color"
            name="color"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.color}
          />
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <button
            type="submit"
          >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
