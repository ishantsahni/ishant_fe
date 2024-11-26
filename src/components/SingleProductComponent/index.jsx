import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addItemToCart,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../redux/actions/cartActions";

function SingleProductComponent({ productInfo, showOnlyQuantity = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  console.log("product info in single product component ", productInfo);

  return (
    <div
      role="presentation"
      className="mx-auto h-fit w-[10rem] cursor-pointer bg-orange-200 flex flex-col items-center justify-center py-4 rounded-lg"
    >
      <img
        onClick={() => navigate(`/product/${productInfo?.productId}`)}
        onKeyDown={() => navigate(`/product/${productInfo?.productId}`)}
        className="w-[5rem] h-[5rem] cursor-pointer"
        alt="eCommProductImage"
        src={productInfo.image}
      />
      <p>{productInfo?.name}</p>
      <p className="text-center">{productInfo?.description}</p>
      <p>{productInfo?.brand}</p>
      <p>{productInfo?.price}</p>
      <p>{productInfo?.category}</p>
      <p>{productInfo?.brand}</p>
      <div className="flex flex-col items-center justify-center">
        {(quantity > 0 || showOnlyQuantity) && (
          <div className="flex items-center justify-center">
            {!showOnlyQuantity && (
              <button
                onClick={(prev) => {
                  setQuantity(quantity - 1);
                  dispatch(decreaseQuantity(productInfo?.productId));
                }}
                className="h-5 w-5 cursor-pointer rounded-full bg-amber-500 flex items-center justify-center"
              >
                -
              </button>
            )}
            <p className="mx-4">
              {showOnlyQuantity ? productInfo?.quantity : quantity}
            </p>
            {!showOnlyQuantity && (
              <button
                onClick={(prev) => {
                  setQuantity(quantity + 1);
                  dispatch(increaseQuantity(productInfo?.productId));
                }}
                className="h-5 w-5 cursor-pointer rounded-full bg-amber-500 flex items-center justify-center"
              >
                +
              </button>
            )}
          </div>
        )}
        {!showOnlyQuantity && (
          <button
            onClick={() => {
              if (isAddedToCart) {
                setQuantity(0);
                setIsAddedToCart(false);
                dispatch(removeItem(productInfo?.productId));
              } else {
                setQuantity(1);
                setIsAddedToCart(true);
                dispatch(
                  addItemToCart({
                    productId: productInfo?.productId,
                    quantity: 1,
                    price: productInfo?.price,
                  })
                );
              }
            }}
            className="mx-auto cursor-pointer"
          >
            {isAddedToCart ? "Remove" : "Add"}
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleProductComponent;
