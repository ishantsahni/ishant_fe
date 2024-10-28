import { useParams } from "react-router-dom";
import SingleProductComponent from "../../components/SingleProductComponent";
import { useEffect, useState } from "react";
import API_URLS from "../../config/API_URLS";
import axiosInstance from "../../services/axiosInstance";

function ShowSingleProductPage() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    if (id) {
      axiosInstance
        .get(`${API_URLS.getProduct}/${id}`)
        .then((response) => setProductInfo(response?.data))
        .catch((error) =>
          console.log("Error in fetching single product ", error)
        );
    }
  }, [id]);

  return (
    <div className="p-10">
      <SingleProductComponent productInfo={productInfo} />
    </div>
  );
}

export default ShowSingleProductPage;
