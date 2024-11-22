import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import API_URLS from "../../config/API_URLS";

const OrdersPage = () => {
  const [allOrders, setAllOrders] = useState([]);

  console.log("all orders ", allOrders);

  useEffect(() => {
    axiosInstance
      .get(`${API_URLS.getOrders}`)
      .then((response) => {
        setAllOrders(response.data.map((order) => order.orderItems));
      })
      .catch((error) =>
        console.log("Error in fetching single product ", error)
      );
  }, []);

  return <div>Orders Page</div>;
};

export default OrdersPage;
