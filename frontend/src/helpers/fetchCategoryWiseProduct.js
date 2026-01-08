import SummaryApi from '../common';

const fetchCategoryWiseProduct = async (category) => {
  try {
    const response = await fetch(SummaryApi.categoryWiseProduct.url, {
      method: SummaryApi.categoryWiseProduct.method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ category })
    });
    const responseData = await response.json();
    return responseData?.data || [];
  } catch (error) {
    console.error('Category fetch error:', error);
    return [];
  }
};

export default fetchCategoryWiseProduct;
