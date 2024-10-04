import { useParams } from "react-router-dom";
import SingleProductComponent from "../../components/SingleProductComponent";

function ShowSingleProductPage() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <p>Redirected to single product page</p>
    </div>
  );
}

export default ShowSingleProductPage;
