import { FaStar } from "react-icons/fa";

function ReviewComponent({ reviewInfo }) {
  console.log("review info , ", reviewInfo);
  return (
    <div className="p-2 bg-lime-200 rounded-xl">
      <p>{reviewInfo?.user?.name}</p>
      <div className="flex my-2">
        {/* {reviewInfo?.rating.map(() => ( */}
        <FaStar />
        {/* ))} */}
      </div>
      <p>{reviewInfo?.comment}</p>
    </div>
  );
}

export default ReviewComponent;
