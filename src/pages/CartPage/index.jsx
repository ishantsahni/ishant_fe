import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../services/axiosInstance";
import API_URLS from "../../config/API_URLS";
import SingleProductComponent from "../../components/SingleProductComponent";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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

  const handleBuyItems = async () => {
    try {
      const amount = cart.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );

      // Step 1: Call the /add route to create Razorpay Order ID
      const { data } = await axiosInstance.post(
        `${API_URLS.baseURL}${API_URLS.orderItems}`,
        {
          orderDetails: cart,
          amount: amount,
        }
      );

      const { razorpayOrderId } = data.order; // Extract Razorpay Order ID from response

      // Step 2: Configure Razorpay options
      const options = {
        key: process.env.RAZORPAY_KEY_ID, // Use Razorpay test key for development
        amount: amount * 100, // Amount in paise
        current: "INR",
        name: "Ishant's Shop",
        description: "Test Transaction",
        order_id: razorpayOrderId,
        handler: async (response) => {
          // Step 3: Payment successfull, call /verify-payment route
          const verificationData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const verificationResult = await axiosInstance.post(
              `${API_URLS.baseURL}${API_URLS.verifyPayment}`,
              verificationData
            );

            if ((await verificationResult).data.success) {
              alert("Payment successful and verified!");
            } else {
              alert("Payment verification failed");
            }
          } catch (error) {
            console.error("Verification error: ", error);
            alert("Error during payment verification");
          }
        },
        prefill: {
          name: "Ishant Sahni", // Prefill with user details
          email: "ishant@gmail.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Step 4: Open Razorpay Checkout modal
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Error initiating payment: ", error);
    }
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
