import { useEffect } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../services/axiosInstance";
import API_URLS from "../../config/API_URLS";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const requestBody = {};

    console.log("cart in use effect ", cart);

    if (Array.isArray(cart) && cart.length > 0) {
      console.log("cart value ", cart);
      requestBody["productIds"] = cart.map((value) => value.productId);
    }

    axiosInstance
      .post(API_URLS.getProductsById, requestBody)
      .then((response) => console.log(response?.data))
      .catch((error) => console.log("Error while fetch cart products ", error));
  }, [cart]);

  return <div>Cart Page</div>;
};

export default CartPage;
