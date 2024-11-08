import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SingleProductComponent({ productInfo }) {
  const navigate = useNavigate();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <div
      role="presentation"
      className="mx-auto h-fit w-[10rem] cursor-pointer bg-orange-200 flex flex-col items-center justify-center py-4 rounded-lg"
    >
      <img
        onClick={() => navigate(`/product/${productInfo?._id}`)}
        onKeyDown={() => navigate(`/product/${productInfo?._id}`)}
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
        {quantity > 0 && (
          <div className="flex items-center justify-center">
            <button
              onClick={(prev) => setQuantity(quantity - 1)}
              className="h-5 w-5 cursor-pointer rounded-full bg-amber-500 flex items-center justify-center"
            >
              -
            </button>
            <p className="mx-4">{quantity}</p>
            <button
              onClick={(prev) => setQuantity(quantity + 1)}
              className="h-5 w-5 cursor-pointer rounded-full bg-amber-500 flex items-center justify-center"
            >
              +
            </button>
          </div>
        )}
        <button
          onClick={() => {
            if (isAddedToCart) {
              setQuantity(0);
              setIsAddedToCart(false);
            } else {
              setQuantity(1);
              setIsAddedToCart(true);
            }
          }}
          className="mx-auto cursor-pointer"
        >
          {isAddedToCart ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default SingleProductComponent;
