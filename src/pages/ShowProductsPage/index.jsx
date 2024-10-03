import axios from "axios";
import { useEffect, useState } from "react";
import API_URLS from "../../config/API_URLS";

function ShowProductsPage() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get(`${API_URLS.baseUrl}${API_URLS.getProducts}`)
        .then(response => setAllProducts(response?.data))
        .catch(error => console.log("Error while fetch all products ", error))
    }, []);

    return (
        <div>Show Products Page</div>
    )
}

export default ShowProductsPage;