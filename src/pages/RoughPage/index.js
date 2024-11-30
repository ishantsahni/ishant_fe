import AddReview from "../../components/AddReview";
import CustomTextField from "../../components/CustomTextField";
import ReviewComponent from "../../components/ReviewComponent";

function RoughPage() {
  return (
    <div className="mt-[50px] mx-[50px]">
      <CustomTextField />
      <ReviewComponent />
      <AddReview />
    </div>
  );
}

export default RoughPage;
