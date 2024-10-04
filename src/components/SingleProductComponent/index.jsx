function SingleProductComponent({ productInfo }) {
  return (
    <div className="h-fit w-[10rem] bg-orange-200 flex flex-col items-center justify-center py-4 rounded-lg">
      <img
        className="w-[5rem] h-[5rem]"
        alt="eCommProductImage"
        src={productInfo.images}
      />
      <p>{productInfo?.productName}</p>
      <p>{productInfo?.brand}</p>
      <p>{productInfo?.price}</p>
      <p>{productInfo?.category}</p>
      <p>{productInfo?.brand}</p>
    </div>
  );
}

export default SingleProductComponent;
