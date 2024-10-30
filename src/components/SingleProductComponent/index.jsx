import { useNavigate } from "react-router-dom";

function SingleProductComponent({ productInfo }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${productInfo?._id}`)}
      onKeyDown={() => navigate(`/product/${productInfo?._id}`)}
      role="presentation"
      className="h-fit w-[10rem] cursor-pointer bg-orange-200 flex flex-col items-center justify-center py-4 rounded-lg"
    >
      <img
        className="w-[5rem] h-[5rem]"
        alt="eCommProductImage"
        src={productInfo.image}
      />
      <p>{productInfo?.name}</p>
      <p className="text-center">{productInfo?.description}</p>
      <p>{productInfo?.brand}</p>
      <p>{productInfo?.price}</p>
      <p>{productInfo?.category}</p>
      <p>{productInfo?.brand}</p>
    </div>
  );
}

export default SingleProductComponent;
