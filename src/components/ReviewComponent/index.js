import { FaStar } from "react-icons/fa";

function ReviewComponent({ reviewInfo }) {
  console.log("review info , ", reviewInfo);
  return (
    <div className="p-2 mt-4 bg-lime-200 rounded-xl">
      <p>{reviewInfo?.user?.name}</p>
      <div className="flex my-2">
        {[...Array(reviewInfo?.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <p>{reviewInfo?.comment}</p>
    </div>
  );
}

export default ReviewComponent;
