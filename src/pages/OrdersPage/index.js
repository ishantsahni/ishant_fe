import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import API_URLS from "../../config/API_URLS";
import SingleProductComponent from "../../components/SingleProductComponent";

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

  return (
    <div>
      Orders Page
      {allOrders.map((orders, index) => {
        return (
          <div>
            <p>Order {index + 1}</p>
            <div className="flex">
              {orders.map((order) => (
                <SingleProductComponent productInfo={order.productDetails} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersPage;
