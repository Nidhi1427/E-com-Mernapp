const SummaryApi = {
  categoryWiseProduct: {
    url: `/api/category-product`,
    method: 'post'
  },
  addToCartProductView: {
    url: `/api/view-cart-product`,
    method: 'get'
  },
  updateCartProduct: {
    url: `/api/update-cart-product`,
    method: 'post'
  },
  deleteCartProduct: {
    url: `/api/delete-cart-product`,
    method: 'post'
  }
};

export default SummaryApi;
