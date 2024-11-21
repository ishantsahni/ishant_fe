import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import RoughPage from "./pages/RoughPage";
import FileUploadPage from "./pages/FileUploadPage";
import ProductsPage from "./pages/ProductsPage";
import ShowSingleProductPage from "./pages/ShowSingleProductPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/product/add"
          element={<ProtectedRoute element={AddProductPage} />}
        />
        <Route path="/rough" element={<ProtectedRoute element={RoughPage} />} />
        <Route
          path="/fileUploadPage"
          element={<ProtectedRoute element={FileUploadPage} />}
        />
        <Route
          path="/products"
          element={<ProtectedRoute element={ProductsPage} />}
        />
        <Route
          path="/product/:productId"
          element={<ProtectedRoute element={ShowSingleProductPage} />}
        />
        <Route path="/cart" element={<ProtectedRoute element={CartPage} />} />
        <Route
          path="/orders"
          element={<ProtectedRoute element={OrdersPage} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
