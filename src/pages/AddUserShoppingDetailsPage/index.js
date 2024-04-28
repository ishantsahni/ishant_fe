import { useFormik } from "formik";
import CustomTextField from "../../components/CustomTextField";
import { Button } from "@mui/material";
import * as Yup from "yup";
import CustomDropdown from "../../components/CustomDropdown";
import CustomAutoComplete from "../../components/CustomAutoComplete";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomRadioButton from "../../components/CustomRadioButton";

const dropdownOptions = [
    { label: "London", value: "london" },
    { label: "Milan", value: "milan" },
    { label: "California", value: "california" },
];

const dropdownOptionsTwo = [
    { label: "India", value: "india" },
    { label: "Australia", value: "australia" },
    { label: "Canada", value: "canada" },
    { label: "USA", value: "usa" },
];

const movieList = [
    { label: "Pulp Fiction", value: "Pulp Fiction" },
    { label: "Fight Club", value: "Fight Club" },
    { label: "Dark Knight", value: "Dark Knight" },
    { label: "Seven Samurai", value: "Seven Samurai" },
];

function AddUserShoppingDetailsPage() {
    const [cityOptions, setCityOptions] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://onecrmdev.tataaig.com/lambda/common/locationMaster?search=${searchString}&limit=10`).then(response => {
            console.log("first api response ", response);
            setCityOptions(response?.data?.data.map(item => ({
                label: item.label,
                value: item.label
            })))
            setIsLoading(false);
        }).catch(error => {
            console.error('Error fetching data: ', error);
        })
    }, [searchString]);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            age: 0,
            email: "",
            city: "",
            country: [],
            movie: "",
            manyMovies: [],
            rank: Array(5).fill("")
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            age: Yup.number("Must be a number").required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            city: Yup.string().required("Required"),
            country: Yup.array()
                .min(1, "Atleast one country should be selected")
                .required("Required"),
            movie: Yup.string().required("Required"),
            manyMovies: Yup.array()
                .min(1, "Atleast one movie should be selected")
                .required("Required"),
            rank: Yup.array().required("Required")
        }),

        onSubmit: (values) => {
            console.log("formik submitted ", values);
        },
    });

    console.log("formik values outside ", formik, cityOptions);

    return (
        <div className="mt-[50px] mx-[50px]">
            <form>
                <CustomRadioButton
                    name="rank"
                    value={formik.values.rank}
                    onChange={formik.handleChange}
                />
                <CustomTextField
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    label="First Name"
                    touched={formik.touched.firstName}
                    errors={formik.errors.firstName}
                />
                <CustomTextField
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    label="Last Name"
                    touched={formik.touched.lastName}
                    errors={formik.errors.lastName}
                />
                <CustomTextField
                    id="age"
                    name="age"
                    disabled
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="number"
                    value={formik.values.age}
                    label="Age"
                    touched={formik.touched.age}
                    errors={formik.errors.age}
                />
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
                <CustomDropdown
                    id="city"
                    name="city"
                    label="Select City"
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                    value={formik.values.city}
                    dropdownOptions={dropdownOptions}
                    touched={formik.touched.city}
                    errors={formik.errors.city}
                />
                <CustomDropdown
                    id="country"
                    name="country"
                    label="Select country"
                    multiple
                    formik={formik}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    dropdownOptions={dropdownOptionsTwo}
                    touched={formik.touched.country}
                    errors={formik.errors.country}
                />
                <CustomAutoComplete
                    label="Select Value From AutoComplete"
                    id="movie"
                    name="movie"
                    options={cityOptions}
                    formik={formik}
                    setSearchString={setSearchString}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.movie}
                    touched={formik.touched.movie}
                    errors={formik.errors.movie}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                <CustomAutoComplete
                    label="Select mulitple movies"
                    id="manyMovies"
                    name="manyMovies"
                    options={cityOptions}
                    formik={formik}
                    multipleSelection={true}
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    setSearchString={setSearchString}
                    value={formik.values.manyMovies}
                    touched={formik.touched.manyMovies}
                    errors={formik.errors.manyMovies}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                <Button
                    onClick={() => {
                        console.log("click worked");
                        formik.handleSubmit();
                    }}
                    variant="contained"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default AddUserShoppingDetailsPage;
