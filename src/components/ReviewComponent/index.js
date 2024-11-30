import { FaStar } from "react-icons/fa";

function ReviewComponent({
  userName = "ishant",
  rating = [2],
  feedback = "I used it, great product!!",
}) {
  return (
    <div className="p-2 bg-lime-200 rounded-xl">
      <p>{userName}</p>
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
