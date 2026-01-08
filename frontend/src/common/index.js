const SummaryApi = {
  categoryWiseProduct: {
    url: `/api/category-wise-product`,
    method: 'post'
  },
  addToCartProductView: {
    url: `/api/get-cart`,
    method: 'get'
  },
  updateCartProduct: {
    url: `/api/update-cart-product`,
    method: 'post'
  },
  deleteCartProduct: {
    url: `/api/delete-cart-product`,
    method: 'post'
  },
  signUP: {
    url: `/api/signup`,  // ← FIXED! Matches backend router.post("/signup")
    method: 'post'
  }
};

export default SummaryApi;
