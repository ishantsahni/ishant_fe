import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../services/axiosInstance";
import API_URLS from "../../config/API_URLS";
import SingleProductComponent from "../../components/SingleProductComponent";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const requestBody = {};

    console.log("cart ", cart);

    if (Array.isArray(cart) && cart.length > 0) {
      requestBody["productIds"] = cart.map((value) => value.productId);
    }

    axiosInstance
      .post(API_URLS.getProductsById, requestBody)
      .then((response) => {
        const productsWithQuantity = response.data.map((product) => {
          const matchingCartItem = cart.find(
            (item) => item.productId === product.productId
          );
          return {
            ...product,
            quantity: matchingCartItem ? matchingCartItem?.quantity : 0,
          };
        });
        setAllProducts(productsWithQuantity);
      })
      .catch((error) => console.log("Error while fetch cart products ", error));
  }, [cart]);

  const handleBuyItems = () => {
    axiosInstance
      .post(`${API_URLS.baseURL}${API_URLS.orderItems}`, { orderDetails: cart })
      .then((response) =>
        console.log("Products ordered successfully: ", response.data)
      )
      .catch((error) => console.log("Error while ordering products: ", error));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {allProducts.map((item) => (
          <SingleProductComponent
            showOnlyQuantity={true}
            key={item?.productId}
            productInfo={item}
          />
        ))}
      </div>
      <div>
        <button
          className="w-full bg-lime-400 h-20"
          onClick={() => handleBuyItems()}
        >
          Buy Items
        </button>
      </div>
    </div>
  );
};

export default CartPage;
