import { FaStar } from "react-icons/fa";

function ReviewComponent() {
  return (
    <div className="p-2 bg-lime-200 rounded-xl">
      <p>Ishant Sahni</p>
      <div className="flex my-2">
        <FaStar />
        <FaStar />
      </div>
      <p>I used it, the product is really good!!</p>
    </div>
  );
}

export default ReviewComponent;
