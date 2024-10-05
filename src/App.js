import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import RoughPage from "./pages/RoughPage";
import FileUploadPage from "./pages/FileUploadPage";
import ShowProductsPage from "./pages/ShowProductsPage";
import ShowSingleProductPage from "./pages/ShowSingleProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/rough" element={<RoughPage />} />
        <Route path="/fileUploadPage" element={<FileUploadPage />} />
        <Route path="/showProducts" element={<ShowProductsPage />} />
        <Route path="/showSingleProduct/:id" element={<ShowSingleProductPage />} />
      </Routes>
    </Router >
  );
}

export default App;
