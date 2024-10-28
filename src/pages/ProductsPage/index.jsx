import { useEffect, useState } from "react";
import API_URLS from "../../config/API_URLS";
import SingleProductComponent from "../../components/SingleProductComponent";
import axiosInstance from "../../services/axiosInstance";

function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(API_URLS.getProducts)
      .then((response) => setAllProducts(response?.data))
      .catch((error) => console.log("Error while fetch all products ", error));
  }, []);

  console.log("all products ", allProducts);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {allProducts.map((item) => (
        <SingleProductComponent key={item?._id} productInfo={item} />
      ))}
    </div>
  );
}

export default ProductsPage;
