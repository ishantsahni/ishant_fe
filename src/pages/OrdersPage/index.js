import { useEffect } from "react";
import axiosInstance from "../../services/axiosInstance";
import API_URLS from "../../config/API_URLS";

const OrdersPage = () => {
  useEffect(() => {
    axiosInstance
      .get(`${API_URLS.getOrders}`)
      .then((response) => console.log("orders response ", response.data))
      .catch((error) =>
        console.log("Error in fetching single product ", error)
      );
  }, []);

  return <div>Orders Page</div>;
};

export default OrdersPage;
