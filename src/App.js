import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import API_URLS from "./config/API_URLS";
import { useFormik } from "formik";
import * as yup from 'yup';
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import AddUserShoppingDetailsPage from "./pages/AddUserShoppingDetailsPage";
import RoughPage from "./pages/RoughPage";

function App() {

  // const postUserData = async (values) => {
  //   try {
  //     const response = await axios.post(`${API_URLS.baseUrl}${API_URLS.postUserData}`, {
  //       ...values
  //     })
  //     console.log("response ", response);

  //   } catch (error) {
  //     console.error("Error: ", error);
  //   }
  // }

  // useEffect(() => {
  //   axios.get(`${API_URLS.baseUrl}${API_URLS.firstApi}`).then(response => {
  //     console.log("first api response ", response);
  //   }).catch(error => {
  //     console.error('Error fetching data: ', error);
  //   })
  // }, []);


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/addUserShoppingDetails" element={<AddUserShoppingDetailsPage />} />
        <Route path="/rough" element={<RoughPage />} />
      </Routes>
    </Router >
  );
}

export default App;
