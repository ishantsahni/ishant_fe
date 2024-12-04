const API_URLS = {
  // baseUrl: process.env.REACT_APP_BASE_URL,
  baseURL: "http://localhost:4000",
  addProduct: "/product/add",
  getProducts: "/product/getProducts",
  getProductsById: "/product/getProductsById",
  getProduct: "/product/get",
  signUp: "/signUp",
  signIn: "/signIn",
  orderItems: "/order/add",
  verifyPayment: "/order/verify-payment",
  getOrders: "/order",
  addReview: "/review/addReview",
  getReviews: "/review/getReviews",
};

export default API_URLS;
