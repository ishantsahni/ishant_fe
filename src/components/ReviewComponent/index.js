import { FaStar } from "react-icons/fa";

function ReviewComponent({ userName, rating, feedback }) {
  return (
    <div className="p-2 bg-lime-200 rounded-xl">
      <p>{rating}</p>
      <div className="flex my-2">
        {rating.map(() => (
          <FaStar />
        ))}
      </div>
      <p>{feedback}</p>
    </div>
  );
}

export default ReviewComponent;
