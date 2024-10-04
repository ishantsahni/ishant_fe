import { useParams } from "react-router-dom";
import SingleProductComponent from "../../components/SingleProductComponent";
import { useEffect } from "react";
import API_URLS from "../../config/API_URLS";
import axios from "axios";

function ShowSingleProductPage() {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`${API_URLS.baseUrl}${API_URLS.getProduct}/${id}`)
        .then((response) => console.log("Single product fetched ", response))
        .catch((error) =>
          console.log("Error in fetching single product ", error)
        );
    }
  }, [id]);

  return (
    <div className="p-10">
      <p>Redirected to single product page</p>
    </div>
  );
}

export default ShowSingleProductPage;
