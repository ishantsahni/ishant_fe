import { useParams } from "react-router-dom";
import SingleProductComponent from "../../components/SingleProductComponent";
import { useEffect, useState } from "react";
import API_URLS from "../../config/API_URLS";
import axiosInstance from "../../services/axiosInstance";

function ShowSingleProductPage() {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    if (productId) {
      axiosInstance
        .get(`${API_URLS.getProduct}/${productId}`)
        .then((response) => setProductInfo(response?.data))
        .catch((error) =>
          console.log("Error in fetching single product ", error)
        );
    }
  }, [productId]);

  return (
    <div className="p-10">
      <SingleProductComponent productInfo={productInfo} />
    </div>
  );
}

export default ShowSingleProductPage;
