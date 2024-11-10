import { useEffect } from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("cart ", cart);
  }, [cart]);

  return <div>Cart Page</div>;
};

export default CartPage;
