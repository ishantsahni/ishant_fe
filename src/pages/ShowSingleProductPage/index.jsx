import { useParams } from "react-router-dom";
import SingleProductComponent from "../../components/SingleProductComponent";
import { useEffect, useState } from "react";
import API_URLS from "../../config/API_URLS";
import axiosInstance from "../../services/axiosInstance";
import ReviewComponent from "../../components/ReviewComponent";
import AddReview from "../../components/AddReview";

function ShowSingleProductPage() {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (productId) {
      axiosInstance
        .get(`${API_URLS.getProduct}/${productId}`)
        .then((response) => setProductInfo(response?.data))
        .catch((error) =>
          console.log("Error in fetching single product ", error)
        );

      axiosInstance
        .post(`${API_URLS.baseURL}${API_URLS.getReviews}`, {
          productId,
        })
        .then((response) => {
          console.log("Review added successfully: ", response.data?.reviews);
          setReviews(response.data?.reviews);
        })
        .catch((error) => console.log("Error fetching reviews: ", error));
    }
  }, [productId]);

  return (
    <div className="p-10">
      <SingleProductComponent productInfo={productInfo} />
      <div className="mt-8 mb-4">
        {reviews.length > 0 &&
          reviews.map((value) => <ReviewComponent reviewInfo={value} />)}
      </div>
      <div>
        <AddReview productId={productId} />
      </div>
    </div>
  );
}

export default ShowSingleProductPage;
